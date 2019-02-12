import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Post } from '../../entities/post';
import { Subject } from 'rxjs';

@Injectable()
export class PostService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() { 
    this.getPosts();
  }

  emitPost(){
    this.postsSubject.next(this.posts);
  }

  /**
   * Ecrit et remplace les données sur le backend firebase au noeud spécifié '/posts'
   */
  savePosts(){
    firebase.database().ref('/posts').set(this.posts);
  }

  /**
   * Recupere la liste des livres depuis firebase
   */
  getPosts(){
    firebase.database().ref('/posts')
    .on('value', (data) => {
      this.posts = data.val() ? data.val() : [];
      this.emitPost();
    });
  }

  /**
   * Creation d'un nouveau post
   * @param newPost Post
   */
  createNewPost(newPost: Post){
    this.posts.push(newPost);
    this.savePosts();
    this.emitPost();
  }

  /**
   * Suppression d'un post
   * @param post Post
   */
  removePost(post: Post){
    const postindexElement = this.posts.findIndex(
      (postEl) => {
        if(postEl === post){
          return true;
        }
      }
    );
    this.posts.splice(postindexElement, 1);
    this.savePosts();
    this.emitPost();
  }

}
