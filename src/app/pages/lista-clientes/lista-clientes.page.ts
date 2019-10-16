import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.page.html',
  styleUrls: ['./lista-clientes.page.scss'],
})
export class ListaClientesPage implements OnInit {

  listado;
  constructor(public navCtrl: NavController, private http:HttpClient) { 
    this.http.get("https://probanditoito.000webhostapp.com/cargarClientes.php").subscribe(datos => {
      this.listado = datos;
    });
  }


  
  ngOnInit() {
    
  }

}
