import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-classification',
  templateUrl: './article-classification.component.html',
  styleUrls: ['./article-classification.component.css']
})
export class ArticleClassificationComponent implements OnInit {
  @Input() categories:any[];

  constructor() { }

  ngOnInit() {
  }

}
