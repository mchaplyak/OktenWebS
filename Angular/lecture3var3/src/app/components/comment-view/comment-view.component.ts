import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Comment} from "../../models/Comment";

@Component({
  selector: 'app-comment-view',
  templateUrl: './comment-view.component.html',
  styleUrls: ['./comment-view.component.css']
})
export class CommentViewComponent implements OnInit {

  viewComment: Comment

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params) =>
    this.viewComment = history.state.commentObj
    )

  }

  ngOnInit(): void {
  }

}
