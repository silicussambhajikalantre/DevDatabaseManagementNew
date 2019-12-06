import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service'




@Injectable({
  providedIn: 'root'
})
export class SecureinnerpagesGuard implements CanActivate {

  constructor(
    public authService: AuthenticationService,
    public router: Router
    ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authService.isLoggedIn !== true) {
        this.router.navigate(['sign-in'])
      }
    return true;
  }
  
}
