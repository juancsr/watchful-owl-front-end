import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleConceptComponent } from './article-concept.component';

describe('ArticleConceptComponent', () => {
  let component: ArticleConceptComponent;
  let fixture: ComponentFixture<ArticleConceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleConceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
