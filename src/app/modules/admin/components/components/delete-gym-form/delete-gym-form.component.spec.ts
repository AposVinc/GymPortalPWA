import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGymFormComponent } from './delete-gym-form.component';

describe('DeleteGymFormComponent', () => {
  let component: DeleteGymFormComponent;
  let fixture: ComponentFixture<DeleteGymFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteGymFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteGymFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
