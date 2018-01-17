import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map'
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {UserMongoModel} from '../model/user-mongo.model';

@Injectable()
export class UserMongoService {
  private apiRoot = 'http://localhost:9090/api/';
  private headers = new Headers();

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

  putData() {
    return this.http.put(this.apiRoot + 'users', this.getAllUsers());
  }
}
