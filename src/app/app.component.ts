import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

import { Platform } from '@ionic/angular';
import { DbService } from './services/db.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,

    public dbService: DbService,
    public sqlite: SQLite,
    public router: Router
  ) {

 }
}