import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    MatMenuModule

  ],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModule { }
export class AppModule {}