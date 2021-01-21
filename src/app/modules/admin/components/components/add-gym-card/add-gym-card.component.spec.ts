import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGymCardComponent } from './add-gym-card.component';

describe('AddGymCardComponent', () => {
  let component: AddGymCardComponent;
  let fixture: ComponentFixture<AddGymCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGymCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGymCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
