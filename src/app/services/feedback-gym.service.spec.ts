import {TestBed} from '@angular/core/testing';

import {FeedbackGymService} from './feedback-gym.service';

describe('FavoriteService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    const service = TestBed.inject(FeedbackGymService);
    expect(service).toBeTruthy();
  });

});
