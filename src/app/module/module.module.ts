import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumPageComponent } from './album-page/album-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { CardModule } from 'primeng/card';
import { LandingComponent } from './landing/landing.component';
import { Carousel, CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DialogModule } from 'primeng/dialog';
import { AddDialogComponent } from './album-page/widgets/add-dialog/add-dialog.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { TerminalModule } from 'primeng/terminal';
import { RippleModule } from 'primeng/ripple';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AnimateModule } from 'primeng/animate';
import { ImageModule } from 'primeng/image';
import { FileUploadModule } from 'primeng/fileupload';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AlbumPageComponent,
    DashboardPageComponent,
    TodoPageComponent,
    LandingComponent,
    AddDialogComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgbModule,
    CalendarModule,
    InputTextareaModule,
    CarouselModule,
    CommonModule,
    ButtonModule,
    CardModule,
    ImageModule,
    TagModule,
    InputTextModule,
    AutoCompleteModule,
    DialogModule,
    TerminalModule,
    RippleModule,
    AnimateModule,
    MatToolbarModule,
    FileUploadModule
  ]
})
export class ModuleModule { }
