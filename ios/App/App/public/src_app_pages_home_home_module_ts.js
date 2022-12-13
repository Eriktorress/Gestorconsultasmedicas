"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 6610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
        children: [
            {
                path: 'house',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_house_house_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./../../pages/house/house.module */ 7179)).then(m => m.HousePageModule)
            },
            {
                path: 'perfil',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_perfil_perfil_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./../../pages/perfil/perfil.module */ 6217)).then(m => m.PerfilPageModule)
            },
            {
                path: 'horas',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_horas_horas_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./../../pages/horas/horas.module */ 2936)).then(m => m.HorasPageModule)
            },
            {
                path: 'maps',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_maps_maps_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./../../pages/maps/maps.module */ 5177)).then(m => m.MapsPageModule)
            },
        ]
    },
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 7994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 6610);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 678);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 8380);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 2260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_autenthication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/autenthication.service */ 280);
/* harmony import */ var src_app_services_db_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/db.service */ 3773);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);








let HomePage = class HomePage {
    constructor(router, dbtaskService, alertcontroler, authenticationService) {
        this.router = router;
        this.dbtaskService = dbtaskService;
        this.alertcontroler = alertcontroler;
        this.authenticationService = authenticationService;
    }
    /**
     * Función que permite navegar entre componentes
     * mediante la URL
     * @param $event
     */
    segmentChanged($event) {
        console.log($event.detail.value);
        let direction = $event.detail.value;
        this.router.navigate(['home/' + direction]);
    }
    ionViewWillEnter() {
        this.router.navigate(['home/house']); /* DONDE SE DIRIGE LUEGO DE ENTRAR AL HOME (en este caso lo dirigimos al home/ house)*/
    }
    logout() {
        this.authenticationService.logout();
    }
    salir() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertcontroler.create({
                header: 'Cerrar Sesión',
                message: '¿Estas Seguro que deseas cerrar tu sesión?',
                buttons: [
                    {
                        text: 'No, cancelar',
                        handler: () => {
                        }
                    }, {
                        text: 'Si, aceptar',
                        handler: () => {
                            this.authenticationService.logout();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_db_service__WEBPACK_IMPORTED_MODULE_3__.DbService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: src_app_services_autenthication_service__WEBPACK_IMPORTED_MODULE_2__.AutenthicationService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 2260:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: #ecf4ff;\n}\n\nion-toolbar {\n  --background: #ffffff;\n  --color: rgb(0, 0, 0);\n}\n\nion-avatar {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kscUJBQUE7QUFBSjs7QUFJQTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7QUFESjs7QUFJQTtFQUNFLGFBQUE7QUFERiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNlY2Y0ZmY7XHJcbiAgICBcclxuICB9XHJcblxyXG5pb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjsgXHJcbiAgICAtLWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbn1cclxuXHJcbmlvbi1hdmF0YXJ7XHJcbiAgcGFkZGluZzogMTBweDtcclxufSJdfQ== */";

/***/ }),

/***/ 8380:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <!--Boton de perfil -->\r\n    <ion-buttons slot=\"primary\">\r\n      <ion-avatar>\r\n        <img alt=\"\" src=\"/assets/images/logo_3.jpg\" />\r\n      </ion-avatar>\r\n    </ion-buttons>\r\n\r\n    <!--boton salir -->\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"salir()\" icon-only> \r\n        <ion-icon name=\"reorder-four-sharp\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    \r\n    <!--titulo -->\r\n    <ion-title text-Center>Bienvenido</ion-title>\r\n  </ion-toolbar>\r\n  <!-- Termina el Header -->\r\n\r\n\r\n\r\n  <ion-content [fullscreen]=\"true\">\r\n    <ion-header collapse=\"condense\">\r\n      <ion-toolbar>\r\n        <ion-title size=\"large\"></ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n\r\n  \r\n    <ion-menu side=\"start\" menuId=\"first\" contentId=\"main\">\r\n      <ion-header>\r\n        <ion-toolbar color=\"primary\">\r\n          <ion-title>Start Menu</ion-title>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n      <ion-content>\r\n        <ion-list>\r\n          <ion-item><ion-icon name=\"person-circle-outline\" slot=\"start\"></ion-icon>Perfil </ion-item>\r\n          <ion-item><ion-icon name=\"fitness-outline\" slot=\"start\"></ion-icon> Mi estado </ion-item>\r\n          <ion-item [routerLink]=\"['/consultas']\"><ion-icon name=\"calendar-number-outline\"  slot=\"start\"></ion-icon> Mis consultas </ion-item>\r\n          <ion-item><ion-icon name=\"bag-add-outline\" slot=\"start\"></ion-icon> Historial de atenciones </ion-item>\r\n          <ion-item [routerLink]=\"['/especialistas']\"><ion-icon name=\"glasses-outline\" slot=\"start\"></ion-icon> Especialistas </ion-item>\r\n          <ion-item><ion-icon name=\"notifications-outline\" slot=\"start\"></ion-icon> Notificaciones </ion-item>\r\n          <ion-item [routerLink]=\"['/home/mapa']\"><ion-icon name=\"map-outline\" slot=\"start\"></ion-icon> Geocalización </ion-item>\r\n  \r\n        </ion-list>\r\n      </ion-content>\r\n    </ion-menu>\r\n     <ion-router-outlet id=\"main\"></ion-router-outlet>\r\n\r\n\r\n     <!--INICIO TABS -->\r\n     <ion-tabs>\r\n      <ion-tab-bar slot=\"bottom\">\r\n\r\n        <!-- Home-->\r\n        <ion-tab-button tab=\"house\">\r\n          <ion-icon name=\"home-sharp\"></ion-icon>\r\n          <ion-label>Home</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <!-- PERFIL-->\r\n        <ion-tab-button tab=\"perfil\">\r\n          <ion-icon name=\"person-circle\"></ion-icon>\r\n          <ion-label>Perfil</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <!-- Calendario -->\r\n        <ion-tab-button tab=\"horas\">\r\n          <ion-icon name=\"calendar\"></ion-icon>\r\n          <ion-label>Calendario</ion-label>\r\n        </ion-tab-button>\r\n      \r\n        <!-- MAPA -->\r\n        <ion-tab-button tab=\"maps\">\r\n          <ion-icon name=\"map\"></ion-icon>\r\n          <ion-label>Mapa</ion-label>\r\n        </ion-tab-button>\r\n        \r\n        \r\n      </ion-tab-bar>\r\n    </ion-tabs>\r\n    <!--FIN TABS -->\r\n\r\n  </ion-content>\r\n</ion-header>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map