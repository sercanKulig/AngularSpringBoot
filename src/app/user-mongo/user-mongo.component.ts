import {Component, Injectable, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {UserMongoModel} from '../model/user-mongo.model';
import {UserMongoService} from '../service/user-mogo.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Subject} from 'rxjs/Subject';
import {ToastData, ToastOptions, ToastyConfig, ToastyService} from 'ng2-toasty';

@Component({
  selector: 'app-user-mongo',
  templateUrl: './user-mongo.component.html',
  styleUrls: ['./user-mongo.component.css']
})

@Injectable()
export class UserMongoComponent implements OnInit {

  users: UserMongoModel[];
  private subscription: Subscription;
  constructor(private userMongoService: UserMongoService,
              private toastyService:ToastyService,
              private toastyConfig: ToastyConfig) {
    this.toastyConfig.theme = 'bootstrap';
  }
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

  addToast() {
    // Just add default Toast with title only
    this.toastyService.default('Hi there');
    // Or create the instance of ToastOptions
    // var toastOptions:ToastOptions = {
    //   title: "My title",
    //   msg: "The message",
    //   showClose: true,
    //   timeout: 5000,
    //   theme: 'default',
    //   onAdd: (toast:ToastData) => {
    //     console.log('Toast ' + toast.id + ' has been added!');
    //   },
    //   onRemove: function(toast:ToastData) {
    //     console.log('Toast ' + toast.id + ' has been removed!');
    //   }
    // };
    // Add see all possible types in one shot
    // this.toastyService.info(toastOptions);
    // this.toastyService.success(toastOptions);
    // this.toastyService.wait(toastOptions);
    // this.toastyService.error(toastOptions);
    // this.toastyService.warning(toastOptions);
  }
}
