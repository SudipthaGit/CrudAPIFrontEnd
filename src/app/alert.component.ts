import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="message" class="alert-box">
      {{ message }}
    </div>
  `,
  styles: [`
    .alert-box {
      padding: 12px 20px;
      background: #e0ffe0;
      color: #155724;
      border: 1px solid #b2f5b2;
      border-radius: 4px;
      margin: 10px 0;
      font-size: 16px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
      transition: opacity 0.3s;
    }
  `]
})
export class AlertComponent {
  @Input() message: string = '';
}
