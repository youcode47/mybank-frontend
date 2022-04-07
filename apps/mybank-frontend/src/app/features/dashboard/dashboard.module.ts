import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';
import { HeaderDesktopComponent } from './header-desktop/header-desktop.component';
import { UserInfoComponent } from './user-info/user-info.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderMobileComponent,
    HeaderDesktopComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
