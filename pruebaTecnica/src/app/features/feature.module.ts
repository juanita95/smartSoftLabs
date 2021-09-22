import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { FeatureRoutingModule } from './feature-routing.module';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { CampaingComponent } from './campaing/components/campaing/campaing.component';
import { HomeComponent } from './home/components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { CampaingCardComponent } from './campaing/components/campaing-card/campaing-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/components/dialog-box/dialog-box.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [DashboardComponent, CampaingComponent, HomeComponent, CampaingCardComponent, DialogBoxComponent],
  imports: [
    FeatureRoutingModule,
    CommonModule,
    HttpClientModule,
    CoreModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class FeatureModule { }
