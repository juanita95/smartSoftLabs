import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../components/login/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private loginService: LoginService,
    private router: Router
  ){}

  canActivate(): boolean{
    return this.loginService.isUserAuthenticated()
      ? true
      : this.userNotAuthenticated();
  }

  userNotAuthenticated(): boolean{
    this.router.navigateByUrl('/login');
    return false;
  }

}
