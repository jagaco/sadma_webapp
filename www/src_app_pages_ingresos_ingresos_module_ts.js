"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_ingresos_ingresos_module_ts"],{

/***/ 2476:
/*!***********************************************************!*\
  !*** ./src/app/pages/ingresos/ingresos-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngresosPageRoutingModule": () => (/* binding */ IngresosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ingresos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ingresos.page */ 9535);




const routes = [
    {
        path: '',
        component: _ingresos_page__WEBPACK_IMPORTED_MODULE_0__.IngresosPage
    }
];
let IngresosPageRoutingModule = class IngresosPageRoutingModule {
};
IngresosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IngresosPageRoutingModule);



/***/ }),

/***/ 7473:
/*!***************************************************!*\
  !*** ./src/app/pages/ingresos/ingresos.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngresosPageModule": () => (/* binding */ IngresosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _ingresos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ingresos-routing.module */ 2476);
/* harmony import */ var _ingresos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ingresos.page */ 9535);







let IngresosPageModule = class IngresosPageModule {
};
IngresosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ingresos_routing_module__WEBPACK_IMPORTED_MODULE_0__.IngresosPageRoutingModule
        ],
        declarations: [_ingresos_page__WEBPACK_IMPORTED_MODULE_1__.IngresosPage]
    })
], IngresosPageModule);



/***/ }),

/***/ 9535:
/*!*************************************************!*\
  !*** ./src/app/pages/ingresos/ingresos.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngresosPage": () => (/* binding */ IngresosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_jaime_Develop_Sadma_webapp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_ingresos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./ingresos.page.html */ 3598);
/* harmony import */ var _ingresos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ingresos.page.scss */ 5861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let IngresosPage = class IngresosPage {
    constructor() { }
    ngOnInit() {
    }
};
IngresosPage.ctorParameters = () => [];
IngresosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-ingresos',
        template: _home_jaime_Develop_Sadma_webapp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_ingresos_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_ingresos_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], IngresosPage);



/***/ }),

/***/ 3598:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/ingresos/ingresos.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Ingresos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ 5861:
/*!***************************************************!*\
  !*** ./src/app/pages/ingresos/ingresos.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmdyZXNvcy5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ingresos_ingresos_module_ts.js.map