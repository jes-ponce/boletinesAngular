import { Router, Routes } from '@angular/router';

export const routes: Routes = [
{
    path:'',
    loadComponent: ()=> import('./componentes/reporteador/reporteador.component')

}
] as Routes;
