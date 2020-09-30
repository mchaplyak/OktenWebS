import { Component, OnInit } from '@angular/core';
import {UserService} from "../../serivces/user.service";
import {User} from "../../models/User";

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(value => this.users = value)
  }

}
