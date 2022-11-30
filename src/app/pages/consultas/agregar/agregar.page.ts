import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { DbconsultaService } from 'src/app/services/dbconsulta.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  tituloConsulta = "";
  especialistaConsulta= "";
  textoConsulta= "";
  listado = [];

  

  constructor(private dbconsulta: DbconsultaService, private router: Router,public api:ApiService) { }

  guardar() {
    this.dbconsulta.addConsulta(this.tituloConsulta,this.especialistaConsulta,this.textoConsulta);
    this.dbconsulta.presentToast("Consulta Agregada");
    this.router.navigate(['/consultas']);
  }

  ngOnInit() {
    this.listar();
}
listar()
{
  this.api.getUsers();
  this.listado = this.api.listado;
}

onSelectChange(selectedValue: any) {
  //Selected Value Id will get as param ==> selectedValue
  //Selected Object
  var item = this.listado.find(item => item['name'] === selectedValue);
  //Position of object in array
  var postion = this.listado.findIndex(item => item['name'] === selectedValue);
}
  }
  

