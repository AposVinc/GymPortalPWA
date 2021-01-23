import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCourseFormComponent } from './delete-course-form.component';

describe('DeleteCourseFormComponent', () => {
  let component: DeleteCourseFormComponent;
  let fixture: ComponentFixture<DeleteCourseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCourseFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
