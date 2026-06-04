import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup-role',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './signup-role.component.html',
  styleUrls: ['./signup-role.component.scss']
})
export class SignupRoleComponent {
  onSelectLandlord() {
    window.location.href = '/auth/signup/landlord';
  }
  
  onSelectTenant() {
    window.location.href = '/auth/signup/tenant';
  }
}