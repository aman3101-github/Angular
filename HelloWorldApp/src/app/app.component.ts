import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Welcome to BridgeLabz";
  logoUrl: string = "https://imgs.search.brave.com/nLlYCezxfnT6HHkFi0YroyfOF6r3eYTHIozTra5dZR4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YnJpZGdlbGFiei5j/b20vYXNzZXRzL2lt/YWdlcy9CcmlkZ2VM/YWJ6JTIwTmV3JTIw/TG9nby5zdmc"; 
  siteUrl: string = "https://www.bridgelabz.com"; 

  // Method to open the BridgeLabz website in a new tab
  openBridgeLabzSite() {
    window.open(this.siteUrl, "_blank");
  }
}
