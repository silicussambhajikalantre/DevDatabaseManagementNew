import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { RegisterComponent } from './modules/register/register.component';



const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'createUser', component: RegisterComponent },
  { path: '', loadChildren: './modules/layout/layout.module#LayoutModule' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
