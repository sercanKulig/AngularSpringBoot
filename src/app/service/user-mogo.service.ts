import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map'
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {UserMongoModel} from '../model/user-mongo.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserMongoService {
  private apiRoot = 'http://localhost:9090/api/';
  private headers = new Headers({ 'Content-Type': 'application/json'});
  private options = new RequestOptions({ headers: this.headers });


  constructor(private http: Http) {
  }

  userChange = new Subject<UserMongoModel[]>();
  users: UserMongoModel[] = [];

  getAllUsers() {
    this.fetchData();
    return this.users.slice();
  }

  deleteUser(id: number) {
    this.deleteData(id);
  }

  fetchData() {
    this.http.get(this.apiRoot + 'users')
      .map(
        (response: Response) => {
          this.users = response.json();
          return this.users;
        }
      )
      .subscribe(
        (user: UserMongoModel[]) => {
          this.userChange.next(this.users.slice());
        }
      );
  }

  deleteData(id: number): void {
    const url = this.apiRoot + 'deleteUser/' + id;
    this.headers.append('Content-Type', 'application/json');
    this.http.delete(url, new RequestOptions({
      headers: this.headers
    }))
      .subscribe(
        (response: Response) => {
          this.getAllUsers();
        }
      );
  }

  postData(url: string, param: any) : Promise<any> {
    return this.http
      .post(this.apiRoot + url, JSON.stringify(param), this.options)
      .toPromise()
      .then(res => res.json() as UserMongoModel)
      .catch(this.handleError);
  }

  putData() {
    return this.http.put(this.apiRoot + 'users', this.getAllUsers());
  }

  getUserLastId() {
    const userList = this.users.slice();
    return userList.length > 0 ? userList.length + 1 : 1;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
