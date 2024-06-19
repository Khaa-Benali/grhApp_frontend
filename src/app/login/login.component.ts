import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.loginService.login(username, password).subscribe(
        response => {
          console.log('Login successful!', response);
          const roles = response.roles;
          if (roles.includes('ROLE_RH')) {
            this.router.navigate(['/rh']);
          } else if (roles.includes('ROLE_DAF')) {
            this.router.navigate(['/daf']);
          } else {
            this.router.navigate(['/']);
          }
        },
        error => {
          console.error('Login failed', error);
        }
      );
    }
  }
}
