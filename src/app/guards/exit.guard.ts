import { CanActivateFn } from '@angular/router';

export const exitGuard: CanActivateFn = (route, state) => {
  return true;
};
