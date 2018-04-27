import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginRoutingModule} from './login/login-routing.module';
import {LoginModule} from './login/login.module';
import {AppRoutingModule} from './app-routing.module';
import {AuthService} from './auth/auth.service';
import {LayoutService} from './shared-module/services/layout.service';
import { BankComponent } from './bank/bank.component';
import {CoreModuleModule} from './core-module/core-module.module';


@NgModule({
  declarations: [
    AppComponent,
    BankComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    CoreModuleModule,
    LoginModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'app', component: <any>AppComponent}
      ]
    ),
    LoginRoutingModule
  ],
  providers: [AuthService, LayoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
