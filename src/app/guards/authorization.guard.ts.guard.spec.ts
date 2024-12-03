import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authorizationGuardTsGuard } from './authorization.guard.ts.guard';

describe('authorizationGuardTsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authorizationGuardTsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
