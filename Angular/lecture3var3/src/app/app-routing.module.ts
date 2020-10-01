import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllUsersComponent} from "./components/all-users/all-users.component";
import {UserViewComponent} from "./components/user-view/user-view.component";
import {AllPostsComponent} from "./components/all-posts/all-posts.component";
import {PostViewComponent} from "./components/post-view/post-view.component";
import {AllCommentsComponent} from "./components/all-comments/all-comments.component";
import {CommentViewComponent} from "./components/comment-view/comment-view.component";

const routes: Routes = [
  {
    path: 'users', component: AllUsersComponent, children: [
      {
        path: 'view/:id', component: UserViewComponent
      }
    ]
  },
  {
    path: 'posts', component: AllPostsComponent, children: [
      {
        path: 'view/:id', component: PostViewComponent
      }
    ]
  },
  {
    path: 'comments', component: AllCommentsComponent, children: [
      {
        path: 'view/:id', component: CommentViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
