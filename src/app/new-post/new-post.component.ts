import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Post } from '../../entities/post';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;


  constructor(private _router: Router,
              private _formBuilder: FormBuilder,
              private _postService: PostService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.postForm = this._formBuilder.group({
      title : ['', Validators.required],
      content : ['', Validators.required]
    });
  }

  onSubmit(){
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const newPost = new Post(title, content);
    this._postService.createNewPost(newPost);
    this._router.navigate(['/posts']);
  }
}
