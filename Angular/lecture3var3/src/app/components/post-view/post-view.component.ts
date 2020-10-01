import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Post} from "../../models/Post";

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  postView: Post

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params) =>
    this.postView = history.state.postObj
    )
  }

  ngOnInit(): void {
  }

}
