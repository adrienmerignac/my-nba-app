import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Post } from '../models';
import { PostService } from './../post.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  Posts: Post[];

  constructor(private route: ActivatedRoute, private postService: PostService, private router: Router) {

    this.route.params.subscribe(res => {
      console.log(res);

      this.postService.getAllPosts().subscribe(data => {
        console.log('Posts', data);
        this.Posts = data;
      });
    });
   }

  ngOnInit(): void {
  }

}
