import { Injectable } from '@angular/core';
import { 
  ActivatedRouteSnapshot,
  CanActivate, 
  Router,
  RouterStateSnapshot, 
  UrlTree 
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  /*
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  */

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot) {
    const expectedRole = route.data.role
    // console.log('Expected: ', expectedRole)
    if (this.auth.userType == expectedRole) {
      // console.log('Authenticated')
      return true
    }
    else {
      // console.log('Not Authenticated')
      return this.router.navigate(['/auth/login'])
    }
  }

}
