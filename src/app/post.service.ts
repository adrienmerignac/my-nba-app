import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post, Comment, PostDetail } from './models';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

 // Liste des posts
  public getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`);
  }

  // Detail du post par ID du post
  public getPostDetail(id: number): Observable<PostDetail> {
    return this.http.get<PostDetail>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  // List des commentaires par posts
  public getCommentsByPost(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  }

}
