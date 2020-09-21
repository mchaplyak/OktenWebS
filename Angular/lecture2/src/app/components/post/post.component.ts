import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../models/Post";
import {CommentService} from "../../services/comment.service";
import {log} from "util";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input()
  post: Post;

  constructor(private commentService: CommentService) {

  }


  vwComments(post: Post) {
    this.commentService.getAllCommentsById(post.id).subscribe(value => console.log(value))
  }
}
