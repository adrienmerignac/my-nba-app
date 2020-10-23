import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../models';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  @Output() create = new EventEmitter<Post>();

  myForm: FormGroup;

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  // tslint:disable-next-line: typedef
  addPost() {
    this.create.emit(this.myForm.value);
  }

}
