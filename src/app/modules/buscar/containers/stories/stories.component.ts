import { Component, OnInit } from '@angular/core';
import { WatchfulOwlService } from "../../../core/services/watchful-owl-api/watchful-api.service";
import { AnalysisModel } from "../../../shared/models/watchful-owl-api/analysis";

@Component({
  selector: "app-stories",
  templateUrl: "./stories.component.html",
  styleUrls: ["./stories.component.css"],
})
export class StoriesComponent implements OnInit {
  anaylisis: AnalysisModel;
  url: string;
  isLoading: boolean;

  constructor(private watchfulOwlService: WatchfulOwlService) {
    this.isLoading = false;
  }

  ngOnInit() {
    // this.fetchStories();
  }

  fetchStories() {
    this.isLoading = true;
    const params = { url: this.url }
    this.watchfulOwlService.getAnalysis(params).subscribe(response => {
      this.anaylisis = response;
      this.isLoading = false;
    });
  }
}
