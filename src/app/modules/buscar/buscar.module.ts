import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesComponent } from './containers/stories/stories.component';
import { BuscarRoutingModule } from './buscar-routing.module';

@NgModule({
  declarations: [StoriesComponent],
  imports: [CommonModule, BuscarRoutingModule],
})
export class BuscarModule {}
