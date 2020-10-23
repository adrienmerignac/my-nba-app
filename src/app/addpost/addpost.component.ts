import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../models';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.scss'],
})
export class AddpostComponent implements OnInit {
  myForm: FormGroup;

  constructor(private postService: PostService) {}

  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  createPost(post: Post) {
    this.postService.addPost(post).subscribe((res: Post) => {});
  }
}
