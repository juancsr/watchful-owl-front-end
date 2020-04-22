import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleEntityComponent } from './article-entity.component';

describe('ArticleEntityComponent', () => {
  let component: ArticleEntityComponent;
  let fixture: ComponentFixture<ArticleEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
