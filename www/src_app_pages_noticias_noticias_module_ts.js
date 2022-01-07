"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_noticias_noticias_module_ts"],{

/***/ 5025:
/*!***********************************************************!*\
  !*** ./src/app/pages/noticias/noticias-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticiasPageRoutingModule": () => (/* binding */ NoticiasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _noticias_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noticias.page */ 9866);




const routes = [
    {
        path: '',
        component: _noticias_page__WEBPACK_IMPORTED_MODULE_0__.NoticiasPage
    }
];
let NoticiasPageRoutingModule = class NoticiasPageRoutingModule {
};
NoticiasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NoticiasPageRoutingModule);



/***/ }),

/***/ 5404:
/*!***************************************************!*\
  !*** ./src/app/pages/noticias/noticias.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticiasPageModule": () => (/* binding */ NoticiasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _noticias_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noticias-routing.module */ 5025);
/* harmony import */ var _noticias_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noticias.page */ 9866);







let NoticiasPageModule = class NoticiasPageModule {
};
NoticiasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _noticias_routing_module__WEBPACK_IMPORTED_MODULE_0__.NoticiasPageRoutingModule
        ],
        declarations: [_noticias_page__WEBPACK_IMPORTED_MODULE_1__.NoticiasPage]
    })
], NoticiasPageModule);



/***/ }),

/***/ 9866:
/*!*************************************************!*\
  !*** ./src/app/pages/noticias/noticias.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticiasPage": () => (/* binding */ NoticiasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_jaime_Develop_Sadma_webapp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_noticias_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./noticias.page.html */ 5176);
/* harmony import */ var _noticias_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noticias.page.scss */ 111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let NoticiasPage = class NoticiasPage {
    constructor() { }
    ngOnInit() {
    }
};
NoticiasPage.ctorParameters = () => [];
NoticiasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-noticias',
        template: _home_jaime_Develop_Sadma_webapp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_noticias_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_noticias_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], NoticiasPage);



/***/ }),

/***/ 5176:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/noticias/noticias.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>noticias</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ 111:
/*!***************************************************!*\
  !*** ./src/app/pages/noticias/noticias.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpY2lhcy5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_noticias_noticias_module_ts.js.map