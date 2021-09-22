import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SidebarModule } from 'ng-sidebar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [HeaderComponent, LoginComponent, SidebarComponent],
  imports: [
    RouterModule,
    CoreRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    SidebarModule,
    MatSidenavModule,
    MatDividerModule
  ],
  exports: [HeaderComponent, SidebarComponent],
})
export class CoreModule { }
