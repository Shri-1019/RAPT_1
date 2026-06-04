import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

export type ButtonVariant = 'primary' | 'outline' | 'dark' | 'google' | 'apple';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (href()) {
      <a [routerLink]="href()" [class]="getClasses()">
        <ng-content></ng-content>
      </a>
    } @else {
      <button [type]="type()" [class]="getClasses()" [disabled]="disabled()" (click)="clicked.emit()">
        <ng-content></ng-content>
      </button>
    }
  `,
  styles: `
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      font-family: 'Inter', sans-serif;
      font-weight: 600;
      border-radius: 0.75rem;
      transition: all 0.2s ease;
      cursor: pointer;
      text-decoration: none;
      border: none;
      width: 100%;
    }
    
    .btn-primary {
      background: linear-gradient(135deg, #FF4E50 0%, #FF8C00 100%);
      color: white;
      box-shadow: 0px 20px 25px -5px rgba(182, 21, 36, 0.2);
    }
    
    .btn-primary:hover:not(:disabled) {
      transform: scale(1.02);
      box-shadow: 0px 25px 30px -8px rgba(182, 21, 36, 0.3);
    }
    
    .btn-outline {
      background: transparent;
      border: 2px solid #e4bebb;
      color: #161d1f;
    }
    
    .btn-outline:hover:not(:disabled) {
      background: #f4fafd;
      border-color: #FF4E50;
    }
    
    .btn-google {
      background: white;
      border: 2px solid #e4bebb;
      color: #161d1f;
    }
    
    .btn-apple {
      background: white;
      border: 2px solid #e4bebb;
      color: #161d1f;
    }
    
    .btn-sm { padding: 0.75rem 1.5rem; font-size: 0.875rem; }
    .btn-md { padding: 1rem 2rem; font-size: 1rem; }
    .btn-lg { padding: 1.25rem 2.5rem; font-size: 1.125rem; }
    
    .btn:disabled { opacity: 0.5; cursor: not-allowed; }
  `
})
export class ButtonComponent {
  variant = input<ButtonVariant>('primary');
  size = input<ButtonSize>('md');
  href = input<string>();
  type = input<string>('button');
  disabled = input<boolean>(false);
  clicked = output<void>();
  
  getClasses(): string {
    return `btn btn-${this.variant()} btn-${this.size()}`;
  }
}