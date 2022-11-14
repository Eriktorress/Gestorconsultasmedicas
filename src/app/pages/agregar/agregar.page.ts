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

  constructor(private dbservice: DbconsultaService, private router: Router) { }

  guardar() {
    this.dbservice.addConsulta(this.tituloConsulta,this.especialistaConsulta,this.textoConsulta);
    this.dbservice.presentToast("Consulta Agregada");
    this.router.navigate(['/consultas']);
  }

  ngOnInit() {
  }

}
