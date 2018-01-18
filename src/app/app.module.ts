import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {UserMongoService} from './service/user-mogo.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UserMongoComponent} from './user-mongo/user-mongo.component';
import { UserMongoSaveEditComponent } from './user-mongo/user-mongo-save-edit/user-mongo-save-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  declarations: [
    AppComponent,
    UserMongoComponent,
    UserMongoSaveEditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    DataTablesModule
  ],
  providers: [UserMongoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
