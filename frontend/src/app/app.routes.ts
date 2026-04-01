import { Routes } from '@angular/router';

export const routes: Routes = [
  // Default redirect to home
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
  // Public routes (no authentication required)
  {
    path: 'home',
    loadComponent: () => import('./pages/home/landing/landing').then(m => m.Landing)
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        loadComponent: () => import('./pages/home/login/login').then(m => m.Login)
      },
      {
        path: 'signup',
        loadComponent: () => import('./pages/home/signup/signup-role/signup-role').then(m => m.SignupRole)
      },
      {
        path: 'signup/landlord',
        loadComponent: () => import('./pages/home/signup/signup-landlord/signup-landlord').then(m => m.SignupLandlord)
      },
      {
        path: 'signup/tenant',
        loadComponent: () => import('./pages/home/signup/signup-tenant/signup-tenant').then(m => m.SignupTenant)
      }
    ]
  },
  
  // Landlord routes (will be protected by auth guard later)
  {
    path: 'landlord',
    loadComponent: () => import('./shared/layouts/landlord-layout/landlord-layout').then(m => m.LandlordLayout),
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadComponent: () => import('./pages/landlord/dashboard/dashboard').then(m => m.Dashboard) },
      { path: 'properties', loadComponent: () => import('./pages/landlord/properties/properties').then(m => m.Properties) },
      { path: 'tenants', loadComponent: () => import('./pages/landlord/tenants/tenants').then(m => m.Tenants) },
      { path: 'leases', loadComponent: () => import('./pages/landlord/leases/leases').then(m => m.Leases) },
      { path: 'payments', loadComponent: () => import('./pages/landlord/payments/payments').then(m => m.Payments) },
      { path: 'maintenance', loadComponent: () => import('./pages/landlord/maintenance/maintenance').then(m => m.Maintenance) },
      { path: 'reports', loadComponent: () => import('./pages/landlord/reports/reports').then(m => m.Reports) },
      { path: 'profile', loadComponent: () => import('./pages/landlord/profile/profile').then(m => m.Profile) }
    ]
  },
  
  // Tenant routes (will be protected by auth guard later)
  {
    path: 'tenant',
    loadComponent: () => import('./shared/layouts/tenant-layout/tenant-layout').then(m => m.TenantLayout),
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadComponent: () => import('./pages/tenant/dashboard/dashboard').then(m => m.Dashboard) },
      { path: 'my-property', loadComponent: () => import('./pages/tenant/my-property/my-property').then(m => m.MyProperty) },
      { path: 'my-lease', loadComponent: () => import('./pages/tenant/my-lease/my-lease').then(m => m.MyLease) },
      { path: 'payments', loadComponent: () => import('./pages/tenant/payments/payments').then(m => m.Payments) },
      { path: 'maintenance', loadComponent: () => import('./pages/tenant/maintenance/maintenance').then(m => m.Maintenance) },
      { path: 'documents', loadComponent: () => import('./pages/tenant/documents/documents').then(m => m.Documents) },
      { path: 'profile', loadComponent: () => import('./pages/tenant/profile/profile').then(m => m.Profile) }
    ]
  },
  
  // Fallback route for 404
  { path: '**', redirectTo: '/home' }
];