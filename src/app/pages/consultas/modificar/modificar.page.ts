import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { DbconsultaService } from 'src/app/services/dbconsulta.service';

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
  listado = [];

  constructor(private router:Router, private activedroute: ActivatedRoute, private dbconsulta: DbconsultaService,public api:ApiService) {
    this.activedroute.queryParams.subscribe(param =>{
      if(this.router.getCurrentNavigation().extras.state){
        this.idConsulta = this.router.getCurrentNavigation().extras.state.idEnviado;
        this.tituloConsulta = this.router.getCurrentNavigation().extras.state.tituloEnviado;
        this.especialistaConsulta = this.router.getCurrentNavigation().extras.state.especialistaEnviado;
        this.textoConsulta = this.router.getCurrentNavigation().extras.state.textoEnviado;
      }
    })
  }

  editar(){
    this.dbconsulta.updateConsulta(this.idConsulta, this.tituloConsulta,this.especialistaConsulta,this.textoConsulta);
    this.dbconsulta.presentToast("Consulta Modificada");
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


