"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 6752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 8433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_autenthication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/autenthication.service */ 280);
/* harmony import */ var src_app_services_db_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/db.service */ 3773);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ 7045);









let LoginPage = class LoginPage {
    constructor(toastController, dbservice, alertcontroler, router, storage, authenticationSerive) {
        this.toastController = toastController;
        this.dbservice = dbservice;
        this.alertcontroler = alertcontroler;
        this.router = router;
        this.storage = storage;
        this.authenticationSerive = authenticationSerive;
        this.login = {
            Usuario: '',
            Password: ''
        };
        this.field = "";
        console.log('pagina Login iniciada');
    }
    ngOnInit() {
    }
    ingresar() {
        // Se valida que el usuario ingreso todos los datos
        if (this.validateModel(this.login)) {
            // Se obtiene si existe alguna data de sesión
            this.authenticationSerive.login(this.login);
        }
        else {
            this.presentToast("Porfavor, ingresa tu " + this.field);
        }
    }
    registrar() {
        this.createSesionData(this.login);
    }
    /**
     * Función que genera (registra) una nueva sesión
     * @param login
     */
    createSesionData(login) {
        if (this.validateModel(login)) { // Se valida que se ingresen todos los datos
            /**
             * Se hace una copia del login, se hace así ya que
             * el operador '=' no haceuna copia de los datos, si no
             * que crea una nueva referencia a los mismos datos.
             * Por eso se utiliza el Object.assign
             */
            let copy = Object.assign({}, login);
            copy.Active = 1; // Se agrega el valor active = 1 a la copia
            this.dbservice.createSesionData(copy) // la copia se le apsa a la función para crear la sesion
                .then((data) => {
                this.presentToast("Bienvenido"); // Se muestra el mensaje de bienvenido
                this.storage.set("USER_DATA", data); // Se setea el USER_DATA en el storage
                this.router.navigate(['home']); // Se navega hasta el home
            })
                .catch((error) => {
                this.presentToast("El usuario ya existe");
            });
        }
        else {
            this.presentToast("Falta: " + this.field);
        }
    }
    /**
     * validateModel sirve para validar que se ingrese algo en los
     * campos del html mediante su modelo
     */
    validateModel(model) {
        // Recorro todas las entradas que me entrega Object entries y obtengo su clave, valor
        for (var [key, value] of Object.entries(model)) {
            // Si un valor es "" se retornara false y se avisara de lo faltante
            if (value == "") {
                // Se asigna el campo faltante
                this.field = key;
                // Se retorna false
                return false;
            }
        }
        return true;
    }
    /**
     * Muestra un toast al usuario
     * @param message Mensaje a presentar al usuario
     * @param duration Duración el toast, este es opcional
     */
    presentToast(message, duration) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: duration ? duration : 2000
            });
            toast.present();
        });
    }
    /**
     * Función parte del ciclo de vida de un componente
     */
    ionViewWillEnter() {
        console.log('ionViewDidEnter');
        // Se valida que exista una sesión activa
        this.dbservice.sesionActive()
            .then((data) => {
            if (data != undefined) {
                this.storage.set("USER_DATA", data);
                this.router.navigate(['home']);
            }
        })
            .catch((error) => {
            console.error(error);
            this.router.navigate(['login']);
        });
    }
    formulario() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertcontroler.create({
                header: 'Creación de Usuario',
                message: '<strong>El usuario no existe, desea registrarse?</strong>',
                buttons: [
                    {
                        text: 'NO',
                        role: 'cancel'
                    }, {
                        text: 'SI',
                        handler: () => {
                            this.createSesionData(this.login);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: src_app_services_db_service__WEBPACK_IMPORTED_MODULE_3__.DbService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__.Storage },
    { type: src_app_services_autenthication_service__WEBPACK_IMPORTED_MODULE_2__.AutenthicationService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 8433:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: #ecf4ff;\n}\n\nion-avatar {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBSUE7RUFDSSxhQUFBO0FBREoiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZWNmNGZmO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuXHJcbmlvbi1hdmF0YXJ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59Il19 */";

/***/ }),

/***/ 6752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-avatar>\r\n        <img alt=\"\" src=\"/assets/images/logo.svg\" />\r\n      </ion-avatar>\r\n    </ion-buttons>\r\n\r\n    <ion-title text-center>Centro Medico Galenos</ion-title>\r\n  </ion-toolbar>\r\n\r\n  \r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n<ion-img src=\"/assets/images/login.svg\"></ion-img>\r\n\r\n<ion-item class=\"ion-margin-top\">\r\n  <ion-label position=\"floating\"> Usuario</ion-label>\r\n  <ion-input  [(ngModel)]=\"login.Usuario\"></ion-input>\r\n</ion-item>\r\n\r\n<ion-item class=\"ion-margin-top\">\r\n  <ion-label position=\"floating\"> Contraseña</ion-label>\r\n  <ion-input type=\"password\" [(ngModel)]=\"login.Password\"></ion-input>\r\n</ion-item>\r\n\r\n<ion-button (click)=\"ingresar()\" class=\"ion-margin-top\" \r\nexpand=\"block\"> Ingresar</ion-button>\r\n\r\n<ion-button (click)=\"formulario()\" class=\"ion-margin-top\" \r\nexpand=\"block\"> Nuevo usuario</ion-button>\r\n\r\n</ion-content>\r\n\r\n\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map