import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-especialistas',
  templateUrl: './especialistas.page.html',
  styleUrls: ['./especialistas.page.scss'],
})
export class EspecialistasPage implements OnInit {
  listado = [];
  constructor( public api:ApiService) {}

  ngOnInit() {
    this.listar();
  }
  listar()
  {
    this.api.getUsers();
    this.listado = this.api.listado;
  }

}
