import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Comment, Standard } from '../models';

import { PostService } from './../post.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  postComments: Comment[];

  constructor(private route: ActivatedRoute, private postService: PostService, private router: Router) {
    this.route.params.subscribe(res => {
      console.log(res.postId);

      this.postService.getCommentsByPost(res.postId).subscribe(data => {
        console.log('postComments', data);
        this.postComments = data;
      });

    });
  }

  ngOnInit(): void {
  }

}
