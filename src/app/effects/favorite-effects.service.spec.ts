import {TestBed} from '@angular/core/testing';

import {FavoriteEffects} from './favorite-effects.service';

describe('FavoriteEffects', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    const service: FavoriteEffects = TestBed.inject(FavoriteEffects);
    expect(service).toBeTruthy();
  });

});
