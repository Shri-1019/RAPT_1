import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  role = signal<'landlord' | 'tenant'>('landlord');
  email = signal('');
  password = signal('');
  rememberMe = signal(false);
  
  setRole(role: 'landlord' | 'tenant') {
    this.role.set(role);
  }
  
  onSubmit() {
    console.log('Login with:', {
      role: this.role(),
      email: this.email(),
      password: this.password(),
      rememberMe: this.rememberMe()
    });
    // Navigate based on role
    // window.location.href = this.role() === 'landlord' ? '/landlord' : '/tenant';
  }
  
  onGoogleLogin() {
    console.log('Google login');
  }
  
  onAppleLogin() {
    console.log('Apple login');
  }
}