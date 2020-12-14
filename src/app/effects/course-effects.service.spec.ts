import { TestBed } from '@angular/core/testing';

import {CourseEffects} from './course-effects.service';

describe('CourseEffects', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    const service: CourseEffects = TestBed.inject(CourseEffects);
    expect(service).toBeTruthy();
  });
});
