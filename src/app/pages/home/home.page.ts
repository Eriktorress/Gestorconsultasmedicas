import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenthicationService } from 'src/app/services/autenthication.service';
import { DbService } from 'src/app/services/db.service';
import { ToastController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
S
  constructor(
    private router: Router,
    public dbtaskService: DbService,
    private alertcontroler: AlertController,
    public authenticationService:AutenthicationService) {

  }
  
  /**
   * Función que permite navegar entre componentes
   * mediante la URL
   * @param $event 
   */
  segmentChanged($event){
    console.log($event.detail.value);
    let direction=$event.detail.value;
    this.router.navigate(['home/'+direction]);
  }
 
  ionViewWillEnter(){
    this.router.navigate(['home/perfil']);
  }
 
  logout(){
    this.authenticationService.logout();
  }

  async salir(){
    const alert = await this.alertcontroler.create({
      header: 'Salir',
      message: '¿Deberitas te quieres salir?',
      buttons: [
        {
          text: 'No mejor no',
          handler: () => {

          }
        }, {
          text: 'Sii',
          handler: () => {
            this.authenticationService.logout();
          }
        }
      ]
    });

    await alert.present();
  }


}