import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HeaderModule } from '../shared/header/header.module';
import { FooterModule } from '../shared/footer/footer.module';
import { NavbarModule } from '../shared/navbar/navbar.module';



@NgModule({
  declarations: [
    PublicComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    HeaderModule,
    FooterModule,
    NavbarModule
  ]
})
export class PublicModule { }
