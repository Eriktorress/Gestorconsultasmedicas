"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_consultas_consultas_module_ts"],{

/***/ 4357:
/*!*************************************************************!*\
  !*** ./src/app/pages/consultas/consultas-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultasPageRoutingModule": () => (/* binding */ ConsultasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _consultas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consultas.page */ 7661);




const routes = [
    {
        path: '',
        component: _consultas_page__WEBPACK_IMPORTED_MODULE_0__.ConsultasPage,
    },
    {
        path: 'modificar',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_consultas_modificar_modificar_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modificar/modificar.module */ 302)).then(m => m.ModificarPageModule)
    },
    {
        path: 'agregar',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_consultas_agregar_agregar_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./agregar/agregar.module */ 8736)).then(m => m.AgregarPageModule)
    }
];
let ConsultasPageRoutingModule = class ConsultasPageRoutingModule {
};
ConsultasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConsultasPageRoutingModule);



/***/ }),

/***/ 2991:
/*!*****************************************************!*\
  !*** ./src/app/pages/consultas/consultas.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultasPageModule": () => (/* binding */ ConsultasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _consultas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consultas-routing.module */ 4357);
/* harmony import */ var _consultas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consultas.page */ 7661);







let ConsultasPageModule = class ConsultasPageModule {
};
ConsultasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _consultas_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConsultasPageRoutingModule
        ],
        declarations: [_consultas_page__WEBPACK_IMPORTED_MODULE_1__.ConsultasPage]
    })
], ConsultasPageModule);



/***/ }),

/***/ 7661:
/*!***************************************************!*\
  !*** ./src/app/pages/consultas/consultas.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultasPage": () => (/* binding */ ConsultasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _consultas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consultas.page.html?ngResource */ 3370);
/* harmony import */ var _consultas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consultas.page.scss?ngResource */ 9952);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_dbconsulta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/dbconsulta.service */ 1234);






let ConsultasPage = class ConsultasPage {
    constructor(router, servicioBD) {
        this.router = router;
        this.servicioBD = servicioBD;
        this.consultas = [
            {
                titulo: "Titulo de la Consulta",
                especialista: "Especialistas",
                texto: "Texto "
            }
        ];
    }
    ngOnInit() {
        //this.servicioBD.presentAlert("1");
        this.servicioBD.dbState().subscribe((res) => {
            //this.servicioBD.presentAlert("2");
            if (res) {
                //this.servicioBD.presentAlert("3");
                this.servicioBD.fetchConsultas().subscribe(item => {
                    this.consultas = item;
                });
            }
            //this.servicioBD.presentAlert("4");
        });
    }
    getItem($event) {
        const valor = $event.target.value;
        console.log('valor del control: ' + valor);
    }
    agregar() {
    }
    editar(item) {
        let navigationextras = {
            state: {
                idEnviado: item.id,
                tituloEnviado: item.titulo,
                especialistaEnviado: item.especialista,
                textoEnviado: item.texto
            }
        };
        this.router.navigate(['./consultas/modificar'], navigationextras);
    }
    eliminar(item) {
        this.servicioBD.deleteConsulta(item.id);
        this.servicioBD.presentToast("Consulta Eliminada");
    }
};
ConsultasPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_services_dbconsulta_service__WEBPACK_IMPORTED_MODULE_2__.DbconsultaService }
];
ConsultasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-consultas',
        template: _consultas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_consultas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ConsultasPage);



/***/ }),

/***/ 1234:
/*!************************************************!*\
  !*** ./src/app/services/dbconsulta.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DbconsultaService": () => (/* binding */ DbconsultaService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _awesome_cordova_plugins_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/sqlite/ngx */ 8685);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4505);





let DbconsultaService = class DbconsultaService {
    constructor(sqlite, platform, toastController) {
        this.sqlite = sqlite;
        this.platform = platform;
        this.toastController = toastController;
        this.tablaConsultas = "CREATE TABLE IF NOT EXISTS consulta(id INTEGER PRIMARY KEY autoincrement, titulo VARCHAR(50) NOT NULL, especialista VARCHAR(50) NOT NULL, texto TEXT NOT NULL);";
        this.registro = "INSERT or IGNORE INTO consulta(id, titulo, especialista, texto) VALUES (1, 'Titulo consulta', 'especialista','Texto de la consulta que se quiere mostrar');";
        this.listaConsultas = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this.isDbReady = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
        this.crearBD();
    }
    addConsulta(titulo, especialista, texto) {
        let data = [titulo, especialista, texto];
        return this.database.executeSql('INSERT INTO consulta(titulo,especialista,texto) VALUES(?,?,?)', data)
            .then(res => {
            this.buscarConsultas();
        });
    }
    updateConsulta(id, titulo, especialista, texto) {
        let data = [titulo, especialista, texto, id];
        return this.database.executeSql('UPDATE consulta SET titulo = ?, especialista = ?, texto = ? WHERE id = ?', data)
            .then(data2 => {
            this.buscarConsultas();
        });
    }
    deleteConsulta(id) {
        return this.database.executeSql('DELETE FROM consulta WHERE id = ?', [id])
            .then(a => {
            this.buscarConsultas();
        });
    }
    dbState() {
        return this.isDbReady.asObservable();
    }
    crearBD() {
        this.platform.ready().then(() => {
            this.sqlite.create({
                name: 'Consultas3.db',
                location: 'default'
            }).then((db) => {
                this.database = db;
                this.presentToast("BD Creada");
                //llamamos a la creación de tablas
                this.crearTablas();
            }).catch(e => this.presentToast(e));
        });
    }
    crearTablas() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.database.executeSql(this.tablaConsultas, []);
                yield this.database.executeSql(this.registro, []);
                this.presentToast("Tabla Creada");
                this.buscarConsultas();
                this.isDbReady.next(true);
            }
            catch (e) {
                this.presentToast("error creartabla " + e);
            }
        });
    }
    buscarConsultas() {
        //this.presentAlert("a");
        return this.database.executeSql('SELECT * FROM consulta', []).then(res => {
            let items = [];
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
    fetchConsultas() {
        return this.listaConsultas.asObservable();
    }
    presentToast(mensaje) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: mensaje,
                duration: 3000
            });
            toast.present();
        });
    }
};
DbconsultaService.ctorParameters = () => [
    { type: _awesome_cordova_plugins_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__.SQLite },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController }
];
DbconsultaService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], DbconsultaService);



/***/ }),

/***/ 9952:
/*!****************************************************************!*\
  !*** ./src/app/pages/consultas/consultas.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25zdWx0YXMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 3370:
/*!****************************************************************!*\
  !*** ./src/app/pages/consultas/consultas.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\r\n<ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n      <ion-title>\r\n       Consultas\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n    \r\n  <ion-content [fullscreen]=\"true\">\r\n    <ion-header collapse=\"condense\">\r\n      <ion-toolbar>\r\n        <ion-title size=\"large\">Consultas</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n  \r\n    <br>\r\n    <h1>Listado de Elementos</h1>\r\n  \r\n    <ion-searchbar (ionInput)=\"getItem($event)\"></ion-searchbar>\r\n  \r\n    <ion-list>\r\n  \r\n      <ion-item-sliding *ngFor=\"let item of consultas\">\r\n  \r\n        <ion-item>\r\n          <ion-avatar slot=\"start\" >\r\n            <img src=\"../assets/icon/icon-doctor.jpg\">\r\n          </ion-avatar>\r\n  \r\n          <ion-label>\r\n            <h2>{{ item.titulo }}</h2>\r\n            <p style=\"word-wrap: break-word; white-space: normal;\">{{ item.especialista }}</p>\r\n            <p style=\"word-wrap: break-word; white-space: normal;\">{{ item.texto }}</p>\r\n          </ion-label>\r\n        </ion-item>\r\n  \r\n        <ion-item-options side=\"end\">\r\n          <ion-item-option (click)=\"editar(item)\">\r\n            <ion-icon name=\"create\" ></ion-icon> Editar\r\n          </ion-item-option>\r\n          <ion-item-option color=\"danger\" (click)=\"eliminar(item)\">\r\n            <ion-icon name=\"trash\"></ion-icon> Eliminar\r\n          </ion-item-option>\r\n        </ion-item-options>\r\n      </ion-item-sliding>\r\n  \r\n    </ion-list>\r\n  \r\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n      <ion-fab-button [routerLink]=\"['/consultas/agregar']\">\r\n        <ion-icon name=\"add\"></ion-icon>\r\n      </ion-fab-button>\r\n      <!--\r\n  <ion-fab-list side=\"top\">\r\n        <ion-fab-button><ion-icon name=\"logo-vimeo\"></ion-icon></ion-fab-button>\r\n        <ion-fab-button><ion-icon name=\"logo-vimeo\"></ion-icon></ion-fab-button>\r\n      </ion-fab-list>\r\n  \r\n      -->\r\n  \r\n    </ion-fab>\r\n  \r\n  </ion-content>\r\n  ";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_consultas_consultas_module_ts.js.map