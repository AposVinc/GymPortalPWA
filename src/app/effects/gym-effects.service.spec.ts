import {TestBed} from '@angular/core/testing';

import {GymEffects} from './gym-effects.service';

describe('GymEffects', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    const service: GymEffects = TestBed.inject(GymEffects);
    expect(service).toBeTruthy();
  });
});
