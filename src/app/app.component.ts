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
    apiKey: "AIzaSyCv4NUAl0w5YHopk4D9qxX7lpjx3_35ax8",
    authDomain: "blogangularopenclassroom-cdc27.firebaseapp.com",
    databaseURL: "https://blogangularopenclassroom-cdc27.firebaseio.com",
    projectId: "blogangularopenclassroom-cdc27",
    storageBucket: "blogangularopenclassroom-cdc27.appspot.com",
    messagingSenderId: "704818989509"
  };
  firebase.initializeApp(config);
  }

}
