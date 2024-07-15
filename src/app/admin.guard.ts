import { CanActivateFn, Router } from '@angular/router';
import { JwtUtilService } from './service/jwt.util.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  const jwtService = inject(JwtUtilService);
  const router = inject(Router);


  var token = localStorage.getItem('jwt');
  const role = jwtService.getRoleFromToken(token);

  if (!jwtService.isTokenExpired(token)) {
    if (role === 'ADMIN') {


      return true;
    } else {

      router.navigate(['/forbidden']);
    }
  } else {

    router.navigate(['/forbidden']);
  }



  return false;
};
