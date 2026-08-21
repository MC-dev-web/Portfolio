import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardActions, MatCardFooter } from "@angular/material/card";
import { MatAnchor } from "@angular/material/button";

@Component({
  selector: 'app-contact',
  imports: [MatCard, MatCardContent, MatCardActions, MatAnchor, MatCardFooter],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {}
