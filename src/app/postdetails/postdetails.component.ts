import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Comment, PostDetail } from '../models';

import {MatAccordion} from '@angular/material/expansion';


import { PostService } from '../post.service';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.scss']
})
export class PostDetailsComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;

  detail: PostDetail;
  comments: Comment[];

  constructor(private route: ActivatedRoute, private postService: PostService, private router: Router) {
    this.route.params.subscribe(res => {
      console.log(res.id);

      this.postService.getPostDetail(res.id).subscribe(data => {
        console.log('detail', data);
        this.detail = data;
      });

      this.postService.getCommentsByPost(res.id).subscribe(data => {
        console.log('comments', data);
        this.comments = data;
      });

    });
  }

  ngOnInit(): void {
  }

}
