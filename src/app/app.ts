import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { Homepage } from "./homepage/homepage";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    MatDividerModule,
    MatButtonModule,
    Homepage,
    Footer
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Dashboard');
}
