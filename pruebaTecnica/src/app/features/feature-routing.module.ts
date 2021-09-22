import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaingComponent } from './campaing/components/campaing/campaing.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { HomeComponent } from './home/components/home/home.component';

const routes: Routes= [
  {
    path:'',
    component: HomeComponent,
    children:[
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'campaing',
        component: CampaingComponent,
      },
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule],
})
export class FeatureRoutingModule { }
