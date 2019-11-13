import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
     children:[
      { path: '', redirectTo: 'lista-clientes', pathMatch: 'full'},
      { path: 'lista-clientes', loadChildren: () => import('../lista-clientes/lista-clientes.module').then( m => m.ListaClientesPageModule)},
      { path: 'lista-citas', loadChildren: () => import('../lista-citas/lista-citas.module').then( m => m.ListaCitasPageModule)},
      { path: 'admin-dias', loadChildren: () => import('../admin-dias/admin-dias.module').then( m => m.AdminDiasPageModule)},
     ]
  },
  { path: 'tabs', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
