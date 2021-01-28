import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FavoriteCourseCardComponent} from './favorite-course-card.component';

describe('FavoriteCourseCardComponent', () => {
  let component: FavoriteCourseCardComponent;
  let fixture: ComponentFixture<FavoriteCourseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoriteCourseCardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteCourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
