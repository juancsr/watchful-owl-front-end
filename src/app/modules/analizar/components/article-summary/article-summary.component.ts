import { Component, OnInit, Input } from '@angular/core';
import { ConceptModel } from 'src/app/modules/shared/models/watchful-owl-api/concept';

@Component({
  selector: 'app-article-summary',
  templateUrl: './article-summary.component.html',
  styleUrls: ['./article-summary.component.css'],
})
export class ArticleSummaryComponent implements OnInit {
  @Input() summary: string[];
  @Input() concepts: ConceptModel;
  summaryWithConcepts: string;

  constructor() {}

  ngOnInit() {
    this.summaryWithConcepts = '';
    this.buildSummaryWithConcept();
  }

  /**
   * Construye el resumen agregando un hipervinculo al signado de todas las palabras que estén tanto en summary como en concepts
   */
  private buildSummaryWithConcept() {
    let concept = '';
    this.summary.forEach(sentence => {
      let paragraph = '';
      this.summaryWithConcepts += '<p>';
      sentence.split(' ').forEach(word => {
        concept = this.searchConcept(word);
        if (concept !== '') {
          paragraph += concept + " ";
        } else {
          paragraph += word + " ";
        }
      });
      this.summaryWithConcepts += paragraph;
      this.summaryWithConcepts += '</p>';
    });
  }

  /**
   * Busca el concepto (significado o link) de una palabra en el resumen
   * @param word la palabra a buscar
   */
  private searchConcept(word: string): string {
    for (const key in this.concepts.concepts) {
      if (this.concepts.concepts.hasOwnProperty(key)) {
        const surfaceForms = this.concepts.concepts[key].surfaceForms;
        for (const surfaceKey in surfaceForms) {
          if (surfaceForms.hasOwnProperty(surfaceKey)) {
            if (surfaceForms[surfaceKey].string === word) {
              return `<a href="${key}">${surfaceForms[surfaceKey].string}</a>`;
            }
          }
        }
      }
    }
    return '';
  }
}
