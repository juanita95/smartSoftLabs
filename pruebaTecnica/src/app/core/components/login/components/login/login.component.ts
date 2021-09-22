import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../../models/user.model';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  remeberUser: boolean = false;
  isLoginUser: boolean = true;
  title: string;
  routerLinkLoding:string='/auth/login';
  routerLinkRegister:string = '/auth/register';
  currentRouterLink: string;

  constructor(
    private router: Router,
    private loginService: LoginService,
    ) { }

  ngOnInit(): void {
    this.currentRouterLink = this.router.url;
    this.title = this.currentRouterLink ===this.routerLinkLoding ? 'ingresar': 'Crear cuenta'
  }

  onSubumit(form: NgForm):void{
    if(form.invalid){
      return;
    }

    Swal.fire({
      icon: 'info',
      text:'Espere por favor..',
    })

    Swal.showLoading();
    this.currentRouterLink === this.routerLinkRegister
      ? this.sendNewUser(form.form.value)
      : this.loginUser(form.form.value);
  }

  sendNewUser(user: User):void{
    this.loginService.registerUser(user).subscribe(()=>{
      Swal.close();

      if(this.remeberUser){
        localStorage.setItem('email', this.user.email);
      };

      this.router.navigateByUrl('/home/dashboard');
    }, (err)=>{
      Swal.fire({
        icon: 'error',
        title: 'Error al autenticar',
        text: err.error.error.message,
      })
    })
  }

  loginUser(user: User): void{
    this.loginService.logIn(user).subscribe(()=>{
      Swal.close();

      if(this.remeberUser){
        localStorage.setItem('email', this.user.email);
      };

      this.router.navigateByUrl('/home/dashboard');
    }, (err)=>{
      Swal.fire({
        icon: 'error',
        title: 'Error al autenticar',
        text: err.error.error.message,
      })
    })
  }

  remeberUserEmail(){
    if(localStorage.getItem('email')){
      this.user.email = localStorage.getItem('email');
      this.remeberUser = true;
    }
  }

}
