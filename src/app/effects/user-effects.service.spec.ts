import { TestBed } from '@angular/core/testing';

import {UserEffects} from './user-effects.service';

describe('UserEffects', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    const service: UserEffects = TestBed.inject(UserEffects);
    expect(service).toBeTruthy();
  });
});
