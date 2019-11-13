import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from './filtro.pipe';
import { Filtro2Pipe } from './filtro2.pipe';



@NgModule({
  declarations: [FiltroPipe, Filtro2Pipe],
  exports:[FiltroPipe, Filtro2Pipe],
})
export class PipesModule { }
