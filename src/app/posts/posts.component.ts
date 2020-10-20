import { Component, OnInit } from '@angular/core';

import { Standard, Post } from '../models';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { PostService } from './../post.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  allPost: any;

  constructor(private route: ActivatedRoute, private postService: PostService, private router: Router) {

    this.route.params.subscribe(res => {
      console.log(res);

      this.postService.getAllPosts().subscribe(data => {
        console.log('posts', data);
        const post = data;
        this.allPost = post;
      });
    });
   }

  ngOnInit(): void {
  }

}
