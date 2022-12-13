"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_maps_maps_module_ts"],{

/***/ 2445:
/*!***************************************************!*\
  !*** ./src/app/pages/maps/maps-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapsPageRoutingModule": () => (/* binding */ MapsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _maps_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maps.page */ 4649);




const routes = [
    {
        path: '',
        component: _maps_page__WEBPACK_IMPORTED_MODULE_0__.MapsPage
    }
];
let MapsPageRoutingModule = class MapsPageRoutingModule {
};
MapsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MapsPageRoutingModule);



/***/ }),

/***/ 5177:
/*!*******************************************!*\
  !*** ./src/app/pages/maps/maps.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapsPageModule": () => (/* binding */ MapsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _maps_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maps-routing.module */ 2445);
/* harmony import */ var _maps_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maps.page */ 4649);







let MapsPageModule = class MapsPageModule {
};
MapsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _maps_routing_module__WEBPACK_IMPORTED_MODULE_0__.MapsPageRoutingModule
        ],
        declarations: [_maps_page__WEBPACK_IMPORTED_MODULE_1__.MapsPage]
    })
], MapsPageModule);



/***/ }),

/***/ 4649:
/*!*****************************************!*\
  !*** ./src/app/pages/maps/maps.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapsPage": () => (/* binding */ MapsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _maps_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maps.page.html?ngResource */ 5562);
/* harmony import */ var _maps_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maps.page.scss?ngResource */ 9947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let MapsPage = class MapsPage {
    constructor() { }
    ngOnInit() {
    }
};
MapsPage.ctorParameters = () => [];
MapsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-maps',
        template: _maps_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_maps_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MapsPage);



/***/ }),

/***/ 9947:
/*!******************************************************!*\
  !*** ./src/app/pages/maps/maps.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: #ecf4ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSiIsImZpbGUiOiJtYXBzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI2VjZjRmZjtcclxuICAgIFxyXG4gIH0iXX0= */";

/***/ }),

/***/ 5562:
/*!******************************************************!*\
  !*** ./src/app/pages/maps/maps.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>maps</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<p>pone el mapa maldito XD</p>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_maps_maps_module_ts.js.map