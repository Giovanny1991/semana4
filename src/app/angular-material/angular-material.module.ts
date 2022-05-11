import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [

  ],
  exports:[
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule
  ]
})
export class AngularMaterialModule { }
