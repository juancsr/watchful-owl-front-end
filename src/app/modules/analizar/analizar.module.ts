import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { StoriesComponent } from './containers/stories/stories.component';
import { AnalizarRoutingModule } from "./analizar-routing.module";
import { ArticleTitleComponent } from './components/article-title/article-title.component';
import { ArticleSentimentComponent } from './components/article-sentiment/article-sentiment.component';
import { ArticleClassificationComponent } from './components/article-classification/article-classification.component';
import { ArticleEntityComponent } from './components/article-entity/article-entity.component';
import { ArticleConceptComponent } from './components/article-concept/article-concept.component';
import { ArticleSummaryComponent } from './components/article-summary/article-summary.component';
import { ArticleSearchComponent } from './components/article-search/article-search.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ArticleErrorComponent } from './components/article-error/article-error.component';

@NgModule({
  declarations: [
    StoriesComponent,
    ArticleTitleComponent,
    ArticleSentimentComponent,
    ArticleClassificationComponent,
    ArticleEntityComponent,
    ArticleConceptComponent,
    ArticleSummaryComponent,
    ArticleSearchComponent,
    ArticleErrorComponent,
  ],
  imports: [
    CommonModule,
    AnalizarRoutingModule,
    MaterialModule,
    FormsModule,
    SharedModule,
  ],
})
export class AnalizarModule {}
