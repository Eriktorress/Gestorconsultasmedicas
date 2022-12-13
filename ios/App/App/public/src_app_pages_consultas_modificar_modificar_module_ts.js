"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_consultas_modificar_modificar_module_ts"],{

/***/ 5225:
/*!***********************************************************************!*\
  !*** ./src/app/pages/consultas/modificar/modificar-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModificarPageRoutingModule": () => (/* binding */ ModificarPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _modificar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modificar.page */ 5262);




const routes = [
    {
        path: '',
        component: _modificar_page__WEBPACK_IMPORTED_MODULE_0__.ModificarPage
    }
];
let ModificarPageRoutingModule = class ModificarPageRoutingModule {
};
ModificarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ModificarPageRoutingModule);



/***/ }),

/***/ 302:
/*!***************************************************************!*\
  !*** ./src/app/pages/consultas/modificar/modificar.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModificarPageModule": () => (/* binding */ ModificarPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _modificar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modificar-routing.module */ 5225);
/* harmony import */ var _modificar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modificar.page */ 5262);







let ModificarPageModule = class ModificarPageModule {
};
ModificarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _modificar_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModificarPageRoutingModule
        ],
        declarations: [_modificar_page__WEBPACK_IMPORTED_MODULE_1__.ModificarPage]
    })
], ModificarPageModule);



/***/ }),

/***/ 5262:
/*!*************************************************************!*\
  !*** ./src/app/pages/consultas/modificar/modificar.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModificarPage": () => (/* binding */ ModificarPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _modificar_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modificar.page.html?ngResource */ 810);
/* harmony import */ var _modificar_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modificar.page.scss?ngResource */ 5968);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_dbconsulta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/dbconsulta.service */ 1234);







let ModificarPage = class ModificarPage {
    constructor(router, activedroute, dbconsulta, api) {
        this.router = router;
        this.activedroute = activedroute;
        this.dbconsulta = dbconsulta;
        this.api = api;
        this.idConsulta = "";
        this.tituloConsulta = "";
        this.especialistaConsulta = "";
        this.textoConsulta = "";
        this.listado = [];
        this.activedroute.queryParams.subscribe(param => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.idConsulta = this.router.getCurrentNavigation().extras.state.idEnviado;
                this.tituloConsulta = this.router.getCurrentNavigation().extras.state.tituloEnviado;
                this.especialistaConsulta = this.router.getCurrentNavigation().extras.state.especialistaEnviado;
                this.textoConsulta = this.router.getCurrentNavigation().extras.state.textoEnviado;
            }
        });
    }
    editar() {
        this.dbconsulta.updateConsulta(this.idConsulta, this.tituloConsulta, this.especialistaConsulta, this.textoConsulta);
        this.dbconsulta.presentToast("Consulta Modificada");
        this.router.navigate(['/consultas']);
    }
    ngOnInit() {
        this.listar();
    }
    listar() {
        this.api.getUsers();
        this.listado = this.api.listado;
    }
    onSelectChange(selectedValue) {
        //Selected Value Id will get as param ==> selectedValue
        //Selected Object
        var item = this.listado.find(item => item['name'] === selectedValue);
        //Position of object in array
        var postion = this.listado.findIndex(item => item['name'] === selectedValue);
    }
};
ModificarPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_services_dbconsulta_service__WEBPACK_IMPORTED_MODULE_3__.DbconsultaService },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
ModificarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-modificar',
        template: _modificar_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_modificar_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ModificarPage);



/***/ }),

/***/ 5968:
/*!**************************************************************************!*\
  !*** ./src/app/pages/consultas/modificar/modificar.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RpZmljYXIucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 810:
/*!**************************************************************************!*\
  !*** ./src/app/pages/consultas/modificar/modificar.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Modificar Consulta</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding-vertical\">\n    <ion-card class=\"ion-text-center\">\n      <ion-card-title>\n        <ion-label>\n          <h1>Modificar Consulta</h1>\n        </ion-label>\n      </ion-card-title>\n\n      <ion-card-content>\n        <ion-item>\n          <ion-label position=\"floating\">Titulo</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"tituloConsulta\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Selecciona Especialista</ion-label>\n            <ion-select [(ngModel)]=\"especialistaConsulta\" (ionChange)=\"onSelectChange($event)\" >\n              <ion-select-option  *ngFor=\"let aux of listado\" [value]=\"aux['name']\">\n                {{aux.name}}\n              </ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Texto </ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"textoConsulta\"></ion-input>\n        </ion-item>\n      </ion-card-content>\n      <ion-button shape=\"block\" (click)=\"editar()\">Guardar Consulta</ion-button>\n    </ion-card>\n\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_consultas_modificar_modificar_module_ts.js.map