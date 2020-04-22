import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: "app-article-title",
  templateUrl: "./article-title.component.html",
  styleUrls: ["./article-title.component.css"],
})
export class ArticleTitleComponent implements OnInit {
  @Input() title: string;
  
  constructor() {}

  ngOnInit() {}
}
