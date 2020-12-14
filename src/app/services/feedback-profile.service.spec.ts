import {TestBed} from '@angular/core/testing';

import {FeedbackProfileService} from './feedback-profile.service';

describe('FavoriteService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    const service = TestBed.inject(FeedbackProfileService);
    expect(service).toBeTruthy();
  });

});
