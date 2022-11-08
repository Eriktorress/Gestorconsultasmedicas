import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Platform } from '@ionic/angular';
import { AutenthicationService } from './services/autenthication.service';
import { DbService } from './services/db.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public dbService: DbService,
    public sqlite: SQLite,
    public autenthicationService: AutenthicationService,
    public router: Router
  ) {

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.createDatabase();
      this.autenthicationService.authState.subscribe(state => {
        if (state) {
          this.router.navigate(['home']);
        } else {
          this.router.navigate(['login']);
        }
      });
    });
  }
  /**
   * Función privada que se encarga de generar la base de datos
   */
  private createDatabase(){
    this.sqlite.create({ // Se usa la función create para crear la base de datos
      name:'data.db', // Se llamara data
      location:'default'
    }).then((db)=>{
      this.dbService.setDatabase(db);
      this.dbService.createTables();
    }) // Si todo sale bien, muestra por consola el log del db
    .catch(error=>{console.error('sadasd');}); // Si sale algo mal, muestra por consola el error
  }
}


