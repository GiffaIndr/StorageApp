import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ModuleModule } from '../module/module.module';



@NgModule({
  declarations: [
    DefaultComponent,
  
  ],
  imports: [
    CommonModule,
    SharedModule,
    ModuleModule,
    MatSidenavModule,
    RouterModule,


  ]
})
export class DefaultModule { }
