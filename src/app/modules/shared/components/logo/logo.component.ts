import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  constructor(
      private matIconRegistry: MatIconRegistry,
      private domSanitize: DomSanitizer
  ) {
      this.matIconRegistry.addSvgIcon(
          'app_logo',
          this.domSanitize.bypassSecurityTrustResourceUrl("../../../../../assets/images/owl.svg")
      );
  }

  ngOnInit() {
  }

}
