import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../services/authentication.service'
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private _authService: AuthenticationService
    )
    {
    }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this._authService.loggedInStatus;
    
  }
}
