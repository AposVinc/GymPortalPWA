import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FavoriteGymCardComponent} from './favorite-gym-card.component';

describe('FavoriteGymCardComponent', () => {
  let component: FavoriteGymCardComponent;
  let fixture: ComponentFixture<FavoriteGymCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoriteGymCardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteGymCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
