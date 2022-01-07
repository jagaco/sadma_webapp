"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_inicio_inicio_module_ts"],{

/***/ 1142:
/*!*******************************************************!*\
  !*** ./src/app/pages/inicio/inicio-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioPageRoutingModule": () => (/* binding */ InicioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio.page */ 3106);




const routes = [
    {
        path: '',
        redirectTo: 'Ingresos',
        pathMatch: 'full'
    },
    {
        path: '',
        component: _inicio_page__WEBPACK_IMPORTED_MODULE_0__.InicioPage,
        children: [
            {
                path: 'Ingresos',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_ingresos_ingresos_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./../../pages/ingresos/ingresos.module */ 7473)).then(m => m.IngresosPageModule)
            }
        ]
    }
];
let InicioPageRoutingModule = class InicioPageRoutingModule {
};
InicioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InicioPageRoutingModule);



/***/ }),

/***/ 1963:
/*!***********************************************!*\
  !*** ./src/app/pages/inicio/inicio.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioPageModule": () => (/* binding */ InicioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio-routing.module */ 1142);
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio.page */ 3106);







let InicioPageModule = class InicioPageModule {
};
InicioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _inicio_routing_module__WEBPACK_IMPORTED_MODULE_0__.InicioPageRoutingModule
        ],
        declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_1__.InicioPage]
    })
], InicioPageModule);



/***/ }),

/***/ 3106:
/*!*********************************************!*\
  !*** ./src/app/pages/inicio/inicio.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioPage": () => (/* binding */ InicioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_jaime_Develop_Sadma_webapp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_inicio_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./inicio.page.html */ 5648);
/* harmony import */ var _inicio_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio.page.scss */ 2174);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/authentication.service */ 9270);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);







let InicioPage = class InicioPage {
    constructor(activatedRoute, authService, router, platform) {
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.router = router;
        this.platform = platform;
        this.authenticated = false;
        this.mainlinks = [
            { title: 'Inicio', url: '/inicio/Inbox', icon: 'mail' },
            { title: 'Registro', url: '/inicio/Registro', icon: 'receipt' },
            { title: 'Favorites', url: '/home/Favorites', icon: 'heart' },
            { title: 'Archived', url: '/home/Archived', icon: 'archive' },
            { title: 'Trash', url: '/home/Trash', icon: 'trash' },
            { title: 'Spam', url: '/home/Spam', icon: 'warning' },
        ];
        //side panel
        this.appPages = [
            { title: 'Inicio', url: '/inicio/Inicio', icon: 'home' },
            { title: 'Registro', url: '/inicio/Registro', icon: 'receipt' },
            { title: 'Ingresos', url: '/inicio/Ingresos', icon: 'car' },
            { title: 'Noticias', url: '/inicio/Noticias', icon: 'mail' },
            { title: 'Beneficios', url: '/inicio/Beneficios', icon: 'wallet' },
            { title: 'Servicios', url: '/inicio/servicios', icon: 'construct' }
        ];
        this.headerLinksStart = [
            { title: 'Inicio', url: '/inicio/Inbox', icon: 'mail' },
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
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
        });
    }
    ngOnInit() {
        this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authService.logout();
            this.router.navigateByUrl('/', { replaceUrl: true });
        });
    }
    login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.router.navigateByUrl('login', { replaceUrl: true });
        });
    }
};
InicioPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform }
];
InicioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-inicio',
        template: _home_jaime_Develop_Sadma_webapp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_inicio_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_inicio_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], InicioPage);



/***/ }),

/***/ 5648:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/inicio/inicio.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- User Menu tool style=\"max-width: 300px\" -->\n\n<ion-header [translucent]=\"true\" contentId=\"main-content\">\n  <ion-toolbar  color=\"dark\" >\n    \n    <ion-row class=\"ion-aling-items-center\">\n      <!-- start logo -->\n      <ion-col style=\"min-width: 200px\" >\n        <img width=\"200\" height=\"50\" alt=\"\" data-mu-svgfallback=\"https://www.sadma.com.mx/images/logoc_poster_.png?crc=514355760\" src=\"https://www.sadma.com.mx/images/logoc.svg?crc=3862369955\" >          \n      </ion-col>\n     \n      <!-- main pages links Left Side -->\n      <ion-col size=\"7\">\n        <div class=\"navbar\" class=\"ion-text-left\">\n          <ion-button *ngFor=\"let p of headerLinksStart; let i = index\" color=\"light\" fill=\"clear\" routerLink=\"{{p.url}}\" routerDirection=\"root\" routerLinkActive=\"active-link\" class=\"link\">\n            {{ p.title }}\n          </ion-button>\n        </div>\n      </ion-col>\n\n      <!-- main pages links Right Side -->\n      <ion-col size=\"2\">\n        <div class=\"navbar\" class=\"ion-text-right\"  >\n          <ion-button (click)=\"logout()\" color=\"light\" fill=\"clear\" routerLinkActive=\"active-link\" class=\"link\">\n            <ion-icon name=\"person-circle\"></ion-icon>\n            Cerrar Session\n          </ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-footer contentId=\"main-content\">\n  <ion-toolbar color=\"dark\" >\n      <ion-row  class=\"ion-aling-items-center\" >\n        \n        <!-- footer Left  -->\n        <ion-col size=\"6\" >\n          <div class=\"navbar\" class=\"ion-text-left\">\n              <ion-button *ngFor=\"let p of footersLinksStart; let i = index\" color=\"light\" fill=\"clear\"  href=\"{{p.url}}\">\n                {{ p.title }}\n              </ion-button>\n          </div>\n        </ion-col>\n        \n        \n        <!-- footer right  -->\n        <ion-col size=\"6\" >\n          <div class=\"navbar\" class=\"ion-text-right\">\n            <ion-button *ngFor=\"let p of footersLinksEnd; let i = index\" color=\"light\" fill=\"clear\" routerLink=\"{{p.url}}\" routerDirection=\"root\" routerLinkActive=\"active-link\" class=\"link\">\n              <ion-icon name=\"{{p.icon}}\"></ion-icon>\n              {{ p.title }}\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n  </ion-toolbar>\n</ion-footer>\n\n\n<ion-split-pane contentId=\"main-content\"  >\n   \n  <ion-menu auto-hide=\"false\" side=\"start\" contentId=\"main-content\" type=\"overlay\"  style=\"max-width: 300px; top: 45px; \" color='dark' >\n    <ion-content >\n      <ion-list id=\"inbox-list\" >\n        <ion-list-header>{{ folder }}</ion-list-header>\n        <ion-menu-toggle auto-hide=\"false\"  *ngFor=\"let p of appPages; let i = index\">\n          <ion-item  routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" routerLinkActive=\"selected\">\n            <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n            <ion-label>{{ p.title }}</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n\n      <ion-list id=\"labels-list\" >\n        <ion-list-header>Marcadores</ion-list-header>\n          <ion-item *ngFor=\"let label of labels\" lines=\"none\">\n          <ion-icon  slot=\"start\" ios=\"bookmark-outline\" md=\"bookmark-sharp\"></ion-icon>\n          <ion-label  >{{ label }}</ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  \n  <ion-router-outlet id=\"main-content\"></ion-router-outlet>    \n  \n</ion-split-pane>\n\n\n  \n");

/***/ }),

/***/ 2174:
/*!***********************************************!*\
  !*** ./src/app/pages/inicio/inicio.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmljaW8ucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_inicio_inicio_module_ts.js.map