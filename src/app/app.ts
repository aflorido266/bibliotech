import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Customer } from './features/customer/customer';
import { Inventory } from './features/customer/inventory/inventory';

@Component({
  selector: 'app-root',
  imports: [Customer, Inventory],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bibliotech');
}
