import { TestBed } from '@angular/core/testing';

import { AuthAdminService } from './auth-admin.service';

describe('AdminService', () => {
  let service: AuthAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
