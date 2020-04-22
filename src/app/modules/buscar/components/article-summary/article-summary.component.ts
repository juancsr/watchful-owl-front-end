import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-summary',
  templateUrl: './article-summary.component.html',
  styleUrls: ['./article-summary.component.css']
})
export class ArticleSummaryComponent implements OnInit {
  @Input() summary: string[];
  constructor() { }

  ngOnInit() {
  }

}
