import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  datos: any;

  constructor(private api:ApiService,
              private activateRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.leer();
  }

  async leer()
  {
    let id="";
    this.activateRoute.paramMap.subscribe(async parametros => {
      id = parametros.get("id");
    })

    await this.api.getUser(id);
    this.datos = this.api.item;
    console.log(this.datos);
  }

}
