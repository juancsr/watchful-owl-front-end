import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleClassificationComponent } from './article-classification.component';

describe('ArticleClassificationComponent', () => {
  let component: ArticleClassificationComponent;
  let fixture: ComponentFixture<ArticleClassificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleClassificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
