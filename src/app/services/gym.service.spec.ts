import {TestBed} from '@angular/core/testing';

import {GymService} from './gym.service';

describe('GymService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    const service = TestBed.inject(GymService);
    expect(service).toBeTruthy();
  });
});
