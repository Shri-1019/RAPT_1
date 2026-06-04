import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-signup-landlord',
  standalone: true,
  imports: [RouterLink, FormsModule, ButtonComponent],
  templateUrl: './signup-landlord.component.html',
  styleUrls: ['./signup-landlord.component.scss']
})
export class SignupLandlordComponent {
  formData = signal({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  
  onSubmit() {
    console.log('Landlord signup:', this.formData());
    // Navigate to email verification or dashboard
    // window.location.href = '/auth/verify-email';
  }
  
  features = [
    'Centralized property dashboard',
    'Automated rent collection',
    'Tenant screening & background checks',
    'Financial reporting & analytics',
    'Maintenance request management',
    '24/7 support from our team'
  ];
}