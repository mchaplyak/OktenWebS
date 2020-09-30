import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { AllUsersComponent } from './components/all-users/all-users.component';
import { UserComponent } from './components/user/user.component';
import { UserViewComponent } from './components/user-view/user-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    UserComponent,
    UserViewComponent
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
