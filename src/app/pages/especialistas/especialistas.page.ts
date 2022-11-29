import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-especialistas',
  templateUrl: './especialistas.page.html',
  styleUrls: ['./especialistas.page.scss'],
})
export class EspecialistasPage implements OnInit {
  getPosts:any[]=[];

  constructor( public _services:ApiService) {

    this._services.getPosts().subscribe(data => {
      this.getPosts = data
      console.log(this.getPosts);
    }
      )
   }

  ngOnInit() {
  }

}
