import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private dbconsulta: DbconsultaService, private router: Router) { }

  guardar() {
    this.dbconsulta.addConsulta(this.tituloConsulta,this.especialistaConsulta,this.textoConsulta);
    this.dbconsulta.presentToast("Consulta Agregada");
    this.router.navigate(['/consultas']);
  }

  ngOnInit() {
  }

}