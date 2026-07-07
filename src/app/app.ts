import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { Homepage } from "./homepage/homepage";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    MatDividerModule,
    MatButtonModule,
    Homepage
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Dashboard');
}
