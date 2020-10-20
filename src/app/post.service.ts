import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from './model';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

 // Liste des posts
  public getAllPosts(): Observable<Post> {
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts`);
  }

}
