import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../auth/auth.service';
import {LayoutService} from '../shared-module/services/layout.service';
//import {AuthService} from "../auth/auth.service";
//import {LayoutService} from "../shared-module/services/layout.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login = '';
  password = '';
  constructor(private authService: AuthService,
              private layoutService: LayoutService,
              private router: Router) {}

  onSubmit() {
    this.authService.login(this.login, this.password)
      .then(this.onSubmitSuccess.bind(this), this.onSubmitFailure);
  }

  private onSubmitSuccess() {
    this.router.navigate(['../']);
  }

  private onSubmitFailure() {
    console.log('Nazwa użytkownika lub hasło jest nie poprawne ! Spróbuj ponownie!');
  }
}
