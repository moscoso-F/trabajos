import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  { path: 'tabs', loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)},
  { path: 'details', loadChildren: () => import('./pages/details/details.module').then( m => m.DetailsPageModule)},
  { path: 'lista-clientes', loadChildren: () => import('./pages/lista-clientes/lista-clientes.module').then( m => m.ListaClientesPageModule)},
  { path: 'admin-dias', loadChildren: () => import('./pages/admin-dias/admin-dias.module').then( m => m.AdminDiasPageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
