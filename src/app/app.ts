import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { Footer } from "./footer/footer";
import { MatIcon, MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    MatDividerModule,
    MatButtonModule,
    Footer,
    RouterOutlet
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Dashboard');
    private iconRegistry = inject(MatIconRegistry);
  private domSanitizer = inject(DomSanitizer); // acts as the security guard

  constructor(){
    this.iconRegistry.addSvgIcon('github',this.domSanitizer.bypassSecurityTrustResourceUrl('assets/logos/github.svg'))
    this.iconRegistry.addSvgIcon('gmail',this.domSanitizer.bypassSecurityTrustResourceUrl('assets/logos/gmail.svg'))
    this.iconRegistry.addSvgIcon('linkedin',this.domSanitizer.bypassSecurityTrustResourceUrl('assets/logos/linkedin.svg'))
    this.iconRegistry.addSvgIcon('facebook',this.domSanitizer.bypassSecurityTrustResourceUrl('assets/logos/facebook.svg'))
    this.iconRegistry.addSvgIcon('instagram',this.domSanitizer.bypassSecurityTrustResourceUrl('assets/logos/instagram.svg'))
  }
}
