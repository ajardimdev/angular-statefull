import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { todosGuard } from './todos.guard';

describe('todosGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => todosGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
