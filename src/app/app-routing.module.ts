import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddpostComponent } from './addpost/addpost.component';
import { PostDetailsComponent } from './postdetails/postdetails.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailsComponent
  },
  {
    path: 'add',
    component: AddpostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
