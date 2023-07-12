import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { headerComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { PanelModule } from 'primeng/panel';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    headerComponent,
    SidebarComponent
  ],
  exports: [
    headerComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    PanelModule,
  ]
})
export class SharedModule { }
