import { Pipe, PipeTransform } from '@angular/core';
import { Cita } from '../models/cita.models';

@Pipe({
  name: 'filtro2'
})
export class Filtro2Pipe implements PipeTransform {

  transform(citas: Cita[], texto: string): Cita[] {
    
    if(texto.length===0 ){
      return citas;
    }

    if(texto=='nombre' ){
      return citas;
    }

/*    // if(texto='dia'){
      texto=texto.toLocaleLowerCase();
      console.log('entro en dia');
      return citas.filter(cita=>{
        return cita.dia.toLocaleLowerCase().includes(texto);
      });
    //} */
     //if(texto='nombre'){
      texto=texto.toLocaleLowerCase();
      console.log('entro en nombre');
      return citas.filter(cita=>{
        return cita.nomCliente.toLocaleLowerCase().includes(texto);
      });
    //}

  }
}
