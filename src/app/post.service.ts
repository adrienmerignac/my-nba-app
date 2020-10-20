import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post, Comments } from './models';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

 // Liste des posts
  public getAllPosts(): Observable<Post> {
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts`);
  }

  // List des commentaires par posts
  public getCommentByPost(postId: number): Observable<Comments> {
    return this.http.get<Comments>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  }

}
