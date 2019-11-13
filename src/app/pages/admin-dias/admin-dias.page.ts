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
  dia='';
  mes='';
  año='';
  diaActual='';

  constructor(public navCtrl: NavController, private http:HttpClient) { 
    this.http.get("https://probanditoito.000webhostapp.com/cargarDiasLibres.php").subscribe(datos => {
      this.listado = datos;
    });




    
  }

  ngOnInit() {
    this.dia= new Date().getDate()+"";
    if(this.dia.length<2){
      this.dia="0"+this.dia;
    }
    this.mes= new Date().getMonth()+1+"";
    
    if(this.mes.length<2){
      this.mes="0"+this.mes;
    }
    this.año= new Date().getFullYear()+"";
    this.diaActual=this.año+"-"+this.mes+"-"+this.dia;
    console.log(this.diaActual);
  }


  insertarDiaLibre(){

    this.http.get("https://probanditoito.000webhostapp.com/insertarDiaLibre.php?diaLibre="+this.dia.substring(0,10)).subscribe(datos => {
      console.log(datos);

     }, error => {
      console.log(error);
    });
      
    //window.location.reload();

  }

  borrarDiaLibre(item){

    this.http.get("https://probanditoito.000webhostapp.com/borrarDiaLibre.php?diaLibre="+item).subscribe(data => {
      console.log(data);

     }, error => {
      console.log(error);
    });
  
    //Aqui recargo la pagina
    window.location.reload();
  }

}
