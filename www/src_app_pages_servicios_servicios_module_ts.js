"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_servicios_servicios_module_ts"],{

/***/ 3883:
/*!*************************************************************!*\
  !*** ./src/app/pages/servicios/servicios-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiciosPageRoutingModule": () => (/* binding */ ServiciosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _servicios_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./servicios.page */ 4225);




const routes = [
    {
        path: '',
        component: _servicios_page__WEBPACK_IMPORTED_MODULE_0__.ServiciosPage
    }
];
let ServiciosPageRoutingModule = class ServiciosPageRoutingModule {
};
ServiciosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ServiciosPageRoutingModule);



/***/ }),

/***/ 1791:
/*!*****************************************************!*\
  !*** ./src/app/pages/servicios/servicios.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiciosPageModule": () => (/* binding */ ServiciosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _servicios_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./servicios-routing.module */ 3883);
/* harmony import */ var _servicios_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servicios.page */ 4225);







let ServiciosPageModule = class ServiciosPageModule {
};
ServiciosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _servicios_routing_module__WEBPACK_IMPORTED_MODULE_0__.ServiciosPageRoutingModule
        ],
        declarations: [_servicios_page__WEBPACK_IMPORTED_MODULE_1__.ServiciosPage]
    })
], ServiciosPageModule);



/***/ }),

/***/ 4225:
/*!***************************************************!*\
  !*** ./src/app/pages/servicios/servicios.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiciosPage": () => (/* binding */ ServiciosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_jaime_Develop_Sadma_webapp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_servicios_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./servicios.page.html */ 273);
/* harmony import */ var _servicios_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servicios.page.scss */ 1239);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let ServiciosPage = class ServiciosPage {
    constructor() { }
    ngOnInit() {
    }
};
ServiciosPage.ctorParameters = () => [];
ServiciosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-servicios',
        template: _home_jaime_Develop_Sadma_webapp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_servicios_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_servicios_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ServiciosPage);



/***/ }),

/***/ 273:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/servicios/servicios.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>servicios</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ 1239:
/*!*****************************************************!*\
  !*** ./src/app/pages/servicios/servicios.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNpb3MucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_servicios_servicios_module_ts.js.map