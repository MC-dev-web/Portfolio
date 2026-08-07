import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle, MatCardImage } from '@angular/material/card';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { RouterOutlet } from '@angular/router';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-homepage',
  imports: [
    MatCard,
    MatCardContent,
    MatCardImage
],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {
  imgSrc = "assets/images/picture5.png";
}
