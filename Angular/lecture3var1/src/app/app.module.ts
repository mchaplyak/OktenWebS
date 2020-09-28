import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllUserComponent } from './components/all-user/all-user.component';
import { UserComponent } from './components/user/user.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AllPostComponent } from './components/all-post/all-post.component';
import { PostComponent } from './components/post/post.component';
import { PostViewComponent } from './components/post-view/post-view.component';
import { AllCommentComponent } from './components/all-comment/all-comment.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentViewComponent } from './components/comment-view/comment-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AllUserComponent,
    UserComponent,
    UserDetailsComponent,
    AllPostComponent,
    PostComponent,
    PostViewComponent,
    AllCommentComponent,
    CommentComponent,
    CommentViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
