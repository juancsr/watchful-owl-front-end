import { Component, OnChanges, OnInit, Input } from "@angular/core";
import { EntityModel } from "src/app/modules/shared/models/watchful-owl-api/entity";

@Component({
  selector: "app-article-entity",
  templateUrl: "./article-entity.component.html",
  styleUrls: ["./article-entity.component.css"],
})
export class ArticleEntityComponent implements OnInit, OnChanges {
  @Input() entities: EntityModel;
  mentions: string[];

  constructor() {
    this.mentions = [];
  }

  ngOnInit() {
    console.log(this.entities);
  }
  ngOnChanges() {
    console.log(this.entities);
    this.buildMentions();
  }

  /**
   * Construye el arreglo de menciones, evitándo que se repitan
   */
  private buildMentions() {
    this.entities.entities.forEach((entity) => {
      entity.mentions.forEach((mention) => {
        if (this.mentions.indexOf(mention.text) === -1) {
          this.mentions.push(mention.text);
        }
      });
    });
  }
}
