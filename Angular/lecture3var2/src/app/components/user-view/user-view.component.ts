import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../serivces/user.service";
import {User} from "../../models/User";

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  viewUser: User;

  constructor(private router: Router,
              private activatedRoute :ActivatedRoute) {
    this.activatedRoute.params.subscribe((params) => {
      this.viewUser = history.state.xxx
    } )

  }

  ngOnInit(): void {
  }

}
