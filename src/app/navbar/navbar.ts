import { Component, inject } from '@angular/core';
import { MatDivider } from "@angular/material/divider";
import { RouterLink ,RouterLinkActive, RouterOutlet, RouterLinkWithHref, Router } from '@angular/router';
import { MatList, MatListItem, MatNavList } from '@angular/material/list';
@Component({
  selector: 'app-navbar',
  imports: [
    MatDivider,
    MatListItem,
    MatNavList,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    RouterLinkWithHref
],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isActivatedPage: boolean = true;
}
