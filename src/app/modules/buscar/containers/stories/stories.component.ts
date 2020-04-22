import { Component, OnInit } from '@angular/core';
import { AylienService } from '../../../core/services/aylien/aylien.service';
import { StoriesModel } from '../../../shared/models/story';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css'],
})
export class StoriesComponent implements OnInit {
  private stories: StoriesModel;

  constructor(private aylienService: AylienService) {}

  ngOnInit() {
    this.fetchStories();
  }

  private fetchStories() {
    this.aylienService.getAllStories().subscribe(stories => {
      this.stories = stories;
      console.log(this.stories);
    });
  }
}
