import { Component } from '@angular/core';
import { MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent, MatCardTitleGroup } from "@angular/material/card";
import { MatAnchor } from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-projects',
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent, MatAnchor, MatCardTitleGroup, MatIconModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {}
