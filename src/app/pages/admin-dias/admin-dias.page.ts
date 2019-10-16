import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-dias',
  templateUrl: './admin-dias.page.html',
  styleUrls: ['./admin-dias.page.scss'],
})
export class AdminDiasPage implements OnInit {


  listado;
  constructor(public navCtrl: NavController, private http:HttpClient) { 
    this.http.get("https://probanditoito.000webhostapp.com/cargarDiasLibres.php").subscribe(datos => {
      this.listado = datos;
    });
  }

  ngOnInit() {
  }

}
