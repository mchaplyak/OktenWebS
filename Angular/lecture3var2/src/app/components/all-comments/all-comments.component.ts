import { Component, OnInit } from '@angular/core';
import {Comment} from "../../models/Comment";
import {CommentService} from "../../serivces/comment.service";

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {

  comments: Comment[];

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.getAllComments().subscribe(value => this.comments = value);
  }

}
