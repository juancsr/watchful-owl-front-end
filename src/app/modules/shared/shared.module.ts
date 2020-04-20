import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';

import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
    declarations: [
        HeaderComponent,
        LogoComponent
    ],
  exports: [
    HeaderComponent,
    LogoComponent
  ],
  imports: [
    CommonModule,
      RouterModule,
    MaterialModule
  ]
})
export class SharedModule { }
