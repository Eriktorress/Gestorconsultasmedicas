"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_horas_horas_module_ts"],{

/***/ 1458:
/*!*****************************************************!*\
  !*** ./src/app/pages/horas/horas-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorasPageRoutingModule": () => (/* binding */ HorasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _horas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./horas.page */ 9290);




const routes = [
    {
        path: '',
        component: _horas_page__WEBPACK_IMPORTED_MODULE_0__.HorasPage
    }
];
let HorasPageRoutingModule = class HorasPageRoutingModule {
};
HorasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HorasPageRoutingModule);



/***/ }),

/***/ 2936:
/*!*********************************************!*\
  !*** ./src/app/pages/horas/horas.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorasPageModule": () => (/* binding */ HorasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _horas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./horas-routing.module */ 1458);
/* harmony import */ var _horas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./horas.page */ 9290);







let HorasPageModule = class HorasPageModule {
};
HorasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _horas_routing_module__WEBPACK_IMPORTED_MODULE_0__.HorasPageRoutingModule
        ],
        declarations: [_horas_page__WEBPACK_IMPORTED_MODULE_1__.HorasPage]
    })
], HorasPageModule);



/***/ }),

/***/ 9290:
/*!*******************************************!*\
  !*** ./src/app/pages/horas/horas.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorasPage": () => (/* binding */ HorasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _horas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./horas.page.html?ngResource */ 4659);
/* harmony import */ var _horas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./horas.page.scss?ngResource */ 6706);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let HorasPage = class HorasPage {
    constructor() { }
    ngOnInit() {
    }
};
HorasPage.ctorParameters = () => [];
HorasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-horas',
        template: _horas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_horas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HorasPage);



/***/ }),

/***/ 6706:
/*!********************************************************!*\
  !*** ./src/app/pages/horas/horas.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: #ecf4ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvcmFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0oiLCJmaWxlIjoiaG9yYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZWNmNGZmO1xyXG4gICAgXHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 4659:
/*!********************************************************!*\
  !*** ./src/app/pages/horas/horas.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>horas</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <p>truqueate XD </p>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_horas_horas_module_ts.js.map