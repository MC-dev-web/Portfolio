import { Component } from '@angular/core';
import { MatCard, MatCardHeader, MatCardContent } from "@angular/material/card";

@Component({
  selector: 'app-my25cents',
  imports: [MatCard, MatCardHeader, MatCardContent],
  templateUrl: './my25cents.html',
  styleUrl: './my25cents.css',
})
export class My25cents {}
