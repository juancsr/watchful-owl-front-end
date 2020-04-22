import { Component, OnInit, Input } from '@angular/core';
import { ConceptModel } from 'src/app/modules/shared/models/watchful-owl-api/concept';

@Component({
  selector: 'app-article-concept',
  templateUrl: './article-concept.component.html',
  styleUrls: ['./article-concept.component.css']
})
export class ArticleConceptComponent implements OnInit {
  @Input() concepts: ConceptModel[];
  
  constructor() { }

  ngOnInit() {
  }

}
