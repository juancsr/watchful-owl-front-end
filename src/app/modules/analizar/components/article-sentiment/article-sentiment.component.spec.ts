import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSentimentComponent } from './article-sentiment.component';

describe('ArticleSentimentComponent', () => {
  let component: ArticleSentimentComponent;
  let fixture: ComponentFixture<ArticleSentimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleSentimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSentimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
