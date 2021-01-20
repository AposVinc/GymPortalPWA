import {TestBed} from '@angular/core/testing';

import {FeedbacksGymEffects} from './feedback-gym-effects.service';

describe('FeedbacksGymEffects', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    const service: FeedbacksGymEffects = TestBed.inject(FeedbacksGymEffects);
    expect(service).toBeTruthy();
  });

});
