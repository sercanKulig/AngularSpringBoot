import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {UserMongoModel} from '../model/user-mongo.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserMongoService {
  private apiRoot = 'http://localhost:9090/api/';
  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({headers: this.headers});


  constructor(private http: Http) {
  }

  userChange = new Subject<UserMongoModel[]>();
  users: UserMongoModel[] = [];

  getAllUsers() {
    this.fetchData()
      .subscribe(
        this.userChange.next
      );
    return this.users.slice();
  }

  deleteUser(id: number) {
    this.deleteData(id);
  }

  /*  fetchData(): Observable<UserMongoModel[]> {
      return this.http.get(this.apiRoot + 'users')
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
    }*/

  public fetchData(): Observable<UserMongoModel[]> {
    return this.http
      .get(this.apiRoot + 'users')
      .map(
        response => {
          this.users = response.json();
          return this.users;
        }
      )
      .catch(this._serverError)
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

  postData(url: string, param: any): Promise<any> {
    return this.http
      .post(this.apiRoot + url, JSON.stringify(param), this.options)
      .toPromise()
      .then(res => res.json() as UserMongoModel)
      .then(response => {
        this.getAllUsers();
      })
      .catch(this._serverError);
  }

  putData() {
    return this.http.put(this.apiRoot + 'users', this.getAllUsers());
  }

  getUserLastId() {
    const userList = this.users.slice();
    return userList.length > 0 ? userList.slice(-1)[0].userId + 1 : 1;
  }

  private _serverError(err: any) {
    console.log('sever error:', err);  // debug
    if (err instanceof Response) {
      return Observable.throw(err.json().error || 'backend server error');
      // if you're using lite-server, use the following line
      // instead of the line above:
      //return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(err || 'backend server error');
  }
}
