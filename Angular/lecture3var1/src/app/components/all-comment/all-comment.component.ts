import { Component, OnInit } from '@angular/core';
import {CommentService} from "../../services/comment.service";
import {Comment} from "../../models/Comment";


@Component({
  selector: 'app-all-comment',
  templateUrl: './all-comment.component.html',
  styleUrls: ['./all-comment.component.css']
})
export class AllCommentComponent implements OnInit {

  comments: Comment[];

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.getAllComments().subscribe(value => this.comments = value);
  }

}
