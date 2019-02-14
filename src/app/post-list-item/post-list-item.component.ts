import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../entities/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() postElementToDisplay: Post;
  postColor:string;

  constructor(private _postService: PostService) { }

  ngOnInit() {
    /**
     * Au chargement du composant on assigne les couleurs correspondante au nombre de likes
     */
    if(this.postElementToDisplay.loveIts > 0){
      this.postColor = 'green';
    }else if(this.postElementToDisplay.loveIts < 0){
      this.postColor = 'red';
    }else if(this.postElementToDisplay.loveIts == 0){
      this.postColor = '';
    }
  }

      /**
   * Appel au service post pour la suppression d'un livre
   * @param post Post
   */
  onDeletePost(post: Post){
    this._postService.removePost(post);
  }

  /**
   * Description : Fonction qui permet d'incrémenter le nombre de like et d'appliquer les modifications visuelles en conséquence.
   */
  onLikeIt(post: Post){
    this._postService.like(post);
    if(post.loveIts > 0){
      return this.postColor = 'green';
    }
    if(post.loveIts == 0){
      return this.postColor ='';
    }
  }

  /**
   * Description : Fonction qui permet de décrementer le nombre de like et d'appliquer les modifications visuelles en conséquence.
   */
  onDontLikeIt(post: Post){
    this._postService.disLike(post);
    if(post.loveIts < 0){
      return this.postColor = 'red';
    }
    if(post.loveIts == 0){
      return this.postColor ='';
    }
  }
}
