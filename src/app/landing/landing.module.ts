import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { SharedModule } from '../shared/shared.module';

import { LandingComponent } from './landing.component';
import { HomeComponent } from './home/home.component';
import { OurServicesComponent } from './our-services/our-services.component';


@NgModule({
  declarations: [
    LandingComponent,
    HomeComponent,
    OurServicesComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule
  ]
})
export class LandingModule { }
