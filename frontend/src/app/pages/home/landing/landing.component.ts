import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  // Navigation items
  navItems = [
    { name: 'Features', active: true },
    { name: 'Pricing', active: false },
    { name: 'About', active: false }
  ];

  // Features data
  features = [
    {
      icon: 'payments',
      iconBgClass: 'fiery-gradient',
      title: 'Precision Payment Tracking',
      description: 'Automated ledgers that capture every cent. Zero delays, full transparency for both parties.'
    },
    {
      icon: 'contract',
      iconBgClass: 'bg-tertiary',
      title: 'Seamless Agreement Management',
      description: 'Digital signatures and version control that feel like high-end editorial archives.'
    },
    {
      icon: 'analytics',
      iconBgClass: 'bg-[#2D3436]',
      title: 'Editorial-Grade Analytics',
      description: 'Visualize your portfolio yield with the clarity of a premium financial publication.'
    },
    {
      icon: 'support_agent',
      iconBgClass: 'bg-secondary',
      title: '24/7 Maintenance Support',
      description: 'Rapid-response routing for property repairs, keeping tenant satisfaction at peak levels.'
    }
  ];

  // Footer links
  footerResources = ['Documentation', 'API Reference', 'Community', 'Support Center'];
  footerCompany = ['About Us', 'Careers', 'Privacy Policy', 'Terms of Service'];
  footerConnect = ['Twitter', 'LinkedIn', 'Instagram'];

  onLogin() {
    // Navigate to login
    console.log('Navigate to login');
  }

  onSignUp() {
    // Navigate to signup
    console.log('Navigate to signup');
  }

  onGetStarted() {
    // Navigate to signup
    console.log('Get started');
  }

  onWatchDemo() {
    // Watch demo video
    console.log('Watch demo');
  }

  onSignUpNow() {
    // Navigate to signup
    console.log('Sign up now');
  }

  onContactSales() {
    // Contact sales
    console.log('Contact sales');
  }
}