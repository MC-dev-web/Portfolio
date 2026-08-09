import { Component } from '@angular/core';
import { MatCard, MatCardTitle, MatCardHeader, MatCardContent, MatCardImage } from "@angular/material/card";

@Component({
  selector: 'app-certificates',
  imports: [MatCard, MatCardTitle, MatCardHeader, MatCardContent, MatCardImage],
  templateUrl: './certificates.html',
  styleUrl: './certificates.css',
})
export class Certificates {
  CSC_Cert = "assets/images/certificates/csc_cert.jpg";
}
