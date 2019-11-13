import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Cita } from '../../models/cita.models';
import { HTTP } from '@ionic-native/http';
import { NativeHttpModule, NativeHttpBackend, NativeHttpFallback } from 'ionic-native-http-connection-backend';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-lista-citas',
  templateUrl: './lista-citas.page.html',
  styleUrls: ['./lista-citas.page.scss'],
})
export class ListaCitasPage implements OnInit {
  idCita: string;
  valorSelect='dia';
  textoBusqueda='';
  textoBuscar='';
  selectLista='';
  newValue='';
  listado;
  listado2;
  citas: Cita[] =[];
  constructor(public navCtrl: NavController, private http:HttpClient) { 
    this.http.get("https://probanditoito.000webhostapp.com/cargarCitas.php").subscribe(datos => {
      this.listado = datos;
    });
  }

  borrarCita(item){
    console.log(item);
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    console.log(item.idCita);

    let postData =  item+""
    this.http.get("https://probanditoito.000webhostapp.com/borrarCita.php?dia="+item.dia+"&hora="+item.hora+"&servicio"+item.servicio+"&idCita="+item.idCita).subscribe(data => {
      console.log(data);

     }, error => {
      console.log(error);
    });
  
    //Aqui recargo la pagina
    window.location.reload();
  }

  buscarCita(event){

    const texto=event.target.value;
    this.textoBuscar=texto;
    console.log(event);
  }

  ngOnInit() {
  }


  reload(){
    
  }
}
