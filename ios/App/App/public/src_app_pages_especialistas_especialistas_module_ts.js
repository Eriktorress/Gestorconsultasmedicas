"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_especialistas_especialistas_module_ts"],{

/***/ 5751:
/*!*********************************************************************!*\
  !*** ./src/app/pages/especialistas/especialistas-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EspecialistasPageRoutingModule": () => (/* binding */ EspecialistasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _especialistas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./especialistas.page */ 8132);




const routes = [
    {
        path: '',
        component: _especialistas_page__WEBPACK_IMPORTED_MODULE_0__.EspecialistasPage
    },
    {
        path: 'info/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_especialistas_info_info_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./info/info.module */ 2564)).then(m => m.InfoPageModule)
    }
];
let EspecialistasPageRoutingModule = class EspecialistasPageRoutingModule {
};
EspecialistasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EspecialistasPageRoutingModule);



/***/ }),

/***/ 9452:
/*!*************************************************************!*\
  !*** ./src/app/pages/especialistas/especialistas.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EspecialistasPageModule": () => (/* binding */ EspecialistasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _especialistas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./especialistas-routing.module */ 5751);
/* harmony import */ var _especialistas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./especialistas.page */ 8132);







let EspecialistasPageModule = class EspecialistasPageModule {
};
EspecialistasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _especialistas_routing_module__WEBPACK_IMPORTED_MODULE_0__.EspecialistasPageRoutingModule
        ],
        declarations: [_especialistas_page__WEBPACK_IMPORTED_MODULE_1__.EspecialistasPage]
    })
], EspecialistasPageModule);



/***/ }),

/***/ 8132:
/*!***********************************************************!*\
  !*** ./src/app/pages/especialistas/especialistas.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EspecialistasPage": () => (/* binding */ EspecialistasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _especialistas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./especialistas.page.html?ngResource */ 6933);
/* harmony import */ var _especialistas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./especialistas.page.scss?ngResource */ 3649);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);





let EspecialistasPage = class EspecialistasPage {
    constructor(api) {
        this.api = api;
        this.listado = [];
    }
    ngOnInit() {
        this.listar();
    }
    listar() {
        this.api.getUsers();
        this.listado = this.api.listado;
    }
};
EspecialistasPage.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
EspecialistasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-especialistas',
        template: _especialistas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_especialistas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EspecialistasPage);



/***/ }),

/***/ 3649:
/*!************************************************************************!*\
  !*** ./src/app/pages/especialistas/especialistas.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlc3BlY2lhbGlzdGFzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 6933:
/*!************************************************************************!*\
  !*** ./src/app/pages/especialistas/especialistas.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>especialistas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n\n<ion-content>\n  <div *ngIf=\"listado.length > 0\">\n\n    <ion-list>\n\n      <ion-item-sliding *ngFor=\"let aux of listado\" [routerLink]=\"['/especialistas/info/', aux.id]\">\n\n        <ion-item>\n          <ion-avatar slot=\"start\">\n            <img alt=\"Silhouette of a person's head\" src=\"https://es.web.img2.acsta.net/c_162_216/pictures/19/06/22/13/38/1944794.jpg\"/>\n          </ion-avatar>\n\n          <ion-label>\n            <p style=\"word-wrap: break-word; white-space: normal;\">{{aux.name}}</p>\n            <p style=\"word-wrap: break-word; white-space: normal;\">{{aux.username}}</p>\n          </ion-label>\n        </ion-item>\n\n      </ion-item-sliding>\n\n    </ion-list>\n  </div>\n  \n</ion-content>\n\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_especialistas_especialistas_module_ts.js.map