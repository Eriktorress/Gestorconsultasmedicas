"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_tab_tab_module_ts"],{

/***/ 9069:
/*!******************************************************!*\
  !*** ./src/app/pages/home/tab/tab-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabPageRoutingModule": () => (/* binding */ TabPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab.page */ 5235);




const routes = [
    {
        path: '',
        component: _tab_page__WEBPACK_IMPORTED_MODULE_0__.TabPage
    }
];
let TabPageRoutingModule = class TabPageRoutingModule {
};
TabPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TabPageRoutingModule);



/***/ }),

/***/ 2896:
/*!**********************************************!*\
  !*** ./src/app/pages/home/tab/tab.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabPageModule": () => (/* binding */ TabPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tab_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-routing.module */ 9069);
/* harmony import */ var _tab_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab.page */ 5235);







let TabPageModule = class TabPageModule {
};
TabPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tab_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabPageRoutingModule
        ],
        declarations: [_tab_page__WEBPACK_IMPORTED_MODULE_1__.TabPage]
    })
], TabPageModule);



/***/ }),

/***/ 5235:
/*!********************************************!*\
  !*** ./src/app/pages/home/tab/tab.page.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabPage": () => (/* binding */ TabPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab.page.html?ngResource */ 8178);
/* harmony import */ var _tab_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab.page.scss?ngResource */ 9618);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let TabPage = class TabPage {
    constructor() { }
    ngOnInit() {
    }
};
TabPage.ctorParameters = () => [];
TabPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tab',
        template: _tab_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabPage);



/***/ }),

/***/ 9618:
/*!*********************************************************!*\
  !*** ./src/app/pages/home/tab/tab.page.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 8178:
/*!*********************************************************!*\
  !*** ./src/app/pages/home/tab/tab.page.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = " <!--INICIO TABS -->\r\n <ion-tabs>\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <!-- PERFIL-->\r\n    <ion-tab-button tab=\"perf\">\r\n      <ion-icon name=\"person-circle\"></ion-icon>\r\n      <ion-label>Perfil</ion-label>\r\n    </ion-tab-button>\r\n    <!-- Calendario -->\r\n    <ion-tab-button tab=\"cal\">\r\n      <ion-icon name=\"calendar\"></ion-icon>\r\n      <ion-label>Calendario</ion-label>\r\n    </ion-tab-button>\r\n  \r\n    <!-- MAPA -->\r\n    <ion-tab-button tab=\"mapa\">\r\n      <ion-icon name=\"map\"></ion-icon>\r\n      <ion-label>Mapa</ion-label>\r\n    </ion-tab-button>\r\n    \r\n    <!-- ACERCA DE -->\r\n    <ion-tab-button tab=\"cmgs\">\r\n      <ion-icon name=\"information-circle\"></ion-icon>\r\n      <ion-label>CMG</ion-label>\r\n    </ion-tab-button>\r\n    \r\n  </ion-tab-bar>\r\n</ion-tabs>\r\n<!--FIN TABS -->";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_tab_tab_module_ts.js.map