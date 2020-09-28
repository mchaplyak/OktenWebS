import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommentService} from "../../services/comment.service";
import {Comment} from "../../models/Comment";

@Component({
  selector: 'app-comment-view',
  templateUrl: './comment-view.component.html',
  styleUrls: ['./comment-view.component.css']
})
export class CommentViewComponent implements OnInit {

  viewComment: Comment;
  constructor(private activatedRoute: ActivatedRoute,
              private commentService: CommentService) {
    this.activatedRoute.params.subscribe((params) =>
    this.commentService.getCommentById(params.id).subscribe(value => this.viewComment = value)
    )
  }

  ngOnInit(): void {
  }

}
