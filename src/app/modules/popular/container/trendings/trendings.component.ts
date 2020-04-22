import { Component, OnInit } from '@angular/core';
import { AylienService } from 'src/app/modules/core/services/aylien/aylien.service';
import { StoryModel } from "src/app/modules/shared/models/story";

@Component({
  selector: "app-trendings",
  templateUrl: "./trendings.component.html",
  styleUrls: ["./trendings.component.css"],
})
export class TrendingsComponent implements OnInit {
  isLoading: boolean;
  stories: StoryModel[];

  constructor(private aylienService: AylienService) {
    this.isLoading = true;
  }

  ngOnInit() {
    this.fetchAllStores();
  }

  fetchAllStores() {
    this.aylienService.getAllStories().subscribe((response) => {
      this.isLoading = false;
      this.stories = response;
      console.log(this.stories);
      // console.log(typeof response, this.stories, response)
    });
  }
}
