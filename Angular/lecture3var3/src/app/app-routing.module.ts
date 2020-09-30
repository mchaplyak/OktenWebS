import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllUsersComponent} from "./components/all-users/all-users.component";
import {UserViewComponent} from "./components/user-view/user-view.component";

const routes: Routes = [
  {
    path: 'users', component: AllUsersComponent, children: [
      {
        path: 'view/:id', component: UserViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
