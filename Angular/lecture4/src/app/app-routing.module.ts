import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AllUsersComponent} from "./modules/user/components/all-users/all-users.component";
import {AllPostsComponent} from "./modules/post/components/all-posts/all-posts.component";

const routes: Routes = [
  {path: 'users', loadChildren: () => import('./modules/user/user.module')
      .then(m => m.UserModule)},
  {path: 'posts', component: AllPostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
