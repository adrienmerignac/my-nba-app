import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Comments, Standard } from '../models';

import { PostService } from './../post.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  postComments: Comments;
  postId;

  constructor(private route: ActivatedRoute, private postService: PostService, private router: Router) {
    this.route.params.subscribe(res => {
      console.log(res.postId);

      this.postId = res.postId;

      this.postService.getCommentByPost(res.postId).subscribe(data => {
        console.log('postComments', data);
        this.postComments = data;
      });

    });
  }

  ngOnInit(): void {
  }

}
