import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { AllUserComponent } from './components/all-user/all-user.component';
import { UserComponent } from './components/user/user.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { AllPostComponent } from './components/all-post/all-post.component';
import { PostComponent } from './components/post/post.component';
import { PostViewComponent } from './components/post-view/post-view.component';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentViewComponent } from './components/comment-view/comment-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AllUserComponent,
    UserComponent,
    UserViewComponent,
    AllPostComponent,
    PostComponent,
    PostViewComponent,
    AllCommentsComponent,
    CommentComponent,
    CommentViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
