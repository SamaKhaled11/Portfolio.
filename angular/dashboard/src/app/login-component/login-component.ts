import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; //

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './login-component.html',
  styleUrls: ['./login-component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.invalid) {
      return;
    }

    this.http.post<any>('http://localhost:3000/adminRoute/login', {
      userName: this.loginForm.value.username,
      password: this.loginForm.value.password
    }).subscribe({
      next: (res) => {
        if (res.success) {
          console.log('Login success');
          this.router.navigate(['/admin']);
        } else {
          this.errorMessage = 'Invalid login';
        }
      },
      error: () => {
        this.errorMessage = 'Server error. Please try again later.';
      }
    });
  }
}
