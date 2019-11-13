import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaCitasPage } from './lista-citas.page';
import { HttpClientModule } from '@angular/common/http';
import { PipesModule } from '../../pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: ListaCitasPage
  }
];

@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    PipesModule,
  ],
  declarations: [ListaCitasPage],
  providers: [PipesModule]
})
export class ListaCitasPageModule {}
