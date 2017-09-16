import { Component } from '@angular/core';
import {AuthService} from "./common/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private authService: AuthService) {
  }

  login() {
    this.authService.login();
  }
}