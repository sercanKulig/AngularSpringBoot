import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {UserMongoModel} from '../model/user-mongo.model';
import {AuthService} from './auth.service';

@Injectable()
export class RouteProtectionService implements CanActivate{

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService) {
  }

  onRootProtectionRecipe(users: UserMongoModel) {
    if (users == null) {
      this.router.navigate([''], {relativeTo: this.route});
    }
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.isAuthenticated();
  }
}
