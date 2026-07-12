import { Component } from '@angular/core';
import { MatDivider } from "@angular/material/divider";
import { RouterOutlet } from '@angular/router';
import { MatList, MatListItem, MatNavList } from '@angular/material/list';
@Component({
  selector: 'app-navbar',
  imports: [
    MatDivider,
    MatListItem,
    MatNavList
],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {}
