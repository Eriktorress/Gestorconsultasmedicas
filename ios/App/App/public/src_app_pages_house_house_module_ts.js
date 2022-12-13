"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_house_house_module_ts"],{

/***/ 9167:
/*!*****************************************************!*\
  !*** ./src/app/pages/house/house-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HousePageRoutingModule": () => (/* binding */ HousePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _house_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./house.page */ 4542);




const routes = [
    {
        path: '',
        component: _house_page__WEBPACK_IMPORTED_MODULE_0__.HousePage
    }
];
let HousePageRoutingModule = class HousePageRoutingModule {
};
HousePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HousePageRoutingModule);



/***/ }),

/***/ 7179:
/*!*********************************************!*\
  !*** ./src/app/pages/house/house.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HousePageModule": () => (/* binding */ HousePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _house_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./house-routing.module */ 9167);
/* harmony import */ var _house_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./house.page */ 4542);







let HousePageModule = class HousePageModule {
};
HousePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _house_routing_module__WEBPACK_IMPORTED_MODULE_0__.HousePageRoutingModule
        ],
        declarations: [_house_page__WEBPACK_IMPORTED_MODULE_1__.HousePage]
    })
], HousePageModule);



/***/ }),

/***/ 4542:
/*!*******************************************!*\
  !*** ./src/app/pages/house/house.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HousePage": () => (/* binding */ HousePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _house_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./house.page.html?ngResource */ 5770);
/* harmony import */ var _house_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./house.page.scss?ngResource */ 6962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let HousePage = class HousePage {
    constructor() { }
    ngOnInit() {
    }
};
HousePage.ctorParameters = () => [];
HousePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-house',
        template: _house_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_house_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HousePage);



/***/ }),

/***/ 6962:
/*!********************************************************!*\
  !*** ./src/app/pages/house/house.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: #d9e8fc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvdXNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0oiLCJmaWxlIjoiaG91c2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZDllOGZjO1xyXG4gICAgXHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 5770:
/*!********************************************************!*\
  !*** ./src/app/pages/house/house.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>house</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_house_house_module_ts.js.map