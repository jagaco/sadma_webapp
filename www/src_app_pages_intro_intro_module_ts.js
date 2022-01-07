"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_intro_intro_module_ts"],{

/***/ 151:
/*!***************************************!*\
  !*** ./src/app/guards/intro.guard.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INTRO_KEY": () => (/* binding */ INTRO_KEY),
/* harmony export */   "IntroGuard": () => (/* binding */ IntroGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/storage */ 872);




const INTRO_KEY = 'intro_seen';
let IntroGuard = class IntroGuard {
    constructor(router) {
        this.router = router;
        //@LocalStorage() introSeenVal: Object;
        this.value = null;
    }
    canLoad() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const hasSeenIntro = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.get({ key: INTRO_KEY });
            //const hasSeenIntro = await Storage.get({key: INTRO_KEY})
            if (hasSeenIntro.value === 'true') {
                console.log("has seen", hasSeenIntro.value);
                return true;
            }
            else {
                console.log("has not seen", hasSeenIntro.value);
                this.router.navigateByUrl('/intro', { replaceUrl: true });
                return true;
            }
        });
    }
};
IntroGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
IntroGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], IntroGuard);



/***/ }),

/***/ 7134:
/*!*****************************************************!*\
  !*** ./src/app/pages/intro/intro-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroPageRoutingModule": () => (/* binding */ IntroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intro.page */ 4612);




const routes = [
    {
        path: '',
        component: _intro_page__WEBPACK_IMPORTED_MODULE_0__.IntroPage
    }
];
let IntroPageRoutingModule = class IntroPageRoutingModule {
};
IntroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IntroPageRoutingModule);



/***/ }),

/***/ 2535:
/*!*********************************************!*\
  !*** ./src/app/pages/intro/intro.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroPageModule": () => (/* binding */ IntroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _intro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intro-routing.module */ 7134);
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intro.page */ 4612);







let IntroPageModule = class IntroPageModule {
};
IntroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _intro_routing_module__WEBPACK_IMPORTED_MODULE_0__.IntroPageRoutingModule
        ],
        declarations: [_intro_page__WEBPACK_IMPORTED_MODULE_1__.IntroPage]
    })
], IntroPageModule);



/***/ }),

/***/ 4612:
/*!*******************************************!*\
  !*** ./src/app/pages/intro/intro.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroPage": () => (/* binding */ IntroPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_jaime_Develop_Sadma_webapp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_intro_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./intro.page.html */ 2411);
/* harmony import */ var _intro_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intro.page.scss */ 5624);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var src_app_guards_intro_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/guards/intro.guard */ 151);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/storage */ 872);







//import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';

let IntroPage = class IntroPage {
    constructor(router) {
        this.router = router;
        this.value = null;
    }
    ngOnInit() {
    }
    next() {
        this.slides.slideNext();
    }
    start() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.set({ key: src_app_guards_intro_guard__WEBPACK_IMPORTED_MODULE_2__.INTRO_KEY, value: 'true' });
            this.router.navigateByUrl('/login', { replaceUrl: true });
        });
    }
    set(expired = 1, in_value) {
        //this.local.set(this.KEY, in_value, expired, 'y');
    }
    remove() {
        //this.local.remove(this.KEY);
    }
    get() {
        //this.value = this.local.get(this.KEY);
    }
};
IntroPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
IntroPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSlides,] }]
};
IntroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-intro',
        template: _home_jaime_Develop_Sadma_webapp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_intro_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_intro_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], IntroPage);



/***/ }),

/***/ 2411:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/intro/intro.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-slides pager=\"true\">\n    \n  <!-- Slide 1 -->\n  <ion-slide>\n    <ion-text color=\"light\">\n      <img src=\"https://www.sadma.com.mx/images/car-2682233.jpg\">\n      <h1>Bienvenida!</h1>\n      <p>Con SADMA manten control de tu dinero ...</p>\n      <ion-button (click)=\"next()\" fill=\"outline\" color=\"light\">Next</ion-button>\n    </ion-text>\n  </ion-slide>\n\n    <!-- Slide 2 -->\n    <ion-slide>\n      <ion-text color=\"light\">\n        <img src=\"https://www.sadma.com.mx/images/cleaning-1837330.jpg\">\n        <h1>Manual de usuario!</h1>\n        <p>Con SADMA manten control de tu dinero ...</p>\n        <ion-button (click)=\"next()\" fill=\"outline\" color=\"light\">Next</ion-button>\n      </ion-text>\n    </ion-slide>\n\n    <!-- Slide 3 -->\n    <ion-slide>\n      <ion-text color=\"light\">\n        <img src=\"https://www.sadma.com.mx/images/tabla-u108246-fr.png\">\n        <h1>esto es SADMA</h1>\n        <p>... AQUI SE MOSTRARAN SCREEN SHOTS CON AYUDA.</p>\n        <ion-button (click)=\"start()\" fill=\"outline\" color=\"light\">Start</ion-button>\n      </ion-text>\n    </ion-slide>\n\n  </ion-slides>\n  \n  </ion-content>\n");

/***/ }),

/***/ 5624:
/*!*********************************************!*\
  !*** ./src/app/pages/intro/intro.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: #0081ca;\n}\n\nion-slides {\n  height: 100%;\n  --bullet-background-active: #fff;\n  --bullet-background: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkFBQTtBQUVKIiwiZmlsZSI6ImludHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDgxY2E7XG59XG5pb24tc2xpZGVzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6ICNmZmY7XG4gICAgLS1idWxsZXQtYmFja2dyb3VuZDogIzAwMDtcbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_intro_intro_module_ts.js.map