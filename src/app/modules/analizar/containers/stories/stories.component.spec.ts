import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesrComponent } from './storiesr.component';

describe('StoriesrComponent', () => {
  let component: StoriesrComponent;
  let fixture: ComponentFixture<StoriesrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoriesrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
