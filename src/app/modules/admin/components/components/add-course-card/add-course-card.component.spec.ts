import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseCardComponent } from './add-course-card.component';

describe('AddCourseCardComponent', () => {
  let component: AddCourseCardComponent;
  let fixture: ComponentFixture<AddCourseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCourseCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
