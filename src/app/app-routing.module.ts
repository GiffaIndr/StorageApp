import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { AlbumPageComponent } from './module/album-page/album-page.component';
import { TodoPageComponent } from './module/todo-page/todo-page.component';
import { DashboardPageComponent } from './module/dashboard-page/dashboard-page.component';
import { LandingComponent } from './module/landing/landing.component';
import { LoginComponent } from './module/login/login.component';
import { SignupComponent } from './module/signup/signup.component';
const routes: Routes = [
  {
    path: 'storage-home',
    component: DefaultComponent,
    children: [
      {
        path: 'album',
        component: AlbumPageComponent,
      },
      {
        path: 'todo',
        component: TodoPageComponent,
      },
      {
        path: 'dashboard',
        component: DashboardPageComponent
      },
    ],
  },
  {
    path: 'about',
    component: LandingComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
