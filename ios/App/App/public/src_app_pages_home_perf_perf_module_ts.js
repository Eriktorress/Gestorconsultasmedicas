"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_perf_perf_module_ts"],{

/***/ 5085:
/*!********************************************************!*\
  !*** ./src/app/pages/home/perf/perf-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfPageRoutingModule": () => (/* binding */ PerfPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _perf_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perf.page */ 9039);




const routes = [
    {
        path: '',
        component: _perf_page__WEBPACK_IMPORTED_MODULE_0__.PerfPage
    }
];
let PerfPageRoutingModule = class PerfPageRoutingModule {
};
PerfPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PerfPageRoutingModule);



/***/ }),

/***/ 9167:
/*!************************************************!*\
  !*** ./src/app/pages/home/perf/perf.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfPageModule": () => (/* binding */ PerfPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _perf_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perf-routing.module */ 5085);
/* harmony import */ var _perf_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perf.page */ 9039);







let PerfPageModule = class PerfPageModule {
};
PerfPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _perf_routing_module__WEBPACK_IMPORTED_MODULE_0__.PerfPageRoutingModule
        ],
        declarations: [_perf_page__WEBPACK_IMPORTED_MODULE_1__.PerfPage]
    })
], PerfPageModule);



/***/ }),

/***/ 9039:
/*!**********************************************!*\
  !*** ./src/app/pages/home/perf/perf.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfPage": () => (/* binding */ PerfPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _perf_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perf.page.html?ngResource */ 7256);
/* harmony import */ var _perf_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perf.page.scss?ngResource */ 6051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let PerfPage = class PerfPage {
    constructor() { }
    ngOnInit() {
    }
};
PerfPage.ctorParameters = () => [];
PerfPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-perf',
        template: _perf_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_perf_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PerfPage);



/***/ }),

/***/ 6051:
/*!***********************************************************!*\
  !*** ./src/app/pages/home/perf/perf.page.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJmLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 7256:
/*!***********************************************************!*\
  !*** ./src/app/pages/home/perf/perf.page.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>perf</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_perf_perf_module_ts.js.map