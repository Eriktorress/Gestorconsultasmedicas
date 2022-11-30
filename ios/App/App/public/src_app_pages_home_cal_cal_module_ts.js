"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_cal_cal_module_ts"],{

/***/ 2231:
/*!******************************************************!*\
  !*** ./src/app/pages/home/cal/cal-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalPageRoutingModule": () => (/* binding */ CalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _cal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cal.page */ 4540);




const routes = [
    {
        path: '',
        component: _cal_page__WEBPACK_IMPORTED_MODULE_0__.CalPage
    }
];
let CalPageRoutingModule = class CalPageRoutingModule {
};
CalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CalPageRoutingModule);



/***/ }),

/***/ 7260:
/*!**********************************************!*\
  !*** ./src/app/pages/home/cal/cal.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalPageModule": () => (/* binding */ CalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _cal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cal-routing.module */ 2231);
/* harmony import */ var _cal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cal.page */ 4540);







let CalPageModule = class CalPageModule {
};
CalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cal_routing_module__WEBPACK_IMPORTED_MODULE_0__.CalPageRoutingModule
        ],
        declarations: [_cal_page__WEBPACK_IMPORTED_MODULE_1__.CalPage]
    })
], CalPageModule);



/***/ }),

/***/ 4540:
/*!********************************************!*\
  !*** ./src/app/pages/home/cal/cal.page.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalPage": () => (/* binding */ CalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _cal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cal.page.html?ngResource */ 61);
/* harmony import */ var _cal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cal.page.scss?ngResource */ 3169);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let CalPage = class CalPage {
    constructor() { }
    ngOnInit() {
    }
};
CalPage.ctorParameters = () => [];
CalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-cal',
        template: _cal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CalPage);



/***/ }),

/***/ 3169:
/*!*********************************************************!*\
  !*** ./src/app/pages/home/cal/cal.page.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWwucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 61:
/*!*********************************************************!*\
  !*** ./src/app/pages/home/cal/cal.page.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>cal</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_cal_cal_module_ts.js.map