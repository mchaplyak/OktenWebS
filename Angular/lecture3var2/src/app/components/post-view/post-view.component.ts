import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../serivces/post.service";
import {Post} from "../../models/Post";

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})


export class PostViewComponent implements OnInit {

  viewPost: Post

  constructor(private activatedRoute: ActivatedRoute,
              private postService :PostService) {
    this.activatedRoute.params.subscribe((params) => {
      this.viewPost = history.state.xxx
    })
  }

  ngOnInit(): void {
  }

}
