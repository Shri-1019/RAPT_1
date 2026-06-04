import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-signup-tenant',
  standalone: true,
  imports: [RouterLink, FormsModule, ButtonComponent],
  templateUrl: './signup-tenant.component.html',
  styleUrls: ['./signup-tenant.component.scss']
})
export class SignupTenantComponent {
  formData = signal({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  
  onSubmit() {
    console.log('Tenant signup:', this.formData());
    // Navigate to email verification or dashboard
    // window.location.href = '/auth/verify-email';
  }
  
  features = [
    'Search thousands of verified properties',
    'Pay rent online securely',
    'Submit maintenance requests instantly',
    'Access all your documents 24/7',
    'Communicate directly with landlords',
    'Track payment history and receipts'
  ];
}