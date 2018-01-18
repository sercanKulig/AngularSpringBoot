import {Component, Injectable, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {UserMongoModel} from '../model/user-mongo.model';
import {UserMongoService} from '../service/user-mogo.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Subject} from 'rxjs/Subject';

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
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.users = this.userMongoService.getAllUsers();
    this.subscription = this.userMongoService.userChange
      .subscribe(
        (users: UserMongoModel[]) => {
          this.users = users;
          this.dtTrigger.next();
        }
      );
  }

  updateUser(userId: number) {

  }

  deleteUser(userId: number) {
    this.userMongoService.deleteUser(userId);
  }
}
