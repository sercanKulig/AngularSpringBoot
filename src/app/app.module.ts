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
import {AppRoutingModule} from './app-routing.module';
import {SinginComponent} from './auth/singin/singin.component';
import {SingupComponent} from './auth/singup/singup.component';
import {AuthService} from './service/auth.service';
import {RouteProtectionService} from './service/route-protection.service';
import {HeaderComponent} from './header/header.component';
import {DropdownDirective} from './directives/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserMongoComponent,
    SinginComponent,
    SingupComponent,
    DropdownDirective,
    UserMongoSaveEditComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    DataTablesModule,
    AppRoutingModule
  ],
  providers: [UserMongoService, AuthService, RouteProtectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
