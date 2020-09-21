import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input()
  user: User;

  constructor(private postService: PostService) { }


  detailsBtn(user: User) {
    this.postService.getAllPostsOfUserId(user.id).subscribe(value => console.log(value))
  }
}
