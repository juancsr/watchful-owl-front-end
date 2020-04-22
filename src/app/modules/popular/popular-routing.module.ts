import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrendingsComponent } from "./container/trendings/trendings.component";

const routes: Routes = [
  {
    path: "",
    component: TrendingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopularRoutingModule {}
