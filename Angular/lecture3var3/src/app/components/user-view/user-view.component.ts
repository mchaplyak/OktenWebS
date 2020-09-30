import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  viewUser: User

  constructor(private activatedRoute:ActivatedRoute,
              private userService: UserService) {
    this.activatedRoute.params.subscribe((params) => {
      this.viewUser = history.state.userObj
    })
  }

  ngOnInit(): void {
  }

}
