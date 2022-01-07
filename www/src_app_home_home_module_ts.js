"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 3949:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 7464);




//import { IntroGuard } from './../guards/intro.guard';
//import { AutoLoginGuard } from './../guards/auto-login.guard';
const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    },
    {
        path: '/login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_storage_dist_esm_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../pages/login/login.module */ 2371)).then(m => m.LoginPageModule),
        //canLoad: [IntroGuard, AutoLoginGuard] // Check if we should show the introduction or forward to inside
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 8245:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 7464);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 3949);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 7464:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_jaime_Develop_Sadma_webapp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.page.html */ 2056);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 968);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);





let HomePage = class HomePage {
    constructor(router) {
        this.router = router;
        this.mainlinks = [
            { title: 'Inicio', url: '/home/Inbox', icon: 'mail' },
            { title: 'Outbox', url: '/home/Outbox', icon: 'paper-plane' },
            { title: 'Favorites', url: '/home/Favorites', icon: 'heart' },
            { title: 'Archived', url: '/home/Archived', icon: 'archive' },
            { title: 'Trash', url: '/home/Trash', icon: 'trash' },
            { title: 'Spam', url: '/home/Spam', icon: 'warning' },
        ];
        this.appPages = [
            { title: 'Inicio', url: '/home/Inbox', icon: 'mail' },
            { title: 'Outbox', url: '/home/Outbox', icon: 'paper-plane' },
            { title: 'Favorites', url: '/home/Favorites', icon: 'heart' },
            { title: 'Archived', url: '/home/Archived', icon: 'archive' },
            { title: 'Trash', url: '/home/Trash', icon: 'trash' },
            { title: 'Spam', url: '/home/Spam', icon: 'warning' },
        ];
        this.headerLinksStart = [
            { title: 'Inicio', url: '/home/Inbox', icon: 'mail' },
            { title: 'Conocenos', url: '/home/Outbox', icon: 'paper-plane' },
            { title: 'Que hacer en caso de ... ?', url: '/home/Favorites', icon: 'heart' }
        ];
        this.footersLinksStart = [
            { title: 'contacto', url: '/home/Inbox', icon: 'mail' },
            { title: 'Aviso de privasidad', url: '/home/Outbox', icon: 'paper-plane' },
            { title: 'términos y condiciones', url: '/home/Favorites', icon: 'heart' }
        ];
        this.footersLinksEnd = [
            { title: '3313310077', url: '/home/Inbox', icon: 'logo-whatsapp' },
            { title: 'SADMA ONLINE', url: '/home/Outbox', icon: 'logo-facebook' },
            { title: 'Instagram', url: '/home/Favorites', icon: 'logo-instagram' },
            { title: 'Mapa de sitio', url: '/home/Outbox', icon: 'map' }
        ];
        this.labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
    }
    login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.router.navigateByUrl('/login', { replaceUrl: true });
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _home_jaime_Develop_Sadma_webapp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 2056:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home/home.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" contentId=\"main-content\">\n  <ion-toolbar  color=\"dark\" >\n    \n    <ion-row class=\"ion-aling-items-center\">\n      <!-- start logo -->\n      <ion-col style=\"min-width: 200px\" >\n        <img width=\"200\" height=\"50\" alt=\"\" data-mu-svgfallback=\"https://www.sadma.com.mx/images/logoc_poster_.png?crc=514355760\" src=\"https://www.sadma.com.mx/images/logoc.svg?crc=3862369955\" >          \n      </ion-col>\n     \n      <!-- main pages links Left Side -->\n      <ion-col size=\"7\">\n        <div class=\"navbar\" class=\"ion-text-left\">\n          <ion-button *ngFor=\"let p of headerLinksStart; let i = index\" color=\"light\" fill=\"clear\" routerLink=\"{{p.url}}\" routerDirection=\"root\" routerLinkActive=\"active-link\" class=\"link\">\n            {{ p.title }}\n          </ion-button>\n        </div>\n      </ion-col>\n\n      <!-- main pages links Right Side -->\n      <ion-col size=\"2\">\n        <div class=\"navbar\" class=\"ion-text-right\" *ngIf=\"!isAuthenticated\" >\n          <ion-button (click)=\"login()\" color=\"light\" fill=\"clear\" routerLinkActive=\"active-link\" class=\"link\">\n            <ion-icon name=\"person-circle\"></ion-icon>\n            Iniciar Session\n          </ion-button>\n        </div>\n        <div class=\"navbar\" class=\"ion-text-right\" *ngIf=\"isAuthenticated\" >\n          <ion-button (click)=\"logout()\" color=\"light\" fill=\"clear\" routerLinkActive=\"active-link\" class=\"link\">\n            <ion-icon name=\"person-circle\"></ion-icon>\n            Cerrar Session\n          </ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" contentId=\"main-content\">\n\n\n</ion-content>\n\n<ion-footer contentId=\"main-content\">\n  <ion-toolbar color=\"dark\" >\n      <ion-row  class=\"ion-aling-items-center\" >\n        \n        <!-- footer Left  -->\n        <ion-col size=\"6\" >\n          <div class=\"navbar\" class=\"ion-text-left\">\n              <ion-button *ngFor=\"let p of footersLinksStart; let i = index\" color=\"light\" fill=\"clear\"  href=\"{{p.url}}\">\n                {{ p.title }}\n              </ion-button>\n          </div>\n        </ion-col>\n        \n        \n        <!-- footer right  -->\n        <ion-col size=\"6\" >\n          <div class=\"navbar\" class=\"ion-text-right\">\n            <ion-button *ngFor=\"let p of footersLinksEnd; let i = index\" color=\"light\" fill=\"clear\" routerLink=\"{{p.url}}\" routerDirection=\"root\" routerLinkActive=\"active-link\" class=\"link\">\n              <ion-icon name=\"{{p.icon}}\"></ion-icon>\n              {{ p.title }}\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n  </ion-toolbar>\n</ion-footer>\n\n<ion-router-outlet id=\"main-content\"></ion-router-outlet>");

/***/ }),

/***/ 968:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map