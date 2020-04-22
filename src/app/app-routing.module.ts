import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)

            },
            {
                path: 'popular',
                loadChildren: () => import('./modules/popular/popular.module').then(m => m.PopularModule)
            },
            {
                path: 'analizar',
                loadChildren: () => import('./modules/analizar/analizar.module').then(m => m.AnalizarModule)

            },
            {
                path: 'auth',
                loadChildren: () => import ('./modules/auth/auth.module').then(m => m.AuthModule)
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
