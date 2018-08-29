import { Component } from '@angular/core';

//Import de la class Post contenue dans le dossier entities partie bonus
import { Post } from '../entities/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  post1:Post;
  post2:Post;
  post3:Post;
  posts:any[];
  constructor(){
    this.post1 = new Post();
    this.post1.title = 'Mon premier post';
    this.post1.content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    this.post1.loveIts = 5;

    this.post2 = new Post();
    this.post2.title = 'Mon second post';
    this.post2.content = 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
    this.post2.loveIts = 0;

    this.post3 = new Post();
    this.post3.title = 'Mon dernier post';
    this.post3.content = 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    this.post3.loveIts = -5;

    this.posts = [this.post1, this.post2, this.post3];
  }

}
