import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{

  @Input() mesPosts: any[] = [3];
  constructor() { }

  ngOnInit() {
  }

  onAfficherTableau(){
    console.log(this.mesPosts);
  }
}
