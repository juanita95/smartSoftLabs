import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/components/login/login.component';

const routes: Routes= [
  {
    path:'',
    children:[
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: LoginComponent,
      },
      {
        path: '**',
        redirectTo: 'login',
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule],
})
export class CoreRoutingModule { }
