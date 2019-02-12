import { Component } from '@angular/core';

//Import de la class Post contenue dans le dossier entities partie bonus
import { Post } from '../entities/post';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{

  constructor(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA0FJ_rHaioFxb7CQCZ20ZOxFu86XPp5uQ",
    authDomain: "blogangularopenclassrooms.firebaseapp.com",
    databaseURL: "https://blogangularopenclassrooms.firebaseio.com",
    projectId: "blogangularopenclassrooms",
    storageBucket: "blogangularopenclassrooms.appspot.com",
    messagingSenderId: "819820542200"
  };
  firebase.initializeApp(config);

  }

}
