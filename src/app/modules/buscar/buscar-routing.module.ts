import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoriesComponent } from './containers/stories/stories.component';

const routes: Routes = [
  {
    path: '',
    component: StoriesComponent,
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BuscarRoutingModule { }

