import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  signupData = { name: '', contactNumber: '', email: '', password: '' };
  loginData = { email: '', password: '' };

  constructor(private userService: UserService) {}

  onSubmitSignup() {
    this.userService.signup(this.signupData).subscribe(response => {
      console.log('Signup successful', response);
    }, error => {
      console.error('Signup failed', error);
    });
  }

  onSubmitLogin() {
    this.userService.login(this.loginData).subscribe(response => {
      console.log('Login successful', response);
    }, error => {
      console.error('Login failed', error);
    });
  }
}
