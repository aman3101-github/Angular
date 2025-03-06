import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [FormsModule, NgIf] // Import necessary modules
})
export class AppComponent {
  title: string = "Hello from BridgeLabz";
  userName: string = ""; // Property for two-way binding
}
