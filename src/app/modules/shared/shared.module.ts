import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';

import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';

@NgModule({
  declarations: [HeaderComponent, LogoComponent, ProgressSpinnerComponent],
  exports: [
    HeaderComponent,
    LogoComponent,
    ProgressSpinnerComponent
  ],
  imports: [CommonModule, RouterModule, MaterialModule],
})
export class SharedModule {}
