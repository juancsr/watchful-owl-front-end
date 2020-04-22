import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrendingsComponent } from "./container/trendings/trendings.component";
import { TrendingComponent } from "./components/trending/trending.component";

import { MaterialModule } from "../material/material.module";
import { PopularRoutingModule } from "./popular-routing.module";
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TrendingsComponent, TrendingComponent],
  imports: [CommonModule, PopularRoutingModule, MaterialModule, SharedModule],
})
export class PopularModule {}
