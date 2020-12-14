import {TestBed} from '@angular/core/testing';

import {FeedbackCourseService} from './feedback-course.service';

describe('FavoriteService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    const service = TestBed.inject(FeedbackCourseService);
    expect(service).toBeTruthy();
  });

});
