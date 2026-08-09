import { Component, inject } from '@angular/core';
import { MatDivider } from "@angular/material/divider";
import { RouterLink, RouterLinkWithHref, Router, RouterLinkActive } from '@angular/router';
import { MatListItem, MatNavList } from '@angular/material/list';
@Component({
  selector: 'app-navbar',
  imports: [
    MatDivider,
    MatListItem,
    MatNavList,
    RouterLink,
    RouterLinkWithHref,
    RouterLinkActive
],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isActivatedPage: boolean = true;
}
