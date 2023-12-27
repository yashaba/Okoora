import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent {

  constructor(private router: Router, private userService: UserService) { }
  maxLenght: number = 20;
  username = new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]);
  password = new FormControl('', [Validators.required, Validators.maxLength(20)]);
  isWrongCredentials: boolean = false;

  login() {
    if (this.username.invalid || this.password.invalid || typeof this.username.value !== 'string' || !this.password.value) {
      return;
    }
    this.userService.login(this.username.value, this.password.value).subscribe((res) => {
      if (res) {
        this.router.navigate(['/todo'])
      } else {
        this.isWrongCredentials = true;
      }
    });
  }

  continueAsGuest() {
    this.userService.login('Bret', '123456789').subscribe((res) => {
      if (res) {
        this.router.navigate(['/todo'])
      }
    });
    this.router.navigate(['/todo'])
  }



}


