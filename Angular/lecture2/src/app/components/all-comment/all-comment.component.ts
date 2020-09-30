import { Component, OnInit } from '@angular/core';
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-all-comment',
  templateUrl: './all-comment.component.html',
  styleUrls: ['./all-comment.component.css']
})
export class AllCommentComponent {

  comments: Comment[];

  constructor(private commentService: CommentService) {
    this.commentService.getAllComments().subscribe(value => this.comments = value);
  }


}
