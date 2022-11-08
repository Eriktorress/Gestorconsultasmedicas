import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbconsultaService } from 'src/app/services/dbconsulta.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.page.html',
  styleUrls: ['./consultas.page.scss'],
})
@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
})
export class ModificarPage implements OnInit {

  idConsulta = "";
  tituloConsulta = "";
  especialistaConsulta = "";
  textoConsulta = "";

  constructor(private router:Router, private activedroute: ActivatedRoute, private dbservice: DbconsultaService) {
    this.activedroute.queryParams.subscribe(param =>{
      if(this.router.getCurrentNavigation().extras.state){
        this.idConsulta = this.router.getCurrentNavigation().extras.state.idEnviado;
        this.tituloConsulta = this.router.getCurrentNavigation().extras.state.tituloEnviado;
        this.especialistaConsulta = this.router.getCurrentNavigation().extras.state.tituloEnviado;
        this.textoConsulta = this.router.getCurrentNavigation().extras.state.textoEnviado;
      }
    })
  }

  editar(){
    this.dbservice.updateConsulta(this.idConsulta, this.tituloConsulta,this.especialistaConsulta,this.textoConsulta);
    this.dbservice.presentToast("Noticia Modificada");
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}