import { Component, OnChanges, Input } from "@angular/core";
import { ThemePalette } from "@angular/material/core";

@Component({
  selector: "app-article-sentiment",
  templateUrl: "./article-sentiment.component.html",
  styleUrls: ["./article-sentiment.component.css"],
})
export class ArticleSentimentComponent implements OnChanges {
  @Input() sentimentValue: number;
  @Input() polarityDescription: string;
  colorClass: ThemePalette;
  sentimentDescription: string;

  constructor() {
    this.sentimentValue = 0;
  }

  ngOnChanges() {
    this.assignAttributes();
  }

  /**
   * Asigna la descripción y el color de acuerdo a la polaridad del sentimiento
   */
  private assignAttributes() {
    switch (this.polarityDescription) {
      case 'neutral':
        this.sentimentDescription = 'Neutral';
        this.colorClass = 'primary';
        break;
      case 'positive':
        this.sentimentDescription = 'Positivo';
        this.colorClass = 'warn';
        break;
      case 'negative':
        this.sentimentDescription = 'Negativo';
        this.colorClass = 'accent';
        break;
    }
  }
}
