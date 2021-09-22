import { Component, OnInit } from '@angular/core';
import { LoginService } from './core/components/login/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'pruebaTecnica';
  isAuthenticated: boolean;

  constructor(private loginService: LoginService){}

  ngOnInit(){
    this.loginService.isUserAuthenticated()
    this.loginService.isAuthenticated$.subscribe((isUserValidate)=>{
      this.isAuthenticated = isUserValidate;
      console.log(this.isAuthenticated)
    })
  }
}
