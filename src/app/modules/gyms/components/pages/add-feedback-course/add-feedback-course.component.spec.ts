import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFeedbackCourseComponent } from './add-feedback-course.component';

describe('AddFeedbackCourseComponent', () => {
  let component: AddFeedbackCourseComponent;
  let fixture: ComponentFixture<AddFeedbackCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFeedbackCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFeedbackCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
