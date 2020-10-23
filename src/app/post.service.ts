import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Post, Comment, PostDetail } from './models';

import { Observable } from 'rxjs';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json',
//     Authorization: 'my-auth-token'
//   })
// };

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

  // Ajout d'un POST
  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`https://jsonplaceholder.typicode.com/posts`, post);
  }

}
