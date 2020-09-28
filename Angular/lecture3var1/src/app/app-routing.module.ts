import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllUserComponent} from "./components/all-user/all-user.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {AllPostComponent} from "./components/all-post/all-post.component";
import {PostViewComponent} from "./components/post-view/post-view.component";
import {AllCommentComponent} from "./components/all-comment/all-comment.component";
import {CommentViewComponent} from "./components/comment-view/comment-view.component";


const routes: Routes = [
  {path: 'user', component: AllUserComponent, children: [
      {path: 'details/:id', component: UserDetailsComponent}
    ]
  },
  {
    path: 'post', component: AllPostComponent, children: [
      {path: 'details/:id', component: PostViewComponent}
    ]
  },
  {
    path: 'comment', component: AllCommentComponent, children: [
      {path: 'detail/:id', component: CommentViewComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
