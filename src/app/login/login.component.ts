import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userId: string = '';
  password: string = '';
  invalidCredentials: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    if (this.authService.login(this.userId, this.password)) {
      this.authService.changeUserId(this.userId);
      this.router.navigate(['/fill-form']);
    } else {
      this.invalidCredentials = true;
    }
  }
}
