import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NosotrosComponent } from './public/nosotros/nosotros.component';
const routes: Routes = [
{ path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
{ path: 'home', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },  
{ path: 'categorias', loadChildren: () => import('./public/categorias/categorias.module').then(m => m.CategoriasModule) },
{ path: 'nosotros', loadChildren: () => import('./public/nosotros/nosotros.module').then(m => m.NosotrosModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing = RouterModule.forRoot(routes);
