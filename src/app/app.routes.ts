import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'/',
        loadComponent: () => import('./componentes/dragndrop/dragndrop.component')
    }
]as Routes;
