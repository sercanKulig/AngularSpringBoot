import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SingupComponent} from './auth/singup/singup.component';
import {SinginComponent} from './auth/singin/singin.component';
import {UserMongoComponent} from './user-mongo/user-mongo.component';
import {RouteProtectionService} from './service/route-protection.service';
import {UserMongoSaveEditComponent} from './user-mongo/user-mongo-save-edit/user-mongo-save-edit.component';
const appRoutes: Routes = [
  {path: '', redirectTo: '/users', pathMatch: 'full'},
  {
    path: 'users', component: UserMongoComponent, canActivate: [RouteProtectionService], children: [
      {path: '', component: UserMongoSaveEditComponent }
    ]
  },
  // {
  //   path: 'recipes', component: RecipesComponent, canActivate: [RouteProtectionService], children: [
  //     {path: '', component: RecipeStartComponent },
  //     {path: 'new', component: RecipeEditComponent},
  //     {path: ':id', component: RecipeDetailComponent },
  //     {path: ':id/edit', component: RecipeEditComponent},
  //   ]},
  // {path: 'shopping-list', component: ShoppingListComponent, canActivate: [RouteProtectionService]},
  {path: 'signup', component: SingupComponent},
  {path: 'signin', component: SinginComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
