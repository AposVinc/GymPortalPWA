import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGymFormComponent } from './update-gym-form.component';

describe('UpdateGymFormComponent', () => {
  let component: UpdateGymFormComponent;
  let fixture: ComponentFixture<UpdateGymFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateGymFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGymFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
