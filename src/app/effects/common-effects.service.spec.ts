import { TestBed } from '@angular/core/testing';

import {UserEffects} from './user-effects.service';
import {CommonEffects} from './common-effects.service';

describe('CommonEffects', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    const service: CommonEffects = TestBed.inject(CommonEffects);
    expect(service).toBeTruthy();
  });
});
