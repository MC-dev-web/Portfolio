import { Component } from '@angular/core';
import { MatDivider } from "@angular/material/divider";
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-navbar',
  imports: [MatDivider, RouterOutlet],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {}
