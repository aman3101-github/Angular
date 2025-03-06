import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  // Import FormsModule for two-way binding & NgIf for conditionals
  imports: [FormsModule, NgIf] 
})
export class AppComponent {
  title: string = "Hello from BridgeLabz";
  // User input name
  userName: string = "";
   // Error message 
  errorMessage: string = "";

  // Function to validate user input
  validateUserName() {
     // Starts with Capital, min 3 letters
    const namePattern = /^[A-Z][a-zA-Z]{2,}$/;
    if (!this.userName.match(namePattern)) {
      this.errorMessage = "Name must start with a capital letter and have at least 3 characters!";
    } else {
      this.errorMessage = "";
    }
  }
}
