import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

@NgModule({
  imports: [
      CommonModule,
      HttpModule
  ],
  declarations: [
      AdminDashboardComponent
  ],
  exports: [
    AdminDashboardComponent
]
})
export class DashboardModule { }
