"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_cmgs_cmgs_module_ts"],{

/***/ 9438:
/*!********************************************************!*\
  !*** ./src/app/pages/home/cmgs/cmgs-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CmgsPageRoutingModule": () => (/* binding */ CmgsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _cmgs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cmgs.page */ 1738);




const routes = [
    {
        path: '',
        component: _cmgs_page__WEBPACK_IMPORTED_MODULE_0__.CmgsPage
    }
];
let CmgsPageRoutingModule = class CmgsPageRoutingModule {
};
CmgsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CmgsPageRoutingModule);



/***/ }),

/***/ 5416:
/*!************************************************!*\
  !*** ./src/app/pages/home/cmgs/cmgs.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CmgsPageModule": () => (/* binding */ CmgsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _cmgs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cmgs-routing.module */ 9438);
/* harmony import */ var _cmgs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cmgs.page */ 1738);







let CmgsPageModule = class CmgsPageModule {
};
CmgsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cmgs_routing_module__WEBPACK_IMPORTED_MODULE_0__.CmgsPageRoutingModule
        ],
        declarations: [_cmgs_page__WEBPACK_IMPORTED_MODULE_1__.CmgsPage]
    })
], CmgsPageModule);



/***/ }),

/***/ 1738:
/*!**********************************************!*\
  !*** ./src/app/pages/home/cmgs/cmgs.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CmgsPage": () => (/* binding */ CmgsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _cmgs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cmgs.page.html?ngResource */ 7684);
/* harmony import */ var _cmgs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cmgs.page.scss?ngResource */ 4093);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let CmgsPage = class CmgsPage {
    constructor() { }
    ngOnInit() {
    }
};
CmgsPage.ctorParameters = () => [];
CmgsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-cmgs',
        template: _cmgs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cmgs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CmgsPage);



/***/ }),

/***/ 4093:
/*!***********************************************************!*\
  !*** ./src/app/pages/home/cmgs/cmgs.page.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbWdzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 7684:
/*!***********************************************************!*\
  !*** ./src/app/pages/home/cmgs/cmgs.page.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>cmgs</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_cmgs_cmgs_module_ts.js.map