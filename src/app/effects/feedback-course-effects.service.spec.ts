import {TestBed} from '@angular/core/testing';

import {FeedbacksCourseEffects} from './feedback-course-effects.service';

describe('FeedbacksCourseEffects', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    const service: FeedbacksCourseEffects = TestBed.inject(FeedbacksCourseEffects);
    expect(service).toBeTruthy();
  });

});
