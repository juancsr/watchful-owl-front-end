import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';

import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    ProgressSpinnerComponent,
  ],
  exports: [
    HeaderComponent,
    LogoComponent,
    ProgressSpinnerComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule, MaterialModule],
})
export class SharedModule {}
