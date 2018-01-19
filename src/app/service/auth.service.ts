import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {UserMongoModel} from '../model/user-mongo.model';

@Injectable()
export class AuthService {
  private apiRoot = 'http://localhost:9090/api/';
  private headers = new Headers({ 'Content-Type': 'application/json'});
  private options = new RequestOptions({ headers: this.headers });
  token: string;
  userExist: boolean;
  user: UserMongoModel[];

  constructor(private router: Router, private http: Http) {
  }

  singupUser(email: string, password: string) {

  }

  signinUser(params: any): Promise<boolean>{
    return this.http.post(this.apiRoot + 'checkUser', JSON.stringify(params), this.options)
      .toPromise()
      .then(
        response => {
          this.router.navigate(['/']);
          this.userExist = true;
        }
      )
      .catch(this.handleError);
  }

  getToken() {

  }

  isAuthenticated() {
    return this.userExist;
  }

  logout() {
    this.token = null;
    this.router.navigate(['/signin']);
    this.userExist = false;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
