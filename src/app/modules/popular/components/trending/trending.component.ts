import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: "app-trending",
  templateUrl: "./trending.component.html",
  styleUrls: ["./trending.component.css"],
})
export class TrendingComponent implements OnInit {
  @Input() title: string;
  @Input() author: string;
  @Input() body: string;
  @Input() url: string;
  constructor() {}

  ngOnInit() {}
}
