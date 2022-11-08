import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  modeloUsuario: string = '';
  modeloContrasena: string = '';

  constructor(private dbservice: DbService, private alertcontroler: AlertController) {
    console.log('pagina Login iniciada')

  }

  ngOnInit() {
  }

  validarCredenciales() {
    console.log(this.modeloUsuario);
    console.log(this.modeloContrasena);
  }

  async mostrarformulario() {
    const alert = await this.alertcontroler.create({
      header: 'Nuevo usuario',
      inputs: [
        {
          name: 'correo',
          type: 'text',
          placeholder: 'correo Electrónico'
        },
        {
          name: 'contrasena',
          type: 'password',
          placeholder: 'Contraseña'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel')
          }
        },
        {
          text: 'Almacenar',
          handler: (data) => {
            this.almacenarUsuario(data.correo, data.contrasena);
          }
        }
      ]
    });

    await alert.present();
  }

  almacenarUsuario(correo, contrasena) {
    this.dbservice.almacenarUsuario(correo, contrasena);
  }
}
