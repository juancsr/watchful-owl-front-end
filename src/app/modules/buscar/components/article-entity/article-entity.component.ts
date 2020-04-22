import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-entity',
  templateUrl: './article-entity.component.html',
  styleUrls: ['./article-entity.component.css']
})
export class ArticleEntityComponent implements OnInit {

  @Input() title: string;

  constructor() { 
    this.title = 'No title found';
  }

  ngOnInit() {
  }

}
