import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleErrorComponent } from './article-error.component';

describe('ArticleErrorComponent', () => {
  let component: ArticleErrorComponent;
  let fixture: ComponentFixture<ArticleErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
