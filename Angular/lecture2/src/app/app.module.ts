import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllUserComponent } from './components/all-user/all-user.component';
import { UserComponent } from './components/user/user.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { AllCommentComponent } from './components/all-comment/all-comment.component';
import { CommentComponent } from './components/comment/comment.component';
import { AllPostComponent } from './components/all-post/all-post.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    AllUserComponent,
    UserComponent,
    AllCommentComponent,
    CommentComponent,
    AllPostComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: 'user', component: AllUserComponent
      },
      {
        path: 'comment', component: AllCommentComponent
      },
      {
        path: 'post', component: AllPostComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
