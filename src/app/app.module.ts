import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {UserMongoService} from './service/user-mogo.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UserMongoComponent} from './user-mongo/user-mongo.component';


@NgModule({
  declarations: [
    AppComponent,
    UserMongoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [UserMongoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
