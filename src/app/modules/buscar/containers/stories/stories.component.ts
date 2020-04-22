import { Component, OnInit } from '@angular/core';
import { WatchfulOwlService } from "../../../core/services/watchful-owl-api/watchful-api.service";
import { AnalysisModel } from "../../../shared/models/watchful-owl-api/analysis";
import { finalize } from 'rxjs/operators';

@Component({
  selector: "app-stories",
  templateUrl: "./stories.component.html",
  styleUrls: ["./stories.component.css"],
})
export class StoriesComponent implements OnInit {
  analysis: AnalysisModel;
  url: string;
  isLoading: boolean;
  analysisError: boolean;
  title: string;
  sentiment: number;
  sentimentDescription: string;
  categories: object[];
  summary: string[];

  constructor(private watchfulOwlService: WatchfulOwlService) {
    this.isLoading = false;
    this.analysisError = false;
  }

  ngOnInit() {}

  /**
   * Obtiene la información del servicio getAnalysis del api back-end
   */
  fetchAnalysis() {
    this.isLoading = true;
    this.analysisError = false;
    const params = { url: this.url };
    this.watchfulOwlService
      .getAnalysis(params)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe(
        (response) => {
          this.analysisError = false;
          this.analysis = response;
          this.assingVariables();
        },
        (error) => {
          console.log(error)
          this.analysisError = true;
        }
      );
  }

  /**
   * Asigna las variables correspondientes para la información relevante del análisis
   */
  private assingVariables() {
    this.title = this.analysis.text.split('\n')[0];
    this.sentiment = this.analysis.sentiment.polarity_confidence * 100;
    this.sentimentDescription = this.analysis.sentiment.polarity;
    this.categories = this.analysis.classification.categories;
    this.summary = this.analysis.summary.sentences;
  }
}
