import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
    path: '', component: PublicComponent, children: [
      { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'nosotros', loadChildren: () => import('./nosotros/nosotros.module').then(m => m.NosotrosModule) },
      { path: 'categorias', loadChildren: () => import('./categorias/categorias.module').then(m => m.CategoriasModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
