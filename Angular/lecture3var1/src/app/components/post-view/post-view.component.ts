import { Component, OnInit } from '@angular/core';
import {Post} from "../../models/Post";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  viewPost: Post;
  constructor(private activatedRoute: ActivatedRoute,
              private postService: PostService) {
    this.activatedRoute.params.subscribe((params) =>
    this.postService.getPostById(params.id).subscribe(value => this.viewPost = value)
    )
  }

  ngOnInit(): void {
  }

}
