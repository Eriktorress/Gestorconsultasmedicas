"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_consultas_agregar_agregar_module_ts"],{

/***/ 270:
/*!*******************************************************************!*\
  !*** ./src/app/pages/consultas/agregar/agregar-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgregarPageRoutingModule": () => (/* binding */ AgregarPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _agregar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agregar.page */ 5612);




const routes = [
    {
        path: '',
        component: _agregar_page__WEBPACK_IMPORTED_MODULE_0__.AgregarPage
    }
];
let AgregarPageRoutingModule = class AgregarPageRoutingModule {
};
AgregarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AgregarPageRoutingModule);



/***/ }),

/***/ 8736:
/*!***********************************************************!*\
  !*** ./src/app/pages/consultas/agregar/agregar.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgregarPageModule": () => (/* binding */ AgregarPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _agregar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agregar-routing.module */ 270);
/* harmony import */ var _agregar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agregar.page */ 5612);







let AgregarPageModule = class AgregarPageModule {
};
AgregarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _agregar_routing_module__WEBPACK_IMPORTED_MODULE_0__.AgregarPageRoutingModule
        ],
        declarations: [_agregar_page__WEBPACK_IMPORTED_MODULE_1__.AgregarPage]
    })
], AgregarPageModule);



/***/ }),

/***/ 5612:
/*!*********************************************************!*\
  !*** ./src/app/pages/consultas/agregar/agregar.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgregarPage": () => (/* binding */ AgregarPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _agregar_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agregar.page.html?ngResource */ 34);
/* harmony import */ var _agregar_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agregar.page.scss?ngResource */ 9456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_dbconsulta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/dbconsulta.service */ 1234);







let AgregarPage = class AgregarPage {
    constructor(dbconsulta, router, api) {
        this.dbconsulta = dbconsulta;
        this.router = router;
        this.api = api;
        this.tituloConsulta = "";
        this.especialistaConsulta = "";
        this.textoConsulta = "";
        this.listado = [];
    }
    guardar() {
        this.dbconsulta.addConsulta(this.tituloConsulta, this.especialistaConsulta, this.textoConsulta);
        this.dbconsulta.presentToast("Consulta Agregada");
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
AgregarPage.ctorParameters = () => [
    { type: src_app_services_dbconsulta_service__WEBPACK_IMPORTED_MODULE_3__.DbconsultaService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
AgregarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-agregar',
        template: _agregar_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_agregar_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AgregarPage);



/***/ }),

/***/ 9456:
/*!**********************************************************************!*\
  !*** ./src/app/pages/consultas/agregar/agregar.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZ3JlZ2FyLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 34:
/*!**********************************************************************!*\
  !*** ./src/app/pages/consultas/agregar/agregar.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Agregar Consulta</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding-vertical\">\n    <ion-card class=\"ion-text-center\">\n      <ion-card-title>\n        <ion-label>\n          <h1>Datos Consulta</h1>\n        </ion-label>\n      </ion-card-title>\n\n      <ion-card-content>\n        <ion-item>\n          <ion-label position=\"floating\">Titulo</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"tituloConsulta\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Selecciona Especialista</ion-label>\n            <ion-select [(ngModel)]=\"especialistaConsulta\" (ionChange)=\"onSelectChange($event)\" >\n              <ion-select-option  *ngFor=\"let aux of listado\" [value]=\"aux['name']\">\n                {{aux.name}}\n              </ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Texto</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"textoConsulta\"></ion-input>\n        </ion-item>\n      </ion-card-content>\n      <ion-button shape=\"block\" (click)=\"guardar()\">Guardar Consulta</ion-button>\n    </ion-card>\n  <!-- <ion-input type=\"text\" [(ngModel)]=\"especialistaConsulta\"></ion-input> -->\n  </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_consultas_agregar_agregar_module_ts.js.map