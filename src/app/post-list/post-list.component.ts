import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from 'src/entities/post';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy{

  posts: Post[];
  postsSubscription: Subscription;

  constructor(private _postService: PostService,
              private _router: Router) { }

  ngOnInit() {
    this.postsSubscription = this._postService.postsSubject.subscribe(
      (post: Post[]) => {
        this.posts = post;
      }   
    );
    this._postService.emitPost();
  }

  /**
   * Dirige l'utilisateur vers le formulaire de création d'un post
   */
  onNewPost(){
    this._router.navigate(['/posts', 'new']);
  }


  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
