import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform, ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Consultas } from './consultas';


@Injectable({
  providedIn: 'root'
})
export class DbconsultaService {
  public database: SQLiteObject;

  tablaConsultas: string = "CREATE TABLE IF NOT EXISTS consulta(id INTEGER PRIMARY KEY autoincrement, titulo VARCHAR(50) NOT NULL, especialista VARCHAR(50) NOT NULL, texto TEXT NOT NULL);";
  registro: string = "INSERT or IGNORE INTO consulta(id, titulo, especialista, texto) VALUES (1, 'Titulo consulta', 'especialista','Texto de la consulta que se quiere mostrar');";
  listaConsultas = new BehaviorSubject([]);

  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private sqlite: SQLite, private platform: Platform, public toastController: ToastController) {
    this.crearBD();
   }

   addConsulta(titulo, especialista, texto){
    let data=[titulo,especialista,texto];
    return this.database.executeSql('INSERT INTO consulta(titulo,especialista,texto) VALUES(?,?,?)',data)
    .then(res =>{
      this.buscarConsultas();
    })

  }

  updateConsulta(id, titulo, especialista, texto){
    let data = [titulo, especialista,texto, id];
    return this.database.executeSql('UPDATE consulta SET titulo = ?, especialista = ?, texto = ? WHERE id = ?',data)
    .then(data2 =>{
      this.buscarConsultas();
    })

  }

  deleteConsulta(id){
    return this.database.executeSql('DELETE FROM consulta WHERE id = ?', [id])
    .then(a =>{
      this.buscarConsultas();
    })
  }

  dbState() {
    return this.isDbReady.asObservable();
  }

  crearBD() {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'Consultas3.db',
        location: 'default'

      }).then((db: SQLiteObject) => {
        this.database = db;
        this.presentToast("BD Creada");
        //llamamos a la creación de tablas
        this.crearTablas();
      }).catch(e => this.presentToast(e));
    })
  }

  async crearTablas() {
    try {
      await this.database.executeSql(this.tablaConsultas, []);
      await this.database.executeSql(this.registro, []);
      this.presentToast("Tabla Creada");
      this.buscarConsultas();
      this.isDbReady.next(true);
    } catch (e) {
      this.presentToast("error creartabla " + e);
    }
  }

  buscarConsultas() {
    //this.presentAlert("a");
    return this.database.executeSql('SELECT * FROM consulta', []).then(res => {
      let items: Consultas[] = [];
      //this.presentAlert("b");
      if (res.rows.length > 0) {
        //this.presentAlert("c");
        for (var i = 0; i < res.rows.length; i++) {
          //this.presentAlert("d");
          items.push({
            id: res.rows.item(i).id,
            titulo: res.rows.item(i).titulo,
            especialista: res.rows.item(i).especialista,
            texto: res.rows.item(i).texto
          });
        }
      }
      //this.presentAlert("d");
      this.listaConsultas.next(items);
    });
  }

  fetchConsultas(): Observable<Consultas[]> {
  return this.listaConsultas.asObservable();
  }

  async presentToast(mensaje: string) {
  const toast = await this.toastController.create({
    message: mensaje,
    duration: 3000
  });
  toast.present();
  }



}