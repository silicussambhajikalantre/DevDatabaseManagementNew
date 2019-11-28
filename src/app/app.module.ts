import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, AuthService } from 'ng4-social-login';
import { GetUsersService } from './core/services/get-users.service';
import { AuthenticationService } from './core/services/authentication.service';
import { GetDataFromApiService } from './core/services/get-data-from-api.service';
import { AuthGuard } from './core/guards/auth.guard'
import { AppRoutingModule } from './app-routing.module';;
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';


const CONFIG = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('375993200929-i3sctchaoiregk8orntden8f85rh04ls.apps.googleusercontent.com')
  }
], true);

export function provideConfig() {
  return CONFIG;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
    AppRoutingModule

  ],
  providers: [GetUsersService, AuthenticationService, AuthGuard, GetDataFromApiService, AuthService, {
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
