import { Pipe, PipeTransform } from '@angular/core';
import { Cita } from '../models/cita.models';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(citas: Cita[], texto: string): Cita[] {
    if(texto.length === 0){
      return citas;
    }

    if(texto=='dia' ){
      return citas;

    }

    console.log(citas);
    texto = texto.toLocaleLowerCase();
    console.log('entro en dia');
    return citas.filter(cita => {
      return cita.dia.toLocaleLowerCase().includes(texto);
    });


  }

}
