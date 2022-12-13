"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_especialistas_info_info_module_ts"],{

/***/ 4797:
/*!*****************************************************************!*\
  !*** ./src/app/pages/especialistas/info/info-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoPageRoutingModule": () => (/* binding */ InfoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _info_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info.page */ 4973);




const routes = [
    {
        path: '',
        component: _info_page__WEBPACK_IMPORTED_MODULE_0__.InfoPage
    }
];
let InfoPageRoutingModule = class InfoPageRoutingModule {
};
InfoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InfoPageRoutingModule);



/***/ }),

/***/ 2564:
/*!*********************************************************!*\
  !*** ./src/app/pages/especialistas/info/info.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoPageModule": () => (/* binding */ InfoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _info_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info-routing.module */ 4797);
/* harmony import */ var _info_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info.page */ 4973);







let InfoPageModule = class InfoPageModule {
};
InfoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _info_routing_module__WEBPACK_IMPORTED_MODULE_0__.InfoPageRoutingModule
        ],
        declarations: [_info_page__WEBPACK_IMPORTED_MODULE_1__.InfoPage]
    })
], InfoPageModule);



/***/ }),

/***/ 4973:
/*!*******************************************************!*\
  !*** ./src/app/pages/especialistas/info/info.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoPage": () => (/* binding */ InfoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _info_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info.page.html?ngResource */ 2046);
/* harmony import */ var _info_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info.page.scss?ngResource */ 2848);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);






let InfoPage = class InfoPage {
    constructor(api, activateRoute) {
        this.api = api;
        this.activateRoute = activateRoute;
    }
    ngOnInit() {
        this.leer();
    }
    leer() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let id = "";
            this.activateRoute.paramMap.subscribe((parametros) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                id = parametros.get("id");
            }));
            yield this.api.getUser(id);
            this.datos = this.api.item;
            console.log(this.datos);
        });
    }
};
InfoPage.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute }
];
InfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-info',
        template: _info_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_info_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InfoPage);



/***/ }),

/***/ 2848:
/*!********************************************************************!*\
  !*** ./src/app/pages/especialistas/info/info.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "ion-card-header.ios {\n  display: flex;\n  flex-flow: column-reverse;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0FBQ0oiLCJmaWxlIjoiaW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC1oZWFkZXIuaW9zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbi1yZXZlcnNlO1xyXG4gIH0iXX0= */";

/***/ }),

/***/ 2046:
/*!********************************************************************!*\
  !*** ./src/app/pages/especialistas/info/info.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"especialistas\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Datos personales</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <div *ngIf=\"datos !=null\">\n  \n      <img alt=\"Silhouette of mountains\" src=\"https://es.web.img2.acsta.net/c_162_216/pictures/19/06/22/13/38/1944794.jpg\" />\n      <ion-card-header>\n        <ion-card-title>{{datos.name}}</ion-card-title>\n        <ion-card-subtitle>{{datos.username}}</ion-card-subtitle>\n      </ion-card-header>\n    \n      <ion-card-content>\n        <p style=\"word-wrap: break-word; white-space: normal;\">Correo: {{datos.email}}</p>\n        <p style=\"word-wrap: break-word; white-space: normal;\">Contacto: {{datos.phone}}</p>\n        <p style=\"word-wrap: break-word; white-space: normal;\">Pagina web: {{datos.website}}</p>  \n      </ion-card-content>\n  \n   </div>\n  </ion-card>\n  \n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_especialistas_info_info_module_ts.js.map