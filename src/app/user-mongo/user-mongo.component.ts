import {Component, Injectable, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {UserMongoModel} from '../model/user-mongo.model';
import {UserMongoService} from '../service/user-mogo.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-mongo',
  templateUrl: './user-mongo.component.html',
  styleUrls: ['./user-mongo.component.css']
})

@Injectable()
export class UserMongoComponent implements OnInit {

  users: UserMongoModel[];
  private subscription: Subscription;
  constructor(private userMongoService: UserMongoService) {}

  ngOnInit() {
    this.users = this.userMongoService.getAllUsers();
    this.subscription = this.userMongoService.userChange
      .subscribe(
        (users: UserMongoModel[]) => {
          this.users = users;
        }
      );
  }

  updateUser(userId: number) {

  }

  deleteUser(userId: number) {
    this.userMongoService.deleteUser(userId);
  }
}
