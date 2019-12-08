import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { RegisterComponent } from './modules/register/register.component';


const appRoutes: Routes = [


  { path: 'login', component: LoginComponent },
  { path: 'register-user', component: RegisterComponent},
  { path: '', loadChildren: './modules/layout/layout.module#LayoutModule', canActivate: [AuthGuard]},
  { path: '', redirectTo: '/dataVizualization', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/login', pathMatch: 'full', canActivate: [AuthGuard] },

  
 // { path: 'forgot-password', component: ForgotPasswordComponent },
 // { path: 'verify-email-address', component: VerifyEmailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
