import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupData = { name: '', contactNumber: '', email: '', password: '' };

  constructor(private userService: UserService) {}

  onSubmit() {
    this.userService.signup(this.signupData).subscribe(response => {
      console.log('Signup successful', response);
    }, error => {
      console.error('Signup failed', error);
    });
  }
}
