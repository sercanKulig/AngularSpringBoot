import {Component} from '@angular/core';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private authService: AuthService) {
  }

  onLogout() {
    this.authService.logout();
  }

}
