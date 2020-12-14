import { TestBed } from '@angular/core/testing';

import { FeedbacksProfileEffects } from './feedback-profile-effects.service';

describe('FeedbacksProfileEffects', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    const service: FeedbacksProfileEffects = TestBed.inject(FeedbacksProfileEffects);
    expect(service).toBeTruthy();
  });

});
