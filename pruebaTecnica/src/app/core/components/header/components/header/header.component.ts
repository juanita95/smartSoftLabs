import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../login/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void{
  }

  logOut(): void{
    this.loginService.logout();
    this.router.navigateByUrl('/auth/login');
  }

}
