import {Component, Injectable, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {UserMongoModel} from '../model/user-mongo.model';
import {UserMongoService} from '../service/user-mogo.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-mongo',
  templateUrl: './user-mongo.component.html',
  styleUrls: ['./user-mongo.component.css']
})

@Injectable()
export class UserMongoComponent implements OnInit {
  closeResult: string;

  users: UserMongoModel[];
  private subscription: Subscription;
  constructor(private userMongoService: UserMongoService,
              private modalService: NgbModal) {}

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


  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
