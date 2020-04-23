import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { SharedModule } from './modules/shared/shared.module';
import { ProgressSpinnerComponent } from './models/share/componenta/progress-spinner/progress-spinner.component';

@NgModule({
  declarations: [AppComponent, LayoutComponent, ProgressSpinnerComponent],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
