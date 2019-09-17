(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/admin/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/usuarios/usuarios.component */ "./src/app/admin/dashboard/usuarios/usuarios.component.ts");
/* harmony import */ var _dashboard_analisis_analisis_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/analisis/analisis.component */ "./src/app/admin/dashboard/analisis/analisis.component.ts");
/* harmony import */ var _dashboard_administracion_administracion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/administracion/administracion.component */ "./src/app/admin/dashboard/administracion/administracion.component.ts");
/* harmony import */ var _dashboard_analisis_tablas_tablas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/analisis/tablas/tablas.component */ "./src/app/admin/dashboard/analisis/tablas/tablas.component.ts");
/* harmony import */ var _dashboard_analisis_ingresar_ingresar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/analisis/ingresar/ingresar.component */ "./src/app/admin/dashboard/analisis/ingresar/ingresar.component.ts");
/* harmony import */ var _registrar_registrar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./registrar/registrar.component */ "./src/app/admin/registrar/registrar.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth.guard */ "./src/app/admin/auth.guard.ts");











var routes = [
    { path: 'admin',
        component: _admin_component__WEBPACK_IMPORTED_MODULE_1__["AdminComponent"],
        children: [
            { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
            { path: 'Login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
            { path: 'registrar', component: _registrar_registrar_component__WEBPACK_IMPORTED_MODULE_9__["RegistrarComponent"] },
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                children: [
                    { path: 'usuarios', component: _dashboard_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_4__["UsuariosComponent"] },
                    { path: 'analisis', component: _dashboard_analisis_analisis_component__WEBPACK_IMPORTED_MODULE_5__["AnalisisComponent"],
                        children: [
                            { path: '', component: _dashboard_analisis_tablas_tablas_component__WEBPACK_IMPORTED_MODULE_7__["TablasComponent"] },
                            { path: 'tablas', component: _dashboard_analisis_tablas_tablas_component__WEBPACK_IMPORTED_MODULE_7__["TablasComponent"] },
                            { path: 'ingresar', component: _dashboard_analisis_ingresar_ingresar_component__WEBPACK_IMPORTED_MODULE_8__["IngresarComponent"] },
                        ] },
                    { path: 'administracion', component: _dashboard_administracion_administracion_component__WEBPACK_IMPORTED_MODULE_6__["AdministracionComponent"] },
                ],
                canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] }
        ] }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css.shim.ngstyle.js":
/*!***********************************************************!*\
  !*** ./src/app/admin/admin.component.css.shim.ngstyle.js ***!
  \***********************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"];



/***/ }),

/***/ "./src/app/admin/admin.component.ngfactory.js":
/*!****************************************************!*\
  !*** ./src/app/admin/admin.component.ngfactory.js ***!
  \****************************************************/
/*! exports provided: RenderType_AdminComponent, View_AdminComponent_0, View_AdminComponent_Host_0, AdminComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AdminComponent", function() { return RenderType_AdminComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AdminComponent_0", function() { return View_AdminComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AdminComponent_Host_0", function() { return View_AdminComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponentNgFactory", function() { return AdminComponentNgFactory; });
/* harmony import */ var _admin_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.component.css.shim.ngstyle */ "./src/app/admin/admin.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_AdminComponent = [_admin_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AdminComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AdminComponent, data: {} });

function View_AdminComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_AdminComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-admin", [], null, null, null, View_AdminComponent_0, RenderType_AdminComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AdminComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-admin", _admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"], View_AdminComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/auth.guard.ts":
/*!*************************************!*\
  !*** ./src/app/admin/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_registrar_registrar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/registrar/registrar.service */ "./src/app/services/registrar/registrar.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(service, router) {
        this.service = service;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.service.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/admin']);
            return false;
        }
    };
    AuthGuard.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["defineInjectable"]({ factory: function AuthGuard_Factory() { return new AuthGuard(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"](_services_registrar_registrar_service__WEBPACK_IMPORTED_MODULE_1__["RegistrarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); }, token: AuthGuard, providedIn: "root" });
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/administracion/administracion.component.css.shim.ngstyle.js":
/*!*********************************************************************************************!*\
  !*** ./src/app/admin/dashboard/administracion/administracion.component.css.shim.ngstyle.js ***!
  \*********************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["h3[_ngcontent-%COMP%]{\r\n    color: gray;\r\n    opacity: 0.9;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n#fileUpload[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n    margin-top: -10px;\r\n}\r\n\r\n#filename[_ngcontent-%COMP%]{\r\n    margin-top: -7px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZGFzaGJvYXJkL2FkbWluaXN0cmFjaW9uL2FkbWluaXN0cmFjaW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9kYXNoYm9hcmQvYWRtaW5pc3RyYWNpb24vYWRtaW5pc3RyYWNpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgze1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuI2ZpbGVVcGxvYWR7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5idXR0b257XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG5cclxuI2ZpbGVuYW1le1xyXG4gICAgbWFyZ2luLXRvcDogLTdweDtcclxufVxyXG4iXX0= */"];



/***/ }),

/***/ "./src/app/admin/dashboard/administracion/administracion.component.ngfactory.js":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/dashboard/administracion/administracion.component.ngfactory.js ***!
  \**************************************************************************************/
/*! exports provided: RenderType_AdministracionComponent, View_AdministracionComponent_0, View_AdministracionComponent_Host_0, AdministracionComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AdministracionComponent", function() { return RenderType_AdministracionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AdministracionComponent_0", function() { return View_AdministracionComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AdministracionComponent_Host_0", function() { return View_AdministracionComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministracionComponentNgFactory", function() { return AdministracionComponentNgFactory; });
/* harmony import */ var _administracion_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./administracion.component.css.shim.ngstyle */ "./src/app/admin/dashboard/administracion/administracion.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_file_upload_file_upload_file_select_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-file-upload/file-upload/file-select.directive */ "./node_modules/ng2-file-upload/file-upload/file-select.directive.js");
/* harmony import */ var ng2_file_upload_file_upload_file_select_directive__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_file_upload_file_select_directive__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _administracion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./administracion.component */ "./src/app/admin/dashboard/administracion/administracion.component.ts");
/* harmony import */ var _services_images_images_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/images/images.service */ "./src/app/services/images/images.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_AdministracionComponent = [_administracion_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AdministracionComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AdministracionComponent, data: {} });

function View_AdministracionComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "div", [["class", "row updloadList mt-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "col-sm-4"], ["id", "filename"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "div", [["class", "col-sm-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "div", [["class", "progress"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "div", [["class", "progress-bar bg-success"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngStyle: [0, "ngStyle"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](7, { "width": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 4, "div", [["class", "col-sm-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "button", [["class", "btn btn-primary"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.$implicit.upload() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Upload"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "button", [["class", "btn btn-danger"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.$implicit.remove() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Cancel"]))], function (_ck, _v) { var currVal_1 = _ck(_v, 7, 0, (_v.context.$implicit.progress + "%")); _ck(_v, 6, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.file.name; _ck(_v, 2, 0, currVal_0); }); }
function View_AdministracionComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "button", [["class", "btn btn-primary mt-2 mb-3"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.uploader.uploadAll() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Upload all"]))], null, null); }
function View_AdministracionComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 7, "div", [["class", "card mb-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["class", "card-header info-color-dark text-white d-flex justify-content-center align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "img", [["alt", ""], ["class", "card-img-top"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "div", [["class", "card-footer info-color-dark text-center text-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "button", [["class", "btn btn-danger btn-block"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.deleteImage(_v.context.$implicit.id) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "i", [["class", "fas fa-trash-alt"]], null, null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.image; _ck(_v, 3, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "assets\\imagenes\\", _v.context.$implicit.image, ""); _ck(_v, 5, 0, currVal_1); }); }
function View_AdministracionComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "div", [["class", "row updloadList mt-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "col-sm-4"], ["id", "filename"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "div", [["class", "col-sm-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "div", [["class", "progress"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "div", [["class", "progress-bar bg-success"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngStyle: [0, "ngStyle"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](7, { "width": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 4, "div", [["class", "col-sm-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "button", [["class", "btn btn-primary"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.$implicit.upload() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Upload"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "button", [["class", "btn btn-danger"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.$implicit.remove() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Cancel"]))], function (_ck, _v) { var currVal_1 = _ck(_v, 7, 0, (_v.context.$implicit.progress + "%")); _ck(_v, 6, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.file.name; _ck(_v, 2, 0, currVal_0); }); }
function View_AdministracionComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "button", [["class", "btn btn-primary mt-2 mb-3"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.uploaderb.uploadAll() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Upload all"]))], null, null); }
function View_AdministracionComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [["class", "card mb-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["class", "card-header info-color-dark text-white d-flex justify-content-center align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "img", [["alt", ""], ["class", "card-img-top"]], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.image; _ck(_v, 3, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "assets\\imagenes\\", _v.context.$implicit.image, ""); _ck(_v, 5, 0, currVal_1); }); }
function View_AdministracionComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "div", [["class", "row updloadList mt-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "col-sm-4"], ["id", "filename"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "div", [["class", "col-sm-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "div", [["class", "progress"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "div", [["class", "progress-bar bg-success"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngStyle: [0, "ngStyle"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](7, { "width": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 4, "div", [["class", "col-sm-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "button", [["class", "btn btn-primary"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.$implicit.upload() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Upload"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "button", [["class", "btn btn-danger"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_v.context.$implicit.remove() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Cancel"]))], function (_ck, _v) { var currVal_1 = _ck(_v, 7, 0, (_v.context.$implicit.progress + "%")); _ck(_v, 6, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.file.name; _ck(_v, 2, 0, currVal_0); }); }
function View_AdministracionComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "button", [["class", "btn btn-primary mt-2 mb-3"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.uploaderc.uploadAll() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Upload all"]))], null, null); }
function View_AdministracionComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [["class", "card mb-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["class", "card-header info-color-dark text-white d-flex justify-content-center align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "img", [["alt", ""], ["class", "card-img-top"]], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.image; _ck(_v, 3, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "assets\\imagenes\\", _v.context.$implicit.image, ""); _ck(_v, 5, 0, currVal_1); }); }
function View_AdministracionComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 59, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CAROUSEL"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 11, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 10, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 9, "div", [["class", "row card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 8, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "div", [["id", "fileSelector"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "input", [["id", "fileUpload"], ["multiple", ""], ["name", "fileUpload"], ["ng2FileSelect", ""], ["type", "file"]], null, [[null, "change"]], function (_v, en, $event) { var ad = true; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).onChange() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, ng2_file_upload_file_upload_file_select_directive__WEBPACK_IMPORTED_MODULE_3__["FileSelectDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { uploader: [0, "uploader"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AdministracionComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AdministracionComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 2, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AdministracionComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["BANNER"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 11, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 10, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 9, "div", [["class", "row card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 8, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 2, "div", [["id", "fileSelector"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 1, "input", [["id", "fileUpload"], ["multiple", ""], ["name", "fileUpload"], ["ng2FileSelect", ""], ["type", "file"]], null, [[null, "change"]], function (_v, en, $event) { var ad = true; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).onChange() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, ng2_file_upload_file_upload_file_select_directive__WEBPACK_IMPORTED_MODULE_3__["FileSelectDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { uploader: [0, "uploader"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AdministracionComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AdministracionComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 2, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AdministracionComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CONOCENOS"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 11, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 10, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 9, "div", [["class", "row card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 8, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 2, "div", [["id", "fileSelector"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 1, "input", [["id", "fileUpload"], ["multiple", ""], ["name", "fileUpload"], ["ng2FileSelect", ""], ["type", "file"]], null, [[null, "change"]], function (_v, en, $event) { var ad = true; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).onChange() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 16384, null, 0, ng2_file_upload_file_upload_file_select_directive__WEBPACK_IMPORTED_MODULE_3__["FileSelectDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { uploader: [0, "uploader"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AdministracionComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AdministracionComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 2, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AdministracionComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.uploader; _ck(_v, 10, 0, currVal_0); var currVal_1 = _co.uploader.queue; _ck(_v, 13, 0, currVal_1); var currVal_2 = (((_co.uploader == null) ? null : ((_co.uploader.queue == null) ? null : _co.uploader.queue.length)) > 0); _ck(_v, 15, 0, currVal_2); var currVal_3 = _co.imagenes; _ck(_v, 19, 0, currVal_3); var currVal_4 = _co.uploaderb; _ck(_v, 30, 0, currVal_4); var currVal_5 = _co.uploaderb.queue; _ck(_v, 33, 0, currVal_5); var currVal_6 = (((_co.uploaderb == null) ? null : ((_co.uploaderb.queue == null) ? null : _co.uploaderb.queue.length)) > 0); _ck(_v, 35, 0, currVal_6); var currVal_7 = _co.imagenesb; _ck(_v, 39, 0, currVal_7); var currVal_8 = _co.uploaderc; _ck(_v, 50, 0, currVal_8); var currVal_9 = _co.uploaderc.queue; _ck(_v, 53, 0, currVal_9); var currVal_10 = (((_co.uploaderc == null) ? null : ((_co.uploaderc.queue == null) ? null : _co.uploaderc.queue.length)) > 0); _ck(_v, 55, 0, currVal_10); var currVal_11 = _co.imagenesc; _ck(_v, 59, 0, currVal_11); }, null); }
function View_AdministracionComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-administracion", [], null, null, null, View_AdministracionComponent_0, RenderType_AdministracionComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _administracion_component__WEBPACK_IMPORTED_MODULE_4__["AdministracionComponent"], [_services_images_images_service__WEBPACK_IMPORTED_MODULE_5__["ImagesService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AdministracionComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-administracion", _administracion_component__WEBPACK_IMPORTED_MODULE_4__["AdministracionComponent"], View_AdministracionComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/admin/dashboard/administracion/administracion.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/admin/dashboard/administracion/administracion.component.ts ***!
  \****************************************************************************/
/*! exports provided: AdministracionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministracionComponent", function() { return AdministracionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_images_images_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/images/images.service */ "./src/app/services/images/images.service.ts");



var url = 'http://localhost:5000/api/imagenes/upload';
var urlb = 'http://localhost:5000/api/imagenes/banner';
var urlc = 'http://localhost:5000/api/imagenes/conocenos';
var AdministracionComponent = /** @class */ (function () {
    function AdministracionComponent(service) {
        var _this = this;
        this.service = service;
        this.imagenes = [];
        this.imagenesb = [];
        this.imagenesc = [];
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({ url: url });
        this.uploaderb = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({ url: urlb });
        this.uploaderc = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({ url: urlc });
        this.attachmentList = [];
        this.attachmentListb = [];
        this.attachmentListc = [];
        this.uploader.onCompleteItem = function (item, response, status, header) {
            _this.attachmentList.push(JSON.parse(response));
        };
        this.uploaderb.onCompleteItem = function (item, response, status, header) {
            _this.attachmentListb.push(JSON.parse(response));
        };
        this.uploaderc.onCompleteItem = function (item, response, status, header) {
            _this.attachmentListc.push(JSON.parse(response));
        };
    }
    AdministracionComponent.prototype.ngOnInit = function () {
        this.getImagenes();
        this.getImagenesb();
        this.getImagenesc();
    };
    AdministracionComponent.prototype.getImagenes = function () {
        var _this = this;
        this.service.getImages().subscribe(function (res) {
            _this.imagenes = res;
        }, function (err) { return console.error(err); });
    };
    AdministracionComponent.prototype.getImagenesb = function () {
        var _this = this;
        this.service.getImagesb().subscribe(function (res) {
            _this.imagenesb = res;
        }, function (err) { return console.error(err); });
    };
    AdministracionComponent.prototype.getImagenesc = function () {
        var _this = this;
        this.service.getImagesc().subscribe(function (res) {
            _this.imagenesc = res;
        }, function (err) { return console.error(err); });
    };
    AdministracionComponent.prototype.deleteImage = function (id) {
        var _this = this;
        this.service.deleteImage(id).subscribe(function (res) {
            console.log(res);
            _this.getImagenes();
        }, function (err) { return console.error(err); });
    };
    return AdministracionComponent;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/analisis/analisis.component.css.shim.ngstyle.js":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/dashboard/analisis/analisis.component.css.shim.ngstyle.js ***!
  \*********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["a[_ngcontent-%COMP%]{\r\n    color: #ffffff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZGFzaGJvYXJkL2FuYWxpc2lzL2FuYWxpc2lzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vZGFzaGJvYXJkL2FuYWxpc2lzL2FuYWxpc2lzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhe1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/admin/dashboard/analisis/analisis.component.ngfactory.js":
/*!**************************************************************************!*\
  !*** ./src/app/admin/dashboard/analisis/analisis.component.ngfactory.js ***!
  \**************************************************************************/
/*! exports provided: RenderType_AnalisisComponent, View_AnalisisComponent_0, View_AnalisisComponent_Host_0, AnalisisComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AnalisisComponent", function() { return RenderType_AnalisisComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AnalisisComponent_0", function() { return View_AnalisisComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AnalisisComponent_Host_0", function() { return View_AnalisisComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalisisComponentNgFactory", function() { return AnalisisComponentNgFactory; });
/* harmony import */ var _analisis_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analisis.component.css.shim.ngstyle */ "./src/app/admin/dashboard/analisis/analisis.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/angular-bootstrap-md/angular-bootstrap-md.ngfactory */ "./node_modules/angular-bootstrap-md/angular-bootstrap-md.ngfactory.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _analisis_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./analisis.component */ "./src/app/admin/dashboard/analisis/analisis.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_AnalisisComponent = [_analisis_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AnalisisComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AnalisisComponent, data: {} });

function View_AnalisisComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "div", [["class", "col-md-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 11, "mdb-breadcrumb", [["customClass", "primary-color white-text"]], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MdbBreadcrumbComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MdbBreadcrumbComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MdbBreadcrumbComponent"], [], { customClass: [0, "customClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 4, "mdb-breadcrumb-item", [], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MdbBreadcrumbItemComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MdbBreadcrumbItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MdbBreadcrumbItemComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 2, "a", [["routerLink", "/admin/dashboard/analisis/tablas"], ["type", "button"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Tablas"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 4, "mdb-breadcrumb-item", [], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MdbBreadcrumbItemComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MdbBreadcrumbItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MdbBreadcrumbItemComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 0, 2, "a", [["routerLink", "/admin/dashboard/analisis/ingresar"], ["type", "button"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Ingresar"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 2, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { var currVal_0 = "primary-color white-text"; _ck(_v, 2, 0, currVal_0); _ck(_v, 4, 0); var currVal_3 = "/admin/dashboard/analisis/tablas"; _ck(_v, 6, 0, currVal_3); _ck(_v, 9, 0); var currVal_6 = "/admin/dashboard/analisis/ingresar"; _ck(_v, 11, 0, currVal_6); _ck(_v, 15, 0); }, function (_ck, _v) { var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).target; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).href; _ck(_v, 5, 0, currVal_1, currVal_2); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).target; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).href; _ck(_v, 10, 0, currVal_4, currVal_5); }); }
function View_AnalisisComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-analisis", [], null, null, null, View_AnalisisComponent_0, RenderType_AnalisisComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _analisis_component__WEBPACK_IMPORTED_MODULE_6__["AnalisisComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AnalisisComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-analisis", _analisis_component__WEBPACK_IMPORTED_MODULE_6__["AnalisisComponent"], View_AnalisisComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/admin/dashboard/analisis/analisis.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/dashboard/analisis/analisis.component.ts ***!
  \****************************************************************/
/*! exports provided: AnalisisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalisisComponent", function() { return AnalisisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var AnalisisComponent = /** @class */ (function () {
    function AnalisisComponent() {
    }
    AnalisisComponent.prototype.ngOnInit = function () {
    };
    return AnalisisComponent;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/analisis/ingresar/ingresar.component.css.shim.ngstyle.js":
/*!******************************************************************************************!*\
  !*** ./src/app/admin/dashboard/analisis/ingresar/ingresar.component.css.shim.ngstyle.js ***!
  \******************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Rhc2hib2FyZC9hbmFsaXNpcy9pbmdyZXNhci9pbmdyZXNhci5jb21wb25lbnQuY3NzIn0= */"];



/***/ }),

/***/ "./src/app/admin/dashboard/analisis/ingresar/ingresar.component.ngfactory.js":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/dashboard/analisis/ingresar/ingresar.component.ngfactory.js ***!
  \***********************************************************************************/
/*! exports provided: RenderType_IngresarComponent, View_IngresarComponent_0, View_IngresarComponent_Host_0, IngresarComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_IngresarComponent", function() { return RenderType_IngresarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_IngresarComponent_0", function() { return View_IngresarComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_IngresarComponent_Host_0", function() { return View_IngresarComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresarComponentNgFactory", function() { return IngresarComponentNgFactory; });
/* harmony import */ var _ingresar_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ingresar.component.css.shim.ngstyle */ "./src/app/admin/dashboard/analisis/ingresar/ingresar.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _ingresar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ingresar.component */ "./src/app/admin/dashboard/analisis/ingresar/ingresar.component.ts");
/* harmony import */ var _services_tramites_tramites_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/tramites/tramites.service */ "./src/app/services/tramites/tramites.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_IngresarComponent = [_ingresar_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_IngresarComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_IngresarComponent, data: {} });

function View_IngresarComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 63, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 62, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 61, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "div", [["class", "card-header bg-dark text-white d-flex justify-content-center align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" INGRESAR CLAVE SCIAN "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 58, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 57, "form", [["action", ""], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_bh"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 16, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 7, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 6, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 5, "input", [["autofocus", ""], ["class", "form-control"], ["name", "scian"], ["placeholder", "Clave scian"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.tramite.scian = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 7, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 6, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 5, "input", [["class", "form-control"], ["name", "entidadesf"], ["placeholder", "Entidades federativas"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.tramite.entidadesF = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 16, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 7, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 6, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 5, "textarea", [["class", "form-control"], ["name", "descripcion"], ["placeholder", "Descripcion de la actividad"], ["rows", "2"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.tramite.descripcion = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 7, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 6, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 5, "input", [["class", "form-control"], ["name", "cofepris"], ["placeholder", "COFEPRIS"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.tramite.cofepris = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 16, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 7, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 6, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 5, "input", [["class", "form-control"], ["name", "area"], ["placeholder", "Area"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.tramite.area = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 7, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 6, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 5, "input", [["class", "form-control"], ["name", "rlicencia"], ["placeholder", "Requiere licencia"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.tramite.Rlicencia = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](58, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](62, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 1, "button", [["class", "btn btn-success btn-block"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.guardarTramite() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" GUARDAR "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 3, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, null, 2, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["PRE-VIZUALIZACION"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 35, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 34, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 33, "table", [["class", "table table-bordered"], ["hover", "true"], ["mdbTable", ""], ["responsive", "true"], ["striped", "true"]], [[2, "table-striped", null], [2, "table-bordered", null], [2, "table-borderless", null], [2, "table-hover", null], [2, "table-sm", null], [2, "table-responsive", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](73, 81920, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbTableDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { striped: [0, "striped"], hover: [1, "hover"], responsive: [2, "responsive"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, null, 14, "thead", [["class", "primary-color white-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Clave Scian"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Descripcion de la actividad"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](79, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Area"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Entidades federativas"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Cofepris"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](85, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Requiere licencia"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](87, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Creado el dia"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](89, 0, null, null, 16, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](90, 0, null, null, 15, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](91, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](92, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](93, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](94, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](95, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](96, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](97, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](98, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](99, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](100, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](101, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](102, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](103, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](104, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](105, 2)], function (_ck, _v) { var _co = _v.component; var currVal_14 = "scian"; var currVal_15 = _co.tramite.scian; _ck(_v, 18, 0, currVal_14, currVal_15); var currVal_23 = "entidadesf"; var currVal_24 = _co.tramite.entidadesF; _ck(_v, 26, 0, currVal_23, currVal_24); var currVal_32 = "descripcion"; var currVal_33 = _co.tramite.descripcion; _ck(_v, 35, 0, currVal_32, currVal_33); var currVal_41 = "cofepris"; var currVal_42 = _co.tramite.cofepris; _ck(_v, 43, 0, currVal_41, currVal_42); var currVal_50 = "area"; var currVal_51 = _co.tramite.area; _ck(_v, 52, 0, currVal_50, currVal_51); var currVal_59 = "rlicencia"; var currVal_60 = _co.tramite.Rlicencia; _ck(_v, 60, 0, currVal_59, currVal_60); var currVal_67 = "true"; var currVal_68 = "true"; var currVal_69 = "true"; _ck(_v, 73, 0, currVal_67, currVal_68, currVal_69); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassPending; _ck(_v, 7, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassUntouched; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassTouched; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassPristine; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassDirty; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassValid; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassInvalid; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassPending; _ck(_v, 15, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassUntouched; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassTouched; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassPristine; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassDirty; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassValid; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassInvalid; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassPending; _ck(_v, 23, 0, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22); var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassUntouched; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassTouched; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassPristine; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassDirty; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassValid; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassInvalid; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassPending; _ck(_v, 32, 0, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31); var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassUntouched; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassTouched; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassPristine; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassDirty; var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassValid; var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassInvalid; var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassPending; _ck(_v, 40, 0, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40); var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassUntouched; var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassTouched; var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassPristine; var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassDirty; var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassValid; var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassInvalid; var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassPending; _ck(_v, 49, 0, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49); var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).ngClassUntouched; var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).ngClassTouched; var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).ngClassPristine; var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).ngClassDirty; var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).ngClassValid; var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).ngClassInvalid; var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).ngClassPending; _ck(_v, 57, 0, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58); var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73).striped; var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73).bordered; var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73).borderless; var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73).hover; var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73).small; var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73).responsive; _ck(_v, 72, 0, currVal_61, currVal_62, currVal_63, currVal_64, currVal_65, currVal_66); var currVal_70 = _co.tramite.scian; _ck(_v, 92, 0, currVal_70); var currVal_71 = ((_co.tramite.descripcion == "") ? "Escribe una descripcion" : _co.tramite.descripcion); _ck(_v, 94, 0, currVal_71); var currVal_72 = ((_co.tramite.area == "") ? "Escribe una area" : _co.tramite.area); _ck(_v, 96, 0, currVal_72); var currVal_73 = ((_co.tramite.entidadesF == "") ? "si o no" : _co.tramite.entidadesF); _ck(_v, 98, 0, currVal_73); var currVal_74 = ((_co.tramite.cofepris == "") ? "si o no" : _co.tramite.cofepris); _ck(_v, 100, 0, currVal_74); var currVal_75 = ((_co.tramite.Rlicencia == "") ? "si o no" : _co.tramite.Rlicencia); _ck(_v, 102, 0, currVal_75); var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 104, 0, _ck(_v, 105, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.tramite.creado_a, "yyyy-MM-dd")); _ck(_v, 104, 0, currVal_76); }); }
function View_IngresarComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-ingresar", [], null, null, null, View_IngresarComponent_0, RenderType_IngresarComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _ingresar_component__WEBPACK_IMPORTED_MODULE_5__["IngresarComponent"], [_services_tramites_tramites_service__WEBPACK_IMPORTED_MODULE_6__["TramitesService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var IngresarComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-ingresar", _ingresar_component__WEBPACK_IMPORTED_MODULE_5__["IngresarComponent"], View_IngresarComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/admin/dashboard/analisis/ingresar/ingresar.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/dashboard/analisis/ingresar/ingresar.component.ts ***!
  \*************************************************************************/
/*! exports provided: IngresarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresarComponent", function() { return IngresarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_tramites_tramites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/tramites/tramites.service */ "./src/app/services/tramites/tramites.service.ts");



var IngresarComponent = /** @class */ (function () {
    function IngresarComponent(tramitesService, router) {
        this.tramitesService = tramitesService;
        this.router = router;
        this.tramite = {
            id: 0,
            scian: 0,
            descripcion: '',
            area: '',
            entidadesF: '',
            cofepris: '',
            Rlicencia: '',
            creado_a: new Date()
        };
    }
    IngresarComponent.prototype.ngOnInit = function () {
    };
    IngresarComponent.prototype.guardarTramite = function () {
        var _this = this;
        delete this.tramite.id;
        delete this.tramite.creado_a;
        this.tramitesService.saveTramite(this.tramite).subscribe(function (res) {
            console.log(res);
            _this.router.navigate(['/admin/dashboard/analisis/tablas']);
        }, function (err) { return console.error(err); });
    };
    return IngresarComponent;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/analisis/tablas/tablas.component.css.shim.ngstyle.js":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/dashboard/analisis/tablas/tablas.component.css.shim.ngstyle.js ***!
  \**************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Rhc2hib2FyZC9hbmFsaXNpcy90YWJsYXMvdGFibGFzLmNvbXBvbmVudC5jc3MifQ== */"];



/***/ }),

/***/ "./src/app/admin/dashboard/analisis/tablas/tablas.component.ngfactory.js":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/dashboard/analisis/tablas/tablas.component.ngfactory.js ***!
  \*******************************************************************************/
/*! exports provided: RenderType_TablasComponent, View_TablasComponent_0, View_TablasComponent_Host_0, TablasComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TablasComponent", function() { return RenderType_TablasComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TablasComponent_0", function() { return View_TablasComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TablasComponent_Host_0", function() { return View_TablasComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablasComponentNgFactory", function() { return TablasComponentNgFactory; });
/* harmony import */ var _tablas_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tablas.component.css.shim.ngstyle */ "./src/app/admin/dashboard/analisis/tablas/tablas.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _tablas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tablas.component */ "./src/app/admin/dashboard/analisis/tablas/tablas.component.ts");
/* harmony import */ var _services_tramites_tramites_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/tramites/tramites.service */ "./src/app/services/tramites/tramites.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_TablasComponent = [_tablas_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_TablasComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_TablasComponent, data: {} });

function View_TablasComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 18, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](15, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "button", [["class", "btn btn-danger"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.deleteTramite(_v.context.$implicit.id) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 0, "i", [["class", "fas fa-trash-alt"]], null, null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.scian; _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit.descripcion; _ck(_v, 4, 0, currVal_1); var currVal_2 = _v.context.$implicit.area; _ck(_v, 6, 0, currVal_2); var currVal_3 = _v.context.$implicit.entidadesF; _ck(_v, 8, 0, currVal_3); var currVal_4 = _v.context.$implicit.cofepris; _ck(_v, 10, 0, currVal_4); var currVal_5 = _v.context.$implicit.Rlicencia; _ck(_v, 12, 0, currVal_5); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 14, 0, _ck(_v, 15, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit.creado_a, "yyyy-MM-dd")); _ck(_v, 14, 0, currVal_6); }); }
function View_TablasComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 23, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 22, "div", [["class", "col-md-12 table-responsive-sm"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 21, "table", [["hover", "true"], ["mdbTable", ""], ["responsive", "true"], ["striped", "true"]], [[2, "table-striped", null], [2, "table-bordered", null], [2, "table-borderless", null], [2, "table-hover", null], [2, "table-sm", null], [2, "table-responsive", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 81920, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MdbTableDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { striped: [0, "striped"], hover: [1, "hover"], responsive: [2, "responsive"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 16, "thead", [["class", "primary-color white-text justify-center-text align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CLAVE SCIAN"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["DESCRIPCION DE LA ACTIVIDAD"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["AREA"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["ENTIDADES FEDERATIVAS"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["COFEPRIS"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["REQUIERE LICECIA"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CREADO EL DIA"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "th", [["class", "text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 0, "i", [["class", "fas fa-trash-alt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TablasComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_6 = "true"; var currVal_7 = "true"; var currVal_8 = "true"; _ck(_v, 4, 0, currVal_6, currVal_7, currVal_8); var currVal_9 = _co.tramites; _ck(_v, 24, 0, currVal_9); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).striped; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).bordered; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).borderless; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).hover; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).small; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).responsive; _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }); }
function View_TablasComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-tablas", [], null, null, null, View_TablasComponent_0, RenderType_TablasComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _tablas_component__WEBPACK_IMPORTED_MODULE_4__["TablasComponent"], [_services_tramites_tramites_service__WEBPACK_IMPORTED_MODULE_5__["TramitesService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var TablasComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-tablas", _tablas_component__WEBPACK_IMPORTED_MODULE_4__["TablasComponent"], View_TablasComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/admin/dashboard/analisis/tablas/tablas.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin/dashboard/analisis/tablas/tablas.component.ts ***!
  \*********************************************************************/
/*! exports provided: TablasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablasComponent", function() { return TablasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_tramites_tramites_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/tramites/tramites.service */ "./src/app/services/tramites/tramites.service.ts");


var TablasComponent = /** @class */ (function () {
    function TablasComponent(tramitesservice) {
        this.tramitesservice = tramitesservice;
        this.tramites = [];
    }
    TablasComponent.prototype.ngOnInit = function () {
        this.getTramite();
    };
    TablasComponent.prototype.getTramite = function () {
        var _this = this;
        this.tramitesservice.getTramites().subscribe(function (res) {
            _this.tramites = res;
        }, function (err) { return console.error(err); });
    };
    TablasComponent.prototype.deleteTramite = function (id) {
        var _this = this;
        this.tramitesservice.deleteTramite(id).subscribe(function (res) {
            console.log(res);
            _this.getTramite();
        }, function (err) { return console.error(err); });
    };
    return TablasComponent;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.css.shim.ngstyle.js":
/*!*************************************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.css.shim.ngstyle.js ***!
  \*************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"];



/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.ngfactory.js":
/*!******************************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.ngfactory.js ***!
  \******************************************************************/
/*! exports provided: RenderType_DashboardComponent, View_DashboardComponent_0, View_DashboardComponent_Host_0, DashboardComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DashboardComponent", function() { return RenderType_DashboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DashboardComponent_0", function() { return View_DashboardComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DashboardComponent_Host_0", function() { return View_DashboardComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponentNgFactory", function() { return DashboardComponentNgFactory; });
/* harmony import */ var _dashboard_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component.css.shim.ngstyle */ "./src/app/admin/dashboard/dashboard.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _navbar_navbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/navbar.component.ngfactory */ "./src/app/admin/dashboard/navbar/navbar.component.ngfactory.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/admin/dashboard/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sidebar_sidebar_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component.ngfactory */ "./src/app/admin/dashboard/sidebar/sidebar.component.ngfactory.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/admin/dashboard/sidebar/sidebar.component.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/admin/dashboard/dashboard.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_DashboardComponent = [_dashboard_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_DashboardComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_DashboardComponent, data: {} });

function View_DashboardComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-navbar", [], null, null, null, _navbar_navbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NavbarComponent_0"], _navbar_navbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NavbarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "app-sidebar", [], null, null, null, _sidebar_sidebar_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_SidebarComponent_0"], _sidebar_sidebar_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_SidebarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); _ck(_v, 3, 0); }, null); }
function View_DashboardComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-dashboard", [], null, null, null, View_DashboardComponent_0, RenderType_DashboardComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DashboardComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-dashboard", _dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], View_DashboardComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/navbar/navbar.component.css.shim.ngstyle.js":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/dashboard/navbar/navbar.component.css.shim.ngstyle.js ***!
  \*****************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".sidebarBtn[_ngcontent-%COMP%]\r\n{\r\n    position: absolute;\r\n    top: 0;\r\n    right: -50px;\r\n    width: 50px;\r\n    height: 50px;\r\n    box-sizing: border-box;\r\n    cursor: pointer;\r\n    background: #f5f5f5;\r\n    border: none;\r\n    outline: none;\r\n}\r\na[_ngcontent-%COMP%]{\r\n    margin-right: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZGFzaGJvYXJkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9kYXNoYm9hcmQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXJCdG5cclxue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IC01MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuYXtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufSJdfQ== */"];



/***/ }),

/***/ "./src/app/admin/dashboard/navbar/navbar.component.ngfactory.js":
/*!**********************************************************************!*\
  !*** ./src/app/admin/dashboard/navbar/navbar.component.ngfactory.js ***!
  \**********************************************************************/
/*! exports provided: RenderType_NavbarComponent, View_NavbarComponent_0, View_NavbarComponent_Host_0, NavbarComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_NavbarComponent", function() { return RenderType_NavbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NavbarComponent_0", function() { return View_NavbarComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NavbarComponent_Host_0", function() { return View_NavbarComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponentNgFactory", function() { return NavbarComponentNgFactory; });
/* harmony import */ var _navbar_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.component.css.shim.ngstyle */ "./src/app/admin/dashboard/navbar/navbar.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../node_modules/angular-bootstrap-md/angular-bootstrap-md.ngfactory */ "./node_modules/angular-bootstrap-md/angular-bootstrap-md.ngfactory.js");
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar.component */ "./src/app/admin/dashboard/navbar/navbar.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_NavbarComponent = [_navbar_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_NavbarComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_NavbarComponent, data: {} });

function View_NavbarComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["class", "dropdown-menu dropdown-menu-right dropdown dropdown-primary"], ["role", "menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, [[2, 0]], null, 3, "a", [["class", "dropdown-item waves-light"], ["mdbWavesEffect", ""], ["routerLink", "/admin/dashboard/usuarios"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).click($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["WavesDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["My account"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "a", [["class", "dropdown-item waves-light"], ["mdbWavesEffect", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).click($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.logOut() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["WavesDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Log out"]))], function (_ck, _v) { var currVal_2 = "/admin/dashboard/usuarios"; _ck(_v, 3, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).href; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_NavbarComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 23, "mdb-navbar", [["SideClass", "navbar navbar-expand-lg navbar-dark black"]], null, [["window", "resize"], ["document", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onResize($event) !== false);
        ad = (pd_0 && ad);
    } if (("document:scroll" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onScroll() !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_NavbarComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_NavbarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 6406144, null, 1, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["NavbarService"]], { SideClass: [0, "SideClass"], containerInside: [1, "containerInside"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 1, { links: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 3, "mdb-navbar-brand", [], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_LogoComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_LogoComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 1, "a", [["class", "logo navbar-brand scroll"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "img", [["alt", ""], ["height", "30"], ["src", "assets\\imagenes\\Logo COPRISED 2017 Horizontal Transparente - Copy.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 4, 16, "links", [], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_LinksComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_LinksComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 5292032, [[1, 4]], 1, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["LinksComponent"], [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["NavbarService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { links: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 0, 13, "ul", [["class", "navbar-nav ml-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 16777216, null, null, 12, "li", [["class", "nav-item dropdown"], ["dropdown", ""]], [[2, "dropup", null], [2, "open", null], [2, "show", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["BsDropdownState"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["BsDropdownState"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 212992, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["BsDropdownDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["ɵe"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["BsDropdownConfig"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["BsDropdownState"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 7, "a", [["class", "nav-link dropdown-toggle waves-light "], ["dropdownToggle", ""], ["mdbWavesEffect", ""], ["type", "button"]], [[1, "aria-haspopup", 0], [1, "disabled", 0], [1, "aria-expanded", 0]], [[null, "click"], ["document", "click"], [null, "keyup.esc"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).click($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).onClick() !== false);
        ad = (pd_1 && ad);
    } if (("document:click" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).onDocumentClick($event) !== false);
        ad = (pd_2 && ad);
    } if (("keyup.esc" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).onEsc() !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["WavesDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 147456, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["BsDropdownToggleDirective"], [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["BsDropdownState"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 2, "mdb-icon", [["fas", ""], ["icon", "user-circle"]], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MdbIconComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MdbIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MdbIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { icon: [0, "icon"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["FasDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Profile "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 0, "span", [["class", "caret "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NavbarComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["BsDropdownMenuDirective"], [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["BsDropdownState"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null)], function (_ck, _v) { var currVal_0 = "navbar navbar-expand-lg navbar-dark black"; var currVal_1 = true; _ck(_v, 1, 0, currVal_0, currVal_1); _ck(_v, 13, 0); var currVal_8 = "user-circle"; _ck(_v, 18, 0, currVal_8); }, function (_ck, _v) { var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).dropup; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).isOpen; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).isOpen; _ck(_v, 11, 0, currVal_2, currVal_3, currVal_4); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ariaHaspopup; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).isDisabled; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).isOpen; _ck(_v, 14, 0, currVal_5, currVal_6, currVal_7); }); }
function View_NavbarComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-navbar", [], null, null, null, View_NavbarComponent_0, RenderType_NavbarComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var NavbarComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-navbar", _navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], View_NavbarComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/admin/dashboard/navbar/navbar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/dashboard/navbar/navbar.component.ts ***!
  \************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router) {
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        //-- Toggle menu script--
        jquery__WEBPACK_IMPORTED_MODULE_1__("#menu-toggle").click(function (e) {
            e.preventDefault();
            jquery__WEBPACK_IMPORTED_MODULE_1__("#wrapper").toggleClass("menuDisplayed");
        });
    };
    NavbarComponent.prototype.logOut = function () {
        localStorage.removeItem('token');
        this.router.navigate(['/admin']);
    };
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/sidebar/sidebar.component.css.shim.ngstyle.js":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/dashboard/sidebar/sidebar.component.css.shim.ngstyle.js ***!
  \*******************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["#sidebar-wrapper[_ngcontent-%COMP%]{\r\n    z-index: 1;\r\n    position: absolute;\r\n    width: 0;\r\n    height: 100%;\r\n    overflow-y: hidden;\r\n    background: #2c3e50;\r\n    opacity: 0.9;\r\n}\r\n\r\n#page-content-wrapper[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    position: absolute;\r\n    padding: 15px;\r\n}\r\n\r\n#wrapper.menuDisplayed[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%]{\r\n    width: 250px;\r\n}\r\n#wrapper.menuDisplayed[_ngcontent-%COMP%]   #page-content-wrapper[_ngcontent-%COMP%]{\r\n    padding-left: 250px; \r\n}\r\n\r\n.sidebar-nav[_ngcontent-%COMP%]{\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n.sidebar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    text-indent: 20px;\r\n    line-height: 40px;\r\n}\r\n.sidebar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    display: block;\r\n    text-decoration: none;\r\n    color: #addd;\r\n}\r\n.sidebar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    background: #16a085;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    color: #ffffff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZGFzaGJvYXJkL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVk7QUFDWjtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7QUFFQSxpQkFBaUI7QUFDakI7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7QUFFQSxtQ0FBbUM7QUFDbkM7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQSxvQkFBb0I7QUFDcEI7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Rhc2hib2FyZC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNpZGViYXIgKi9cclxuI3NpZGViYXItd3JhcHBlcntcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQ6ICMyYzNlNTA7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbi8qIE1haW4gY29udGVudCAqL1xyXG4jcGFnZS1jb250ZW50LXdyYXBwZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi8qIENoYW5nZSBzaWRlYmFyIHRvIGJlIGRpc3BsYXllZCAqL1xyXG4jd3JhcHBlci5tZW51RGlzcGxheWVkICNzaWRlYmFyLXdyYXBwZXJ7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbiN3cmFwcGVyLm1lbnVEaXNwbGF5ZWQgI3BhZ2UtY29udGVudC13cmFwcGVye1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNTBweDsgXHJcbn1cclxuXHJcbi8qIFNpZGViYXIgc3R5bGluZyAqL1xyXG4uc2lkZWJhci1uYXZ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4uc2lkZWJhci1uYXYgbGl7XHJcbiAgICB0ZXh0LWluZGVudDogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG59XHJcbi5zaWRlYmFyLW5hdiBsaSBhe1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogI2FkZGQ7XHJcbn1cclxuLnNpZGViYXItbmF2IGxpIGE6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTZhMDg1O1xyXG59XHJcblxyXG5oM3tcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59Il19 */"];



/***/ }),

/***/ "./src/app/admin/dashboard/sidebar/sidebar.component.ngfactory.js":
/*!************************************************************************!*\
  !*** ./src/app/admin/dashboard/sidebar/sidebar.component.ngfactory.js ***!
  \************************************************************************/
/*! exports provided: RenderType_SidebarComponent, View_SidebarComponent_0, View_SidebarComponent_Host_0, SidebarComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SidebarComponent", function() { return RenderType_SidebarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SidebarComponent_0", function() { return View_SidebarComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SidebarComponent_Host_0", function() { return View_SidebarComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponentNgFactory", function() { return SidebarComponentNgFactory; });
/* harmony import */ var _sidebar_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.component.css.shim.ngstyle */ "./src/app/admin/dashboard/sidebar/sidebar.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar.component */ "./src/app/admin/dashboard/sidebar/sidebar.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_SidebarComponent = [_sidebar_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_SidebarComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_SidebarComponent, data: {} });

function View_SidebarComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 27, "div", [["class", "row mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 8, "div", [["class", "col-md-4 mb-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 7, "a", [["routerLink", "/admin/dashboard/administracion"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 5, "div", [["class", "card primary-color"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 4, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 3, "h3", [["class", "text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "i", [["class", "fas fa-images"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Administracion"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 8, "div", [["class", "col-md-4 mb-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 7, "a", [["routerLink", "/admin/dashboard/usuarios"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 5, "div", [["class", "card primary-color"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 4, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 3, "h3", [["class", "text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 0, "i", [["class", "fas fa-users"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Usuarios"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 8, "div", [["class", "col-md-4 mb-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 7, "a", [["routerLink", "/admin/dashboard/analisis"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 5, "div", [["class", "card primary-color"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 4, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 3, "h3", [["class", "text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 0, "i", [["class", "fas fa-chart-pie"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Analisis"]))], function (_ck, _v) { var currVal_2 = "/admin/dashboard/administracion"; _ck(_v, 3, 0, currVal_2); var currVal_5 = "/admin/dashboard/usuarios"; _ck(_v, 12, 0, currVal_5); var currVal_8 = "/admin/dashboard/analisis"; _ck(_v, 21, 0, currVal_8); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).target; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).href; _ck(_v, 11, 0, currVal_3, currVal_4); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).target; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).href; _ck(_v, 20, 0, currVal_6, currVal_7); }); }
function View_SidebarComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["class", "container-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "div", [["class", "row mt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 5, "div", [["class", "col-lg-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "section", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SidebarComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.mostrar; _ck(_v, 5, 0, currVal_0); _ck(_v, 7, 0); }, null); }
function View_SidebarComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-sidebar", [], null, null, null, View_SidebarComponent_0, RenderType_SidebarComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SidebarComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-sidebar", _sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], View_SidebarComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/admin/dashboard/sidebar/sidebar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/dashboard/sidebar/sidebar.component.ts ***!
  \**************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.mostrar = true;
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/usuarios/usuarios.component.css.shim.ngstyle.js":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/dashboard/usuarios/usuarios.component.css.shim.ngstyle.js ***!
  \*********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Rhc2hib2FyZC91c3Vhcmlvcy91c3Vhcmlvcy5jb21wb25lbnQuY3NzIn0= */"];



/***/ }),

/***/ "./src/app/admin/dashboard/usuarios/usuarios.component.ngfactory.js":
/*!**************************************************************************!*\
  !*** ./src/app/admin/dashboard/usuarios/usuarios.component.ngfactory.js ***!
  \**************************************************************************/
/*! exports provided: RenderType_UsuariosComponent, View_UsuariosComponent_0, View_UsuariosComponent_Host_0, UsuariosComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_UsuariosComponent", function() { return RenderType_UsuariosComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_UsuariosComponent_0", function() { return View_UsuariosComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_UsuariosComponent_Host_0", function() { return View_UsuariosComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosComponentNgFactory", function() { return UsuariosComponentNgFactory; });
/* harmony import */ var _usuarios_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usuarios.component.css.shim.ngstyle */ "./src/app/admin/dashboard/usuarios/usuarios.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/angular-bootstrap-md/angular-bootstrap-md.ngfactory */ "./node_modules/angular-bootstrap-md/angular-bootstrap-md.ngfactory.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _usuarios_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usuarios.component */ "./src/app/admin/dashboard/usuarios/usuarios.component.ts");
/* harmony import */ var _services_registrar_registrar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/registrar/registrar.service */ "./src/app/services/registrar/registrar.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_UsuariosComponent = [_usuarios_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_UsuariosComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_UsuariosComponent, data: {} });

function View_UsuariosComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 27, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 26, "div", [["class", "card mb-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 6, "div", [["class", "card-header info-color-dark text-white d-flex justify-content-center align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 5, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "mdb-icon", [["fas", ""], ["icon", "user-circle"]], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MdbIconComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MdbIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MdbIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { icon: [0, "icon"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["FasDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](8, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 11, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Nombres: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, ["", " ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](14, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](15, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Email: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](20, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 6, "div", [["class", "card-footer info-color-dark text-center text-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](23, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](24, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 1, "button", [["class", "btn btn-danger btn-block"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.deleteUser(_v.context.$implicit.id) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 0, "i", [["class", "fas fa-trash-alt"]], null, null, null, null, null))], function (_ck, _v) { var currVal_0 = "user-circle"; _ck(_v, 5, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 7, 0, _ck(_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit.apellidos)); _ck(_v, 7, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 13, 0, _ck(_v, 14, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit.nombres)); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 13, 1, _ck(_v, 15, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit.apellidos)); _ck(_v, 13, 0, currVal_2, currVal_3); var currVal_4 = _v.context.$implicit.email; _ck(_v, 20, 0, currVal_4); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 23, 0, _ck(_v, 24, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 1), _v.context.$implicit.created_at, "yyyy-MM-dd")); _ck(_v, 23, 0, currVal_5); }); }
function View_UsuariosComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["UpperCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UsuariosComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.usuarios; _ck(_v, 5, 0, currVal_0); }, null); }
function View_UsuariosComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-usuarios", [], null, null, null, View_UsuariosComponent_0, RenderType_UsuariosComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _usuarios_component__WEBPACK_IMPORTED_MODULE_5__["UsuariosComponent"], [_services_registrar_registrar_service__WEBPACK_IMPORTED_MODULE_6__["RegistrarService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var UsuariosComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-usuarios", _usuarios_component__WEBPACK_IMPORTED_MODULE_5__["UsuariosComponent"], View_UsuariosComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/admin/dashboard/usuarios/usuarios.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/dashboard/usuarios/usuarios.component.ts ***!
  \****************************************************************/
/*! exports provided: UsuariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosComponent", function() { return UsuariosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_registrar_registrar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/registrar/registrar.service */ "./src/app/services/registrar/registrar.service.ts");


var UsuariosComponent = /** @class */ (function () {
    function UsuariosComponent(service) {
        this.service = service;
        // @HostBinding('class') classes = 'row';
        this.usuarios = [];
    }
    UsuariosComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsuariosComponent.prototype.getUsers = function () {
        var _this = this;
        this.service.getUsers().subscribe(function (res) {
            _this.usuarios = res;
        }, function (err) { return console.log(err); });
    };
    UsuariosComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.service.deleteUser(id).subscribe(function (res) {
            console.log(res);
            _this.getUsers();
        }, function (err) { return console.error(err); });
    };
    return UsuariosComponent;
}());



/***/ }),

/***/ "./src/app/admin/login/login.component.css.shim.ngstyle.js":
/*!*****************************************************************!*\
  !*** ./src/app/admin/login/login.component.css.shim.ngstyle.js ***!
  \*****************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["html[_ngcontent-%COMP%] {\r\n  background-color: #56baed;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  font-family: \"Poppins\", sans-serif;\r\n  height: 100vh;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  color: #92badd;\r\n  display:inline-block;\r\n  text-decoration: none;\r\n  font-weight: 400;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  display:inline-block;\r\n  margin: 40px 8px 10px 8px; \r\n  color: #cccccc;\r\n}\r\n\r\n\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column; \r\n  justify-content: center;\r\n  width: 100%;\r\n  min-height: 100%;\r\n  padding: 20px;\r\n}\r\n\r\n#formContent[_ngcontent-%COMP%] {\r\n  border-radius: 10px 10px 10px 10px;\r\n  background: #fff;\r\n  padding: 30px;\r\n  width: 90%;\r\n  max-width: 450px;\r\n  position: relative;\r\n  padding: 0px;\r\n  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n  text-align: center;\r\n}\r\n\r\n#formFooter[_ngcontent-%COMP%] {\r\n  background-color: #f6f6f6;\r\n  border-top: 1px solid #dce8f1;\r\n  padding: 25px;\r\n  text-align: center;\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n\r\n\r\nh2.inactive[_ngcontent-%COMP%] {\r\n  color: #cccccc;\r\n}\r\n\r\nh2.active[_ngcontent-%COMP%] {\r\n  color: #0d0d0d;\r\n  border-bottom: 2px solid #5fbae9;\r\n}\r\n\r\n\r\n\r\ninput[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%]  {\r\n  background-color: #56baed;\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 80px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  text-transform: uppercase;\r\n  font-size: 13px;\r\n  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\r\n  border-radius: 5px 5px 5px 5px;\r\n  margin: 5px 20px 40px 20px;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\ninput[type=button][_ngcontent-%COMP%]:hover, input[type=submit][_ngcontent-%COMP%]:hover, input[type=reset][_ngcontent-%COMP%]:hover  {\r\n  background-color: #39ace7;\r\n}\r\n\r\ninput[type=button][_ngcontent-%COMP%]:active, input[type=submit][_ngcontent-%COMP%]:active, input[type=reset][_ngcontent-%COMP%]:active  {\r\n  -webkit-transform: scale(0.95);\r\n  transform: scale(0.95);\r\n}\r\n\r\ninput[type=text][_ngcontent-%COMP%] {\r\n  background-color: #f6f6f6;\r\n  border: none;\r\n  color: #0d0d0d;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 5px;\r\n  width: 85%;\r\n  border: 2px solid #f6f6f6;\r\n  transition: all 0.5s ease-in-out;\r\n  border-radius: 5px 5px 5px 5px;\r\n}\r\n\r\ninput[type=text][_ngcontent-%COMP%]:focus {\r\n  background-color: #fff;\r\n  border-bottom: 2px solid #5fbae9;\r\n}\r\n\r\ninput[type=text][_ngcontent-%COMP%]:placeholder {\r\n  color: #cccccc;\r\n}\r\n\r\ninput[type=email][_ngcontent-%COMP%] {\r\n  background-color: #f6f6f6;\r\n  border: none;\r\n  color: #0d0d0d;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 5px;\r\n  width: 85%;\r\n  border: 2px solid #f6f6f6;\r\n  transition: all 0.5s ease-in-out;\r\n  border-radius: 5px 5px 5px 5px;\r\n}\r\n\r\ninput[type=email][_ngcontent-%COMP%]:focus {\r\n  background-color: #fff;\r\n  border-bottom: 2px solid #5fbae9;\r\n}\r\n\r\ninput[type=email][_ngcontent-%COMP%]:placeholder {\r\n  color: #cccccc;\r\n}\r\n\r\n\r\n\r\ninput[type=password][_ngcontent-%COMP%] {\r\n  background-color: #f6f6f6;\r\n  border: none;\r\n  color: #0d0d0d;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 5px;\r\n  width: 85%;\r\n  border: 2px solid #f6f6f6;\r\n  transition: all 0.5s ease-in-out;\r\n  border-radius: 5px 5px 5px 5px;\r\n}\r\n\r\ninput[type=password][_ngcontent-%COMP%]:focus {\r\n  background-color: #fff;\r\n  border-bottom: 2px solid #5fbae9;\r\n}\r\n\r\ninput[type=password][_ngcontent-%COMP%]:placeholder {\r\n  color: #cccccc;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.fadeInDown[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: fadeInDown;\r\n  animation-name: fadeInDown;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n}\r\n\r\n@-webkit-keyframes fadeInDown {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n@keyframes fadeInDown {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n\r\n\r\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n\r\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n\r\n.fadeIn[_ngcontent-%COMP%] {\r\n  opacity:0;\r\n  -webkit-animation:fadeIn ease-in 1;\r\n  animation:fadeIn ease-in 1;\r\n\r\n  -webkit-animation-fill-mode:forwards;\r\n  animation-fill-mode:forwards;\r\n\r\n  -webkit-animation-duration:1s;\r\n  animation-duration:1s;\r\n}\r\n\r\n.fadeIn.first[_ngcontent-%COMP%] {\r\n  -webkit-animation-delay: 0.4s;\r\n  animation-delay: 0.4s;\r\n}\r\n\r\n.fadeIn.second[_ngcontent-%COMP%] {\r\n  -webkit-animation-delay: 0.6s;\r\n  animation-delay: 0.6s;\r\n}\r\n\r\n.fadeIn.third[_ngcontent-%COMP%] {\r\n  -webkit-animation-delay: 0.8s;\r\n  animation-delay: 0.8s;\r\n}\r\n\r\n.fadeIn.fourth[_ngcontent-%COMP%] {\r\n  -webkit-animation-delay: 1s;\r\n  animation-delay: 1s;\r\n}\r\n\r\n\r\n\r\n.underlineHover[_ngcontent-%COMP%]:after {\r\n  display: block;\r\n  left: 0;\r\n  bottom: -10px;\r\n  width: 0;\r\n  height: 2px;\r\n  background-color: #56baed;\r\n  content: \"\";\r\n  transition: width 0.2s;\r\n}\r\n\r\n.underlineHover[_ngcontent-%COMP%]:hover {\r\n  color: #0d0d0d;\r\n}\r\n\r\n.underlineHover[_ngcontent-%COMP%]:hover:after{\r\n  width: 100%;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    color:#60a0ff;\r\n}\r\n\r\n\r\n\r\n*[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n}\r\n\r\n#icon[_ngcontent-%COMP%] {\r\n  width:90%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUlBLGNBQWM7O0FBRWQ7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFFRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBRVoseUNBQXlDO0VBQ3pDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLGtCQUFrQjtFQUVsQiw0QkFBNEI7QUFDOUI7O0FBSUEsU0FBUzs7QUFFVDtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0NBQWdDO0FBQ2xDOztBQUlBLG1CQUFtQjs7QUFFbkI7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGVBQWU7RUFFZiw4Q0FBOEM7RUFFOUMsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUsxQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFFRSw4QkFBOEI7RUFHOUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixXQUFXO0VBQ1gsVUFBVTtFQUNWLHlCQUF5QjtFQUt6QixnQ0FBZ0M7RUFFaEMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdDQUFnQztBQUNsQzs7QUFHQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0VBQ1YseUJBQXlCO0VBS3pCLGdDQUFnQztFQUVoQyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZ0NBQWdDO0FBQ2xDOztBQUdBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQSxhQUFhOztBQUViO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixXQUFXO0VBQ1gsVUFBVTtFQUNWLHlCQUF5QjtFQUt6QixnQ0FBZ0M7RUFFaEMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBSUEsZUFBZTs7QUFFZix1Q0FBdUM7O0FBQ3ZDO0VBQ0Usa0NBQWtDO0VBQ2xDLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLGlDQUFpQztFQUNqQyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDViwyQ0FBMkM7SUFDM0MsbUNBQW1DO0VBQ3JDO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLDJDQUEyQztJQUMzQyxtQ0FBbUM7RUFDckM7RUFDQTtJQUNFLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsZUFBZTtFQUNqQjtBQUNGOztBQUVBLGtDQUFrQzs7QUFDbEMsNEJBQTRCLE9BQU8sU0FBUyxFQUFFLEVBQUUsS0FBSyxTQUFTLEVBQUUsRUFBRTs7QUFFbEUsb0JBQW9CLE9BQU8sU0FBUyxFQUFFLEVBQUUsS0FBSyxTQUFTLEVBQUUsRUFBRTs7QUFFMUQ7RUFDRSxTQUFTO0VBQ1Qsa0NBQWtDO0VBRWxDLDBCQUEwQjs7RUFFMUIsb0NBQW9DO0VBRXBDLDRCQUE0Qjs7RUFFNUIsNkJBQTZCO0VBRTdCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUU3QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw2QkFBNkI7RUFFN0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsNkJBQTZCO0VBRTdCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUUzQixtQkFBbUI7QUFDckI7O0FBRUEsa0NBQWtDOztBQUNsQztFQUNFLGNBQWM7RUFDZCxPQUFPO0VBQ1AsYUFBYTtFQUNiLFFBQVE7RUFDUixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQSxXQUFXOztBQUVYO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtFQUNFLFNBQVM7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6ICM5MmJhZGQ7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbmgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDQwcHggOHB4IDEwcHggOHB4OyBcclxuICBjb2xvcjogI2NjY2NjYztcclxufVxyXG5cclxuXHJcblxyXG4vKiBTVFJVQ1RVUkUgKi9cclxuXHJcbi53cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4jZm9ybUNvbnRlbnQge1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC13aWR0aDogNDUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gIGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2Zvcm1Gb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkY2U4ZjE7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLyogVEFCUyAqL1xyXG5cclxuaDIuaW5hY3RpdmUge1xyXG4gIGNvbG9yOiAjY2NjY2NjO1xyXG59XHJcblxyXG5oMi5hY3RpdmUge1xyXG4gIGNvbG9yOiAjMGQwZDBkO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNWZiYWU5O1xyXG59XHJcblxyXG5cclxuXHJcbi8qIEZPUk0gVFlQT0dSQVBIWSovXHJcblxyXG5pbnB1dFt0eXBlPWJ1dHRvbl0sIGlucHV0W3R5cGU9c3VibWl0XSwgaW5wdXRbdHlwZT1yZXNldF0gIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTVweCA4MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LDE4NiwyMzMsMC40KTtcclxuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsMTg2LDIzMywwLjQpO1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICBtYXJnaW46IDVweCAyMHB4IDQwcHggMjBweDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIsIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciwgaW5wdXRbdHlwZT1yZXNldF06aG92ZXIgIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzlhY2U3O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPWJ1dHRvbl06YWN0aXZlLCBpbnB1dFt0eXBlPXN1Ym1pdF06YWN0aXZlLCBpbnB1dFt0eXBlPXJlc2V0XTphY3RpdmUgIHtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW46IDVweDtcclxuICB3aWR0aDogODUlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmNmY2ZjY7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XHJcbn1cclxuXHJcblxyXG5pbnB1dFt0eXBlPXRleHRdOnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI2NjY2NjYztcclxufVxyXG5cclxuaW5wdXRbdHlwZT1lbWFpbF0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjMGQwZDBkO1xyXG4gIHBhZGRpbmc6IDE1cHggMzJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZjZmNmY2O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPWVtYWlsXTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzVmYmFlOTtcclxufVxyXG5cclxuXHJcbmlucHV0W3R5cGU9ZW1haWxdOnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI2NjY2NjYztcclxufVxyXG5cclxuLyogUEFTU1dPUkQgKi9cclxuXHJcbmlucHV0W3R5cGU9cGFzc3dvcmRdIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogIzBkMGQwZDtcclxuICBwYWRkaW5nOiAxNXB4IDMycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2Y2ZjZmNjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9cGFzc3dvcmRdOnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI2NjY2NjYztcclxufVxyXG5cclxuXHJcblxyXG4vKiBBTklNQVRJT05TICovXHJcblxyXG4vKiBTaW1wbGUgQ1NTMyBGYWRlLWluLWRvd24gQW5pbWF0aW9uICovXHJcbi5mYWRlSW5Eb3duIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluRG93biB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLyogU2ltcGxlIENTUzMgRmFkZS1pbiBBbmltYXRpb24gKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxyXG5ALW1vei1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcbkBrZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcblxyXG4uZmFkZUluIHtcclxuICBvcGFjaXR5OjA7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcclxuICAtbW96LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG4gIGFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG5cclxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcbiAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcblxyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xyXG4gIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjoxcztcclxufVxyXG5cclxuLmZhZGVJbi5maXJzdCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG59XHJcblxyXG4uZmFkZUluLnNlY29uZCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG59XHJcblxyXG4uZmFkZUluLnRoaXJkIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XHJcbn1cclxuXHJcbi5mYWRlSW4uZm91cnRoIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMXM7XHJcbn1cclxuXHJcbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXHJcbi51bmRlcmxpbmVIb3ZlcjphZnRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IC0xMHB4O1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzO1xyXG59XHJcblxyXG4udW5kZXJsaW5lSG92ZXI6aG92ZXIge1xyXG4gIGNvbG9yOiAjMGQwZDBkO1xyXG59XHJcblxyXG4udW5kZXJsaW5lSG92ZXI6aG92ZXI6YWZ0ZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmgxe1xyXG4gICAgY29sb3I6IzYwYTBmZjtcclxufVxyXG5cclxuLyogT1RIRVJTICovXHJcblxyXG4qOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn0gXHJcblxyXG4jaWNvbiB7XHJcbiAgd2lkdGg6OTAlO1xyXG59Il19 */"];



/***/ }),

/***/ "./src/app/admin/login/login.component.ngfactory.js":
/*!**********************************************************!*\
  !*** ./src/app/admin/login/login.component.ngfactory.js ***!
  \**********************************************************/
/*! exports provided: RenderType_LoginComponent, View_LoginComponent_0, View_LoginComponent_Host_0, LoginComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LoginComponent", function() { return RenderType_LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LoginComponent_0", function() { return View_LoginComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LoginComponent_Host_0", function() { return View_LoginComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponentNgFactory", function() { return LoginComponentNgFactory; });
/* harmony import */ var _login_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component.css.shim.ngstyle */ "./src/app/admin/login/login.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.component */ "./src/app/admin/login/login.component.ts");
/* harmony import */ var _services_registrar_registrar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/registrar/registrar.service */ "./src/app/services/registrar/registrar.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_LoginComponent = [_login_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_LoginComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_LoginComponent, data: {} });

function View_LoginComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 32, "div", [["class", "wrapper fadeInDown"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 31, "div", [["id", "formContent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["class", "fadeIn first"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "img", [["alt", "User Icon"], ["id", "icon"], ["src", "assets/imagenes/Logo COPRISED 2017 Horizontal Transparente - Copy.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 21, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.loginUser() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_bh"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 4210688, [["myform", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 7, "input", [["class", "fadeIn second"], ["id", "login"], ["name", "email"], ["placeholder", "Usuario"], ["required", ""], ["type", "email"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.user.email = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 7, "input", [["class", "fadeIn third"], ["id", "password"], ["name", "password"], ["placeholder", "Contrase\u00F1a"], ["required", ""], ["type", "password"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.user.password = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 0, "input", [["class", "fadeIn fourth"], ["id", "login-botton"], ["required", ""], ["type", "submit"], ["value", "Iniciar Sesion"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 5, "div", [["id", "formFooter"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 4, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 3, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 2, "a", [["class", "underlineHover"], ["routerLink", "/admin/registrar"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Registrar "]))], function (_ck, _v) { var _co = _v.component; var currVal_15 = ""; _ck(_v, 12, 0, currVal_15); var currVal_16 = "email"; var currVal_17 = _co.user.email; _ck(_v, 15, 0, currVal_16, currVal_17); var currVal_26 = ""; _ck(_v, 20, 0, currVal_26); var currVal_27 = "password"; var currVal_28 = _co.user.password; _ck(_v, 23, 0, currVal_27, currVal_28); var currVal_31 = "/admin/registrar"; _ck(_v, 31, 0, currVal_31); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassPending; _ck(_v, 5, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).required ? "" : null); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassUntouched; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassTouched; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassPristine; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassDirty; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassValid; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassInvalid; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassPending; _ck(_v, 10, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_18 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).required ? "" : null); var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassUntouched; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassTouched; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassPristine; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassDirty; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassValid; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassInvalid; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassPending; _ck(_v, 18, 0, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25); var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).target; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).href; _ck(_v, 30, 0, currVal_29, currVal_30); }); }
function View_LoginComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-login", [], null, null, null, View_LoginComponent_0, RenderType_LoginComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], [_services_registrar_registrar_service__WEBPACK_IMPORTED_MODULE_6__["RegistrarService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LoginComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-login", _login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], View_LoginComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/admin/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_registrar_registrar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/registrar/registrar.service */ "./src/app/services/registrar/registrar.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(login, router) {
        this.login = login;
        this.router = router;
        this.user = {
            id: 0,
            nombres: '',
            apellidos: '',
            email: '',
            password: '',
            created_at: new Date()
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        this.login.loginUser(this.user).subscribe(function (res) {
            console.log(res);
            localStorage.setItem('token', res.token);
            _this.router.navigate(['/admin/dashboard']);
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this.router.navigate(['/admin']);
                }
            }
            console.error(err);
        });
    };
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/admin/registrar/registrar.component.css.shim.ngstyle.js":
/*!*************************************************************************!*\
  !*** ./src/app/admin/registrar/registrar.component.css.shim.ngstyle.js ***!
  \*************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["html[_ngcontent-%COMP%] {\r\n    background-color: #56baed;\r\n  }\r\n  \r\n  body[_ngcontent-%COMP%] {\r\n    font-family: \"Poppins\", sans-serif;\r\n    height: 100vh;\r\n  }\r\n  \r\n  a[_ngcontent-%COMP%] {\r\n    color: #92badd;\r\n    display:inline-block;\r\n    text-decoration: none;\r\n    font-weight: 400;\r\n  }\r\n  \r\n  h2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n    display:inline-block;\r\n    margin: 40px 8px 10px 8px; \r\n    color: #cccccc;\r\n  }\r\n  \r\n  \r\n  \r\n  .wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column; \r\n    justify-content: center;\r\n    width: 100%;\r\n    min-height: 100%;\r\n    padding: 20px;\r\n  }\r\n  \r\n  #formContent[_ngcontent-%COMP%] {\r\n    border-radius: 10px 10px 10px 10px;\r\n    background: #fff;\r\n    padding: 30px;\r\n    width: 90%;\r\n    max-width: 450px;\r\n    position: relative;\r\n    padding: 0px;\r\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n    text-align: center;\r\n  }\r\n  \r\n  #formFooter[_ngcontent-%COMP%] {\r\n    background-color: #f6f6f6;\r\n    border-top: 1px solid #dce8f1;\r\n    padding: 25px;\r\n    text-align: center;\r\n    border-radius: 0 0 10px 10px;\r\n  }\r\n  \r\n  \r\n  \r\n  h2.inactive[_ngcontent-%COMP%] {\r\n    color: #cccccc;\r\n  }\r\n  \r\n  h2.active[_ngcontent-%COMP%] {\r\n    color: #0d0d0d;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n  \r\n  \r\n  \r\n  input[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%]  {\r\n    background-color: #56baed;\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 80px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    text-transform: uppercase;\r\n    font-size: 13px;\r\n    box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\r\n    border-radius: 5px 5px 5px 5px;\r\n    margin: 5px 20px 40px 20px;\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\n  \r\n  input[type=button][_ngcontent-%COMP%]:hover, input[type=submit][_ngcontent-%COMP%]:hover, input[type=reset][_ngcontent-%COMP%]:hover  {\r\n    background-color: #39ace7;\r\n  }\r\n  \r\n  input[type=button][_ngcontent-%COMP%]:active, input[type=submit][_ngcontent-%COMP%]:active, input[type=reset][_ngcontent-%COMP%]:active  {\r\n    -webkit-transform: scale(0.95);\r\n    transform: scale(0.95);\r\n  }\r\n  \r\n  input[type=text][_ngcontent-%COMP%] {\r\n    background-color: #f6f6f6;\r\n    border: none;\r\n    color: #0d0d0d;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 5px;\r\n    width: 85%;\r\n    border: 2px solid #f6f6f6;\r\n    transition: all 0.5s ease-in-out;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n  \r\n  input[type=text][_ngcontent-%COMP%]:focus {\r\n    background-color: #fff;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n  \r\n  input[type=text][_ngcontent-%COMP%]:placeholder {\r\n    color: #cccccc;\r\n  }\r\n  \r\n  input[type=email][_ngcontent-%COMP%] {\r\n    background-color: #f6f6f6;\r\n    border: none;\r\n    color: #0d0d0d;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 5px;\r\n    width: 85%;\r\n    border: 2px solid #f6f6f6;\r\n    transition: all 0.5s ease-in-out;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n  \r\n  input[type=email][_ngcontent-%COMP%]:focus {\r\n    background-color: #fff;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n  \r\n  input[type=email][_ngcontent-%COMP%]:placeholder {\r\n    color: #cccccc;\r\n  }\r\n  \r\n  \r\n  \r\n  input[type=password][_ngcontent-%COMP%] {\r\n    background-color: #f6f6f6;\r\n    border: none;\r\n    color: #0d0d0d;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 5px;\r\n    width: 85%;\r\n    border: 2px solid #f6f6f6;\r\n    transition: all 0.5s ease-in-out;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n  \r\n  input[type=password][_ngcontent-%COMP%]:focus {\r\n    background-color: #fff;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n  \r\n  input[type=password][_ngcontent-%COMP%]:placeholder {\r\n    color: #cccccc;\r\n  }\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  .fadeInDown[_ngcontent-%COMP%] {\r\n    -webkit-animation-name: fadeInDown;\r\n    animation-name: fadeInDown;\r\n    -webkit-animation-duration: 1s;\r\n    animation-duration: 1s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n  }\r\n  \r\n  @-webkit-keyframes fadeInDown {\r\n    0% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0, -100%, 0);\r\n      transform: translate3d(0, -100%, 0);\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n      -webkit-transform: none;\r\n      transform: none;\r\n    }\r\n  }\r\n  \r\n  @keyframes fadeInDown {\r\n    0% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0, -100%, 0);\r\n      transform: translate3d(0, -100%, 0);\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n      -webkit-transform: none;\r\n      transform: none;\r\n    }\r\n  }\r\n  \r\n  \r\n  \r\n  @-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n  \r\n  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n  \r\n  .fadeIn[_ngcontent-%COMP%] {\r\n    opacity:0;\r\n    -webkit-animation:fadeIn ease-in 1;\r\n    animation:fadeIn ease-in 1;\r\n  \r\n    -webkit-animation-fill-mode:forwards;\r\n    animation-fill-mode:forwards;\r\n  \r\n    -webkit-animation-duration:1s;\r\n    animation-duration:1s;\r\n  }\r\n  \r\n  .fadeIn.first[_ngcontent-%COMP%] {\r\n    -webkit-animation-delay: 0.4s;\r\n    animation-delay: 0.4s;\r\n  }\r\n  \r\n  .fadeIn.second[_ngcontent-%COMP%] {\r\n    -webkit-animation-delay: 0.6s;\r\n    animation-delay: 0.6s;\r\n  }\r\n  \r\n  .fadeIn.third[_ngcontent-%COMP%] {\r\n    -webkit-animation-delay: 0.8s;\r\n    animation-delay: 0.8s;\r\n  }\r\n  \r\n  .fadeIn.fourth[_ngcontent-%COMP%] {\r\n    -webkit-animation-delay: 1s;\r\n    animation-delay: 1s;\r\n  }\r\n  \r\n  \r\n  \r\n  .underlineHover[_ngcontent-%COMP%]:after {\r\n    display: block;\r\n    left: 0;\r\n    bottom: -10px;\r\n    width: 0;\r\n    height: 2px;\r\n    background-color: #56baed;\r\n    content: \"\";\r\n    transition: width 0.2s;\r\n  }\r\n  \r\n  .underlineHover[_ngcontent-%COMP%]:hover {\r\n    color: #0d0d0d;\r\n  }\r\n  \r\n  .underlineHover[_ngcontent-%COMP%]:hover:after{\r\n    width: 100%;\r\n  }\r\n  \r\n  h1[_ngcontent-%COMP%]{\r\n      color:#60a0ff;\r\n  }\r\n  \r\n  \r\n  \r\n  *[_ngcontent-%COMP%]:focus {\r\n      outline: none;\r\n  }\r\n  \r\n  #icon[_ngcontent-%COMP%] {\r\n    width:90%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcmVnaXN0cmFyL3JlZ2lzdHJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0Usa0NBQWtDO0lBQ2xDLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLGNBQWM7RUFDaEI7O0VBSUEsY0FBYzs7RUFFZDtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7RUFDZjs7RUFFQTtJQUVFLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFFWix5Q0FBeUM7SUFDekMsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2Isa0JBQWtCO0lBRWxCLDRCQUE0QjtFQUM5Qjs7RUFJQSxTQUFTOztFQUVUO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxnQ0FBZ0M7RUFDbEM7O0VBSUEsbUJBQW1COztFQUVuQjtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsZUFBZTtJQUVmLDhDQUE4QztJQUU5Qyw4QkFBOEI7SUFDOUIsMEJBQTBCO0lBSzFCLGdDQUFnQztFQUNsQzs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUVFLDhCQUE4QjtJQUc5QixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVO0lBQ1YseUJBQXlCO0lBS3pCLGdDQUFnQztJQUVoQyw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsZ0NBQWdDO0VBQ2xDOztFQUdBO0lBQ0UsY0FBYztFQUNoQjs7RUFHQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsV0FBVztJQUNYLFVBQVU7SUFDVix5QkFBeUI7SUFLekIsZ0NBQWdDO0lBRWhDLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixnQ0FBZ0M7RUFDbEM7O0VBR0E7SUFDRSxjQUFjO0VBQ2hCOztFQUdBLGFBQWE7O0VBRWI7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVO0lBQ1YseUJBQXlCO0lBS3pCLGdDQUFnQztJQUVoQyw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsZ0NBQWdDO0VBQ2xDOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFJQSxlQUFlOztFQUVmLHVDQUF1Qzs7RUFDdkM7SUFDRSxrQ0FBa0M7SUFDbEMsMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsaUNBQWlDO0lBQ2pDLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFO01BQ0UsVUFBVTtNQUNWLDJDQUEyQztNQUMzQyxtQ0FBbUM7SUFDckM7SUFDQTtNQUNFLFVBQVU7TUFDVix1QkFBdUI7TUFDdkIsZUFBZTtJQUNqQjtFQUNGOztFQUVBO0lBQ0U7TUFDRSxVQUFVO01BQ1YsMkNBQTJDO01BQzNDLG1DQUFtQztJQUNyQztJQUNBO01BQ0UsVUFBVTtNQUNWLHVCQUF1QjtNQUN2QixlQUFlO0lBQ2pCO0VBQ0Y7O0VBRUEsa0NBQWtDOztFQUNsQyw0QkFBNEIsT0FBTyxTQUFTLEVBQUUsRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFOztFQUVsRSxvQkFBb0IsT0FBTyxTQUFTLEVBQUUsRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFOztFQUUxRDtJQUNFLFNBQVM7SUFDVCxrQ0FBa0M7SUFFbEMsMEJBQTBCOztJQUUxQixvQ0FBb0M7SUFFcEMsNEJBQTRCOztJQUU1Qiw2QkFBNkI7SUFFN0IscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsNkJBQTZCO0lBRTdCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLDZCQUE2QjtJQUU3QixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSw2QkFBNkI7SUFFN0IscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsMkJBQTJCO0lBRTNCLG1CQUFtQjtFQUNyQjs7RUFFQSxrQ0FBa0M7O0VBQ2xDO0lBQ0UsY0FBYztJQUNkLE9BQU87SUFDUCxhQUFhO0lBQ2IsUUFBUTtJQUNSLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsV0FBVztJQUNYLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7TUFDSSxhQUFhO0VBQ2pCOztFQUVBLFdBQVc7O0VBRVg7TUFDSSxhQUFhO0VBQ2pCOztFQUVBO0lBQ0UsU0FBUztFQUNYIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vcmVnaXN0cmFyL3JlZ2lzdHJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xyXG4gIH1cclxuICBcclxuICBib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG4gIFxyXG4gIGEge1xyXG4gICAgY29sb3I6ICM5MmJhZGQ7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG4gIFxyXG4gIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDQwcHggOHB4IDEwcHggOHB4OyBcclxuICAgIGNvbG9yOiAjY2NjY2NjO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAvKiBTVFJVQ1RVUkUgKi9cclxuICBcclxuICAud3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAjZm9ybUNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1heC13aWR0aDogNDUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gICNmb3JtRm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RjZThmMTtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAvKiBUQUJTICovXHJcbiAgXHJcbiAgaDIuaW5hY3RpdmUge1xyXG4gICAgY29sb3I6ICNjY2NjY2M7XHJcbiAgfVxyXG4gIFxyXG4gIGgyLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogIzBkMGQwZDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNWZiYWU5O1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAvKiBGT1JNIFRZUE9HUkFQSFkqL1xyXG4gIFxyXG4gIGlucHV0W3R5cGU9YnV0dG9uXSwgaW5wdXRbdHlwZT1zdWJtaXRdLCBpbnB1dFt0eXBlPXJlc2V0XSAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE1cHggODBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSg5NSwxODYsMjMzLDAuNCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsMTg2LDIzMywwLjQpO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgICBtYXJnaW46IDVweCAyMHB4IDQwcHggMjBweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyLCBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIsIGlucHV0W3R5cGU9cmVzZXRdOmhvdmVyICB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzlhY2U3O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPWJ1dHRvbl06YWN0aXZlLCBpbnB1dFt0eXBlPXN1Ym1pdF06YWN0aXZlLCBpbnB1dFt0eXBlPXJlc2V0XTphY3RpdmUgIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjMGQwZDBkO1xyXG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2Y2ZjZmNjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzVmYmFlOTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgaW5wdXRbdHlwZT10ZXh0XTpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogI2NjY2NjYztcclxuICB9XHJcbiAgXHJcblxyXG4gIGlucHV0W3R5cGU9ZW1haWxdIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogIzBkMGQwZDtcclxuICAgIHBhZGRpbmc6IDE1cHggMzJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmNmY2ZjY7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1lbWFpbF06Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNWZiYWU5O1xyXG4gIH1cclxuICBcclxuICBcclxuICBpbnB1dFt0eXBlPWVtYWlsXTpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogI2NjY2NjYztcclxuICB9XHJcblxyXG5cclxuICAvKiBQQVNTV09SRCAqL1xyXG4gIFxyXG4gIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogIzBkMGQwZDtcclxuICAgIHBhZGRpbmc6IDE1cHggMzJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmNmY2ZjY7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNWZiYWU5O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPXBhc3N3b3JkXTpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogI2NjY2NjYztcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyogQU5JTUFUSU9OUyAqL1xyXG4gIFxyXG4gIC8qIFNpbXBsZSBDU1MzIEZhZGUtaW4tZG93biBBbmltYXRpb24gKi9cclxuICAuZmFkZUluRG93biB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICB9XHJcbiAgXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cclxuICBALW1vei1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcbiAgQGtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cclxuICBcclxuICAuZmFkZUluIHtcclxuICAgIG9wYWNpdHk6MDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XHJcbiAgICAtbW96LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG4gICAgYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XHJcbiAgXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xyXG4gIFxyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MXM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjoxcztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjoxcztcclxuICB9XHJcbiAgXHJcbiAgLmZhZGVJbi5maXJzdCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG4gIH1cclxuICBcclxuICAuZmFkZUluLnNlY29uZCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG4gIH1cclxuICBcclxuICAuZmFkZUluLnRoaXJkIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gICAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuOHM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYWRlSW4uZm91cnRoIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxcztcclxuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAxcztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXHJcbiAgLnVuZGVybGluZUhvdmVyOmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogLTEwcHg7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzO1xyXG4gIH1cclxuICBcclxuICAudW5kZXJsaW5lSG92ZXI6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC51bmRlcmxpbmVIb3Zlcjpob3ZlcjphZnRlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICBoMXtcclxuICAgICAgY29sb3I6IzYwYTBmZjtcclxuICB9XHJcbiAgXHJcbiAgLyogT1RIRVJTICovXHJcbiAgXHJcbiAgKjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfSBcclxuICBcclxuICAjaWNvbiB7XHJcbiAgICB3aWR0aDo5MCU7XHJcbiAgfSJdfQ== */"];



/***/ }),

/***/ "./src/app/admin/registrar/registrar.component.ngfactory.js":
/*!******************************************************************!*\
  !*** ./src/app/admin/registrar/registrar.component.ngfactory.js ***!
  \******************************************************************/
/*! exports provided: RenderType_RegistrarComponent, View_RegistrarComponent_0, View_RegistrarComponent_Host_0, RegistrarComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_RegistrarComponent", function() { return RenderType_RegistrarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RegistrarComponent_0", function() { return View_RegistrarComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RegistrarComponent_Host_0", function() { return View_RegistrarComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarComponentNgFactory", function() { return RegistrarComponentNgFactory; });
/* harmony import */ var _registrar_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registrar.component.css.shim.ngstyle */ "./src/app/admin/registrar/registrar.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _registrar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registrar.component */ "./src/app/admin/registrar/registrar.component.ts");
/* harmony import */ var _services_registrar_registrar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/registrar/registrar.service */ "./src/app/services/registrar/registrar.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_RegistrarComponent = [_registrar_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_RegistrarComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_RegistrarComponent, data: {} });

function View_RegistrarComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 52, "div", [["class", "wrapper fadeInDown"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 51, "div", [["id", "formContent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["class", "fadeIn first"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "img", [["alt", "User Icon"], ["id", "icon"], ["src", "assets/imagenes/Logo COPRISED 2017 Horizontal Transparente - Copy.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 3, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "div", [["class", "col-md-12 mx-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Crear nuevo usuario "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 37, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.saveUser() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_bh"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 4210688, [["myform", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 7, "input", [["autofocus", ""], ["class", "fadeIn first"], ["id", "login"], ["name", "nombres"], ["placeholder", "Nombres"], ["required", ""], ["type", "text"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.user.nombres = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 7, "input", [["class", "fadeIn second"], ["id", "login"], ["name", "apellidos"], ["placeholder", "Apellidos"], ["required", ""], ["type", "text"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.user.apellidos = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 7, "input", [["class", "fadeIn third"], ["id", "login"], ["name", "email"], ["placeholder", "Email"], ["required", ""], ["type", "email"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.user.email = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 7, "input", [["class", "fadeIn fourth"], ["id", "password"], ["name", "password"], ["placeholder", "Contrase\u00F1a"], ["required", ""], ["type", "password"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.user.password = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 0, "input", [["class", "fadeIn fifth"], ["id", "login-botton"], ["type", "submit"], ["value", "Crear Usuario"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 5, "div", [["id", "formFooter"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 4, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 3, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 2, "a", [["class", "underlineHover"], ["routerLink", "/admin/Login"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Salir"]))], function (_ck, _v) { var _co = _v.component; var currVal_15 = ""; _ck(_v, 16, 0, currVal_15); var currVal_16 = "nombres"; var currVal_17 = _co.user.nombres; _ck(_v, 19, 0, currVal_16, currVal_17); var currVal_26 = ""; _ck(_v, 24, 0, currVal_26); var currVal_27 = "apellidos"; var currVal_28 = _co.user.apellidos; _ck(_v, 27, 0, currVal_27, currVal_28); var currVal_37 = ""; _ck(_v, 32, 0, currVal_37); var currVal_38 = "email"; var currVal_39 = _co.user.email; _ck(_v, 35, 0, currVal_38, currVal_39); var currVal_48 = ""; _ck(_v, 40, 0, currVal_48); var currVal_49 = "password"; var currVal_50 = _co.user.password; _ck(_v, 43, 0, currVal_49, currVal_50); var currVal_53 = "/admin/Login"; _ck(_v, 51, 0, currVal_53); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassPending; _ck(_v, 9, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).required ? "" : null); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassUntouched; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassTouched; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassPristine; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassDirty; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassValid; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassInvalid; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassPending; _ck(_v, 14, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_18 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).required ? "" : null); var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassUntouched; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassTouched; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassPristine; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassDirty; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassValid; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassInvalid; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassPending; _ck(_v, 22, 0, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25); var currVal_29 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).required ? "" : null); var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassUntouched; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassTouched; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassPristine; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassDirty; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassValid; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassInvalid; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassPending; _ck(_v, 30, 0, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36); var currVal_40 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).required ? "" : null); var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassUntouched; var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassTouched; var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassPristine; var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassDirty; var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassValid; var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassInvalid; var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassPending; _ck(_v, 38, 0, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47); var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51).target; var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51).href; _ck(_v, 50, 0, currVal_51, currVal_52); }); }
function View_RegistrarComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-registrar", [], null, null, null, View_RegistrarComponent_0, RenderType_RegistrarComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _registrar_component__WEBPACK_IMPORTED_MODULE_5__["RegistrarComponent"], [_services_registrar_registrar_service__WEBPACK_IMPORTED_MODULE_6__["RegistrarService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var RegistrarComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-registrar", _registrar_component__WEBPACK_IMPORTED_MODULE_5__["RegistrarComponent"], View_RegistrarComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/admin/registrar/registrar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/registrar/registrar.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarComponent", function() { return RegistrarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_registrar_registrar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/registrar/registrar.service */ "./src/app/services/registrar/registrar.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var RegistrarComponent = /** @class */ (function () {
    function RegistrarComponent(registrarServices, router) {
        this.registrarServices = registrarServices;
        this.router = router;
        this.user = {
            id: 0,
            nombres: '',
            apellidos: '',
            email: '',
            password: '',
            created_at: new Date()
        };
    }
    RegistrarComponent.prototype.ngOnInit = function () {
    };
    RegistrarComponent.prototype.saveUser = function () {
        var _this = this;
        delete this.user.id;
        delete this.user.created_at;
        this.registrarServices.saveUser(this.user).subscribe(function (res) {
            console.log(res);
            localStorage.setItem('token', res.token);
            _this.router.navigate(['/admin/dashboard']);
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this.router.navigate(['/admin']);
                }
            }
            console.error(err);
        });
    };
    return RegistrarComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

var routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css.shim.ngstyle.js":
/*!***************************************************!*\
  !*** ./src/app/app.component.css.shim.ngstyle.js ***!
  \***************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"];



/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _app_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.css.shim.ngstyle */ "./src/app/app.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_AppComponent = [_app_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'coprised';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ngfactory.js":
/*!*****************************************!*\
  !*** ./src/app/app.module.ngfactory.js ***!
  \*****************************************/
/*! exports provided: AppModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function() { return AppModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/angular-bootstrap-md/angular-bootstrap-md.ngfactory */ "./node_modules/angular-bootstrap-md/angular-bootstrap-md.ngfactory.js");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _admin_admin_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin.component.ngfactory */ "./src/app/admin/admin.component.ngfactory.js");
/* harmony import */ var _admin_login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/login/login.component.ngfactory */ "./src/app/admin/login/login.component.ngfactory.js");
/* harmony import */ var _admin_registrar_registrar_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/registrar/registrar.component.ngfactory */ "./src/app/admin/registrar/registrar.component.ngfactory.js");
/* harmony import */ var _admin_dashboard_dashboard_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/dashboard/dashboard.component.ngfactory */ "./src/app/admin/dashboard/dashboard.component.ngfactory.js");
/* harmony import */ var _admin_dashboard_usuarios_usuarios_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/dashboard/usuarios/usuarios.component.ngfactory */ "./src/app/admin/dashboard/usuarios/usuarios.component.ngfactory.js");
/* harmony import */ var _admin_dashboard_analisis_analisis_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/dashboard/analisis/analisis.component.ngfactory */ "./src/app/admin/dashboard/analisis/analisis.component.ngfactory.js");
/* harmony import */ var _admin_dashboard_analisis_tablas_tablas_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/dashboard/analisis/tablas/tablas.component.ngfactory */ "./src/app/admin/dashboard/analisis/tablas/tablas.component.ngfactory.js");
/* harmony import */ var _admin_dashboard_analisis_ingresar_ingresar_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/dashboard/analisis/ingresar/ingresar.component.ngfactory */ "./src/app/admin/dashboard/analisis/ingresar/ingresar.component.ngfactory.js");
/* harmony import */ var _admin_dashboard_administracion_administracion_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/dashboard/administracion/administracion.component.ngfactory */ "./src/app/admin/dashboard/administracion/administracion.component.ngfactory.js");
/* harmony import */ var _main_main_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./main/main.component.ngfactory */ "./src/app/main/main.component.ngfactory.js");
/* harmony import */ var _main_inicio_inicio_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./main/inicio/inicio.component.ngfactory */ "./src/app/main/inicio/inicio.component.ngfactory.js");
/* harmony import */ var _main_tramites_tramites_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./main/tramites/tramites.component.ngfactory */ "./src/app/main/tramites/tramites.component.ngfactory.js");
/* harmony import */ var _main_coordinacion_coordinacion_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./main/coordinacion/coordinacion.component.ngfactory */ "./src/app/main/coordinacion/coordinacion.component.ngfactory.js");
/* harmony import */ var _main_transparencia_transparencia_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./main/transparencia/transparencia.component.ngfactory */ "./src/app/main/transparencia/transparencia.component.ngfactory.js");
/* harmony import */ var _main_mision_mision_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./main/mision/mision.component.ngfactory */ "./src/app/main/mision/mision.component.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_token_token_interceptor_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/token/token-interceptor.service */ "./src/app/services/token/token-interceptor.service.ts");
/* harmony import */ var _services_registrar_registrar_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/registrar/registrar.service */ "./src/app/services/registrar/registrar.service.ts");
/* harmony import */ var _services_tramites_tramites_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/tramites/tramites.service */ "./src/app/services/tramites/tramites.service.ts");
/* harmony import */ var _admin_auth_guard__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./admin/auth.guard */ "./src/app/admin/auth.guard.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_login_login_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./admin/login/login.component */ "./src/app/admin/login/login.component.ts");
/* harmony import */ var _admin_registrar_registrar_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./admin/registrar/registrar.component */ "./src/app/admin/registrar/registrar.component.ts");
/* harmony import */ var _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./admin/dashboard/dashboard.component */ "./src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _admin_dashboard_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./admin/dashboard/usuarios/usuarios.component */ "./src/app/admin/dashboard/usuarios/usuarios.component.ts");
/* harmony import */ var _admin_dashboard_analisis_analisis_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./admin/dashboard/analisis/analisis.component */ "./src/app/admin/dashboard/analisis/analisis.component.ts");
/* harmony import */ var _admin_dashboard_analisis_tablas_tablas_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./admin/dashboard/analisis/tablas/tablas.component */ "./src/app/admin/dashboard/analisis/tablas/tablas.component.ts");
/* harmony import */ var _admin_dashboard_analisis_ingresar_ingresar_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./admin/dashboard/analisis/ingresar/ingresar.component */ "./src/app/admin/dashboard/analisis/ingresar/ingresar.component.ts");
/* harmony import */ var _admin_dashboard_administracion_administracion_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./admin/dashboard/administracion/administracion.component */ "./src/app/admin/dashboard/administracion/administracion.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _main_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./main/inicio/inicio.component */ "./src/app/main/inicio/inicio.component.ts");
/* harmony import */ var _main_tramites_tramites_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./main/tramites/tramites.component */ "./src/app/main/tramites/tramites.component.ts");
/* harmony import */ var _main_coordinacion_coordinacion_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./main/coordinacion/coordinacion.component */ "./src/app/main/coordinacion/coordinacion.component.ts");
/* harmony import */ var _main_transparencia_transparencia_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./main/transparencia/transparencia.component */ "./src/app/main/transparencia/transparencia.component.ts");
/* harmony import */ var _main_mision_mision_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./main/mision/mision.component */ "./src/app/main/mision/mision.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _admin_admin_routing_module__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./admin/admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var ng2_file_upload_file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ng2-file-upload/file-upload/file-upload.module */ "./node_modules/ng2-file-upload/file-upload/file-upload.module.js");
/* harmony import */ var ng2_file_upload_file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _main_main_routing_module__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./main/main-routing.module */ "./src/app/main/main-routing.module.ts");
/* harmony import */ var _main_main_module__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./main/main.module */ "./src/app/main/main.module.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






















































var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["BsDropdownContainerComponentNgFactory"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ModalBackdropComponentNgFactory"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ModalContainerComponentNgFactory"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["TooltipContainerComponentNgFactory"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["PopoverContainerComponentNgFactory"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MdbTablePaginationComponentNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NgbAlertNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NgbDatepickerNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵtNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵuNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵmNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵpNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵqNgFactory"], _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_5__["ɵEmptyOutletComponentNgFactory"], _admin_admin_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["AdminComponentNgFactory"], _admin_login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["LoginComponentNgFactory"], _admin_registrar_registrar_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RegistrarComponentNgFactory"], _admin_dashboard_dashboard_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["DashboardComponentNgFactory"], _admin_dashboard_usuarios_usuarios_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["UsuariosComponentNgFactory"], _admin_dashboard_analisis_analisis_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["AnalisisComponentNgFactory"], _admin_dashboard_analisis_tablas_tablas_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["TablasComponentNgFactory"], _admin_dashboard_analisis_ingresar_ingresar_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["IngresarComponentNgFactory"], _admin_dashboard_administracion_administracion_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["AdministracionComponentNgFactory"], _main_main_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["MainComponentNgFactory"], _main_inicio_inicio_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["InicioComponentNgFactory"], _main_tramites_tramites_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["TramitesComponentNgFactory"], _main_coordinacion_coordinacion_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__["CoordinacionComponentNgFactory"], _main_transparencia_transparencia_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["TransparenciaComponentNgFactory"], _main_mision_mision_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__["MisionComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_s"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_h"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_q"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_22__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_22__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_22__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["ɵDomRendererFactory2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["NavbarService"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["NavbarService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["CarouselConfig"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["CarouselConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_forms_forms_j"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_forms_forms_j"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["MdbTableService"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["MdbTableService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["ɵf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["ɵf"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["ɵe"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["ɵe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["ɵf"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["BsDropdownState"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["BsDropdownState"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["MDBModalService"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["MDBModalService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["ɵe"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["TooltipConfig"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["TooltipConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["PopoverConfig"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["PopoverConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbModal"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["ɵv"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbModalConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_27__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_27__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_27__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_27__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_27__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_27__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_27__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_27__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_n"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_27__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_27__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p1_0, p2_0) { return [p0_0, p1_0, p2_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_27__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_22__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HTTP_INTERCEPTORS"], function (p0_0, p1_0, p1_1) { return [p0_0, new _services_token_token_interceptor_service__WEBPACK_IMPORTED_MODULE_29__["TokenInterceptorService"](p1_0, p1_1)]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_common_http_http_h"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _services_registrar_registrar_service__WEBPACK_IMPORTED_MODULE_30__["RegistrarService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_28__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _services_tramites_tramites_service__WEBPACK_IMPORTED_MODULE_31__["TramitesService"], _services_tramites_tramites_service__WEBPACK_IMPORTED_MODULE_31__["TramitesService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _admin_auth_guard__WEBPACK_IMPORTED_MODULE_32__["AuthGuard"], _admin_auth_guard__WEBPACK_IMPORTED_MODULE_32__["AuthGuard"], [_services_registrar_registrar_service__WEBPACK_IMPORTED_MODULE_30__["RegistrarService"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_22__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_b"](), _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_b"](), _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0, p2_0, p3_0) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_i"](p1_0), _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_i"](p2_0), _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_i"](p3_0)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["ButtonsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["ButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["WavesModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["WavesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["InputsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["InputsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["NavbarModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["NavbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["DropdownModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["DropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["CarouselModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["CarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["ChartsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["ChartsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["CollapseModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["CollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["ModalModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["ModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["TooltipModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["TooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["PopoverModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["PopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["IconsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["IconsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["CardsFreeModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["CardsFreeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_forms_forms_bc"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_forms_forms_bc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["CheckboxModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["CheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["TableModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["TableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["BadgeModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["BadgeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["BreadcrumbModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["BreadcrumbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["InputUtilitiesModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["InputUtilitiesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["StickyHeaderModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["StickyHeaderModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["MDBRootModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["MDBRootModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbAccordionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbProgressbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbRatingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbTabsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbTimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbTypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_27__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_27__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_27__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_27__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_22__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_22__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_22__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_22__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_22__["LocationStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_27__["ROUTES"], function () { return [[{ path: "", redirectTo: "/main", pathMatch: "full" }], [{ path: "admin", component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_33__["AdminComponent"], children: [{ path: "", component: _admin_login_login_component__WEBPACK_IMPORTED_MODULE_34__["LoginComponent"] }, { path: "Login", component: _admin_login_login_component__WEBPACK_IMPORTED_MODULE_34__["LoginComponent"] }, { path: "registrar", component: _admin_registrar_registrar_component__WEBPACK_IMPORTED_MODULE_35__["RegistrarComponent"] }, { path: "dashboard", component: _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_36__["DashboardComponent"], children: [{ path: "usuarios", component: _admin_dashboard_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_37__["UsuariosComponent"] }, { path: "analisis", component: _admin_dashboard_analisis_analisis_component__WEBPACK_IMPORTED_MODULE_38__["AnalisisComponent"], children: [{ path: "", component: _admin_dashboard_analisis_tablas_tablas_component__WEBPACK_IMPORTED_MODULE_39__["TablasComponent"] }, { path: "tablas", component: _admin_dashboard_analisis_tablas_tablas_component__WEBPACK_IMPORTED_MODULE_39__["TablasComponent"] }, { path: "ingresar", component: _admin_dashboard_analisis_ingresar_ingresar_component__WEBPACK_IMPORTED_MODULE_40__["IngresarComponent"] }] }, { path: "administracion", component: _admin_dashboard_administracion_administracion_component__WEBPACK_IMPORTED_MODULE_41__["AdministracionComponent"] }], canActivate: [_admin_auth_guard__WEBPACK_IMPORTED_MODULE_32__["AuthGuard"]] }] }], [{ path: "main", component: _main_main_component__WEBPACK_IMPORTED_MODULE_42__["MainComponent"], children: [{ path: "", component: _main_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_43__["InicioComponent"] }, { path: "inicio", component: _main_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_43__["InicioComponent"] }, { path: "tramites", component: _main_tramites_tramites_component__WEBPACK_IMPORTED_MODULE_44__["TramitesComponent"] }, { path: "coordinacion", component: _main_coordinacion_coordinacion_component__WEBPACK_IMPORTED_MODULE_45__["CoordinacionComponent"] }, { path: "transparencia", component: _main_transparencia_transparencia_component__WEBPACK_IMPORTED_MODULE_46__["TransparenciaComponent"] }, { path: "mision", component: _main_mision_mision_component__WEBPACK_IMPORTED_MODULE_47__["MisionComponent"] }] }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_27__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_27__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_27__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_27__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_27__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_48__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_48__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _admin_admin_routing_module__WEBPACK_IMPORTED_MODULE_49__["AdminRoutingModule"], _admin_admin_routing_module__WEBPACK_IMPORTED_MODULE_49__["AdminRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_file_upload_file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_50__["FileUploadModule"], ng2_file_upload_file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_50__["FileUploadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _admin_admin_module__WEBPACK_IMPORTED_MODULE_51__["AdminModule"], _admin_admin_module__WEBPACK_IMPORTED_MODULE_51__["AdminModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _main_main_routing_module__WEBPACK_IMPORTED_MODULE_52__["MainRoutingModule"], _main_main_routing_module__WEBPACK_IMPORTED_MODULE_52__["MainRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _main_main_module__WEBPACK_IMPORTED_MODULE_53__["MainModule"], _main_main_module__WEBPACK_IMPORTED_MODULE_53__["MainModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_24__["BsDropdownConfig"], { autoClose: true }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", [])]); });



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());



/***/ }),

/***/ "./src/app/main/banner/banner.component.css.shim.ngstyle.js":
/*!******************************************************************!*\
  !*** ./src/app/main/banner/banner.component.css.shim.ngstyle.js ***!
  \******************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".imagen[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    margin-top: 4em;\r\n}\r\n\r\n*[_ngcontent-%COMP%]{\r\n  padding:0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9tYWluL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiA0ZW07XHJcbn1cclxuXHJcbip7XHJcbiAgcGFkZGluZzowcHg7XHJcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/main/banner/banner.component.ngfactory.js":
/*!***********************************************************!*\
  !*** ./src/app/main/banner/banner.component.ngfactory.js ***!
  \***********************************************************/
/*! exports provided: RenderType_BannerComponent, View_BannerComponent_0, View_BannerComponent_Host_0, BannerComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_BannerComponent", function() { return RenderType_BannerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BannerComponent_0", function() { return View_BannerComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BannerComponent_Host_0", function() { return View_BannerComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponentNgFactory", function() { return BannerComponentNgFactory; });
/* harmony import */ var _banner_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banner.component.css.shim.ngstyle */ "./src/app/main/banner/banner.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./banner.component */ "./src/app/main/banner/banner.component.ts");
/* harmony import */ var _services_images_images_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/images/images.service */ "./src/app/services/images/images.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_BannerComponent = [_banner_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_BannerComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_BannerComponent, data: {} });

function View_BannerComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "col-sm-12 col-md-12 col-lg-12 col-xl-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [["alt", "Responsive image"], ["class", "imagen img-fluid"]], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "assets/imagenes/", _v.context.$implicit.image, ""); _ck(_v, 1, 0, currVal_0); }); }
function View_BannerComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BannerComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.imagenes; _ck(_v, 1, 0, currVal_0); }, null); }
function View_BannerComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-banner", [], null, null, null, View_BannerComponent_0, RenderType_BannerComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _banner_component__WEBPACK_IMPORTED_MODULE_3__["BannerComponent"], [_services_images_images_service__WEBPACK_IMPORTED_MODULE_4__["ImagesService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var BannerComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-banner", _banner_component__WEBPACK_IMPORTED_MODULE_3__["BannerComponent"], View_BannerComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/main/banner/banner.component.ts":
/*!*************************************************!*\
  !*** ./src/app/main/banner/banner.component.ts ***!
  \*************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_images_images_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/images/images.service */ "./src/app/services/images/images.service.ts");


var BannerComponent = /** @class */ (function () {
    function BannerComponent(service) {
        this.service = service;
        this.imagenes = [];
    }
    BannerComponent.prototype.ngOnInit = function () {
        this.getImagenes();
    };
    BannerComponent.prototype.getImagenes = function () {
        var _this = this;
        this.service.getImagesb().subscribe(function (res) {
            _this.imagenes = res;
        }, function (err) { return console.error(err); });
    };
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/main/cards/cards.component.css.shim.ngstyle.js":
/*!****************************************************************!*\
  !*** ./src/app/main/cards/cards.component.css.shim.ngstyle.js ***!
  \****************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["@import url('https://fonts.googleapis.com/css?family=Indie+Flower');\n\nbody[_ngcontent-%COMP%] {\r\n  font-family: 'Indie Flower', cursive;\r\n}\n.container[_ngcontent-%COMP%] {\r\n  max-width: 1170px;\r\n  width: 100%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\n.content[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n}\n.left_sidebar[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  float: left;\r\n  width: 30%;\r\n  max-width: 300px;\r\n}\n.main_content[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  float: left;\r\n  width: 70%;\r\n  background-color: #DDEFF7;\r\n}\n\n.widget--facebook--container[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  border: 1px solid #000;\r\n}\n.widget-facebook[_ngcontent-%COMP%] {\r\n  height: 500px;\r\n}\n.widget-facebook[_ngcontent-%COMP%]   .facebook_iframe[_ngcontent-%COMP%] {\r\n  border: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jYXJkcy9jYXJkcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFRQSxtRUFBbUU7QUFSbkU7Ozs7Ozs7Q0FPQztBQUVEO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7QUFDQSxpREFBaUQ7QUFDakQ7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL21haW4vY2FyZHMvY2FyZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLmNhcmQtZGVja1xyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4OyBcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4qL1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUluZGllK0Zsb3dlcicpO1xyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogJ0luZGllIEZsb3dlcicsIGN1cnNpdmU7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiAxMTcwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbi5jb250ZW50IHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubGVmdF9zaWRlYmFyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4ubWFpbl9jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRERFRkY3O1xyXG59XHJcbi8qIC0tLS0tLS0gYmVnaW4gV2lkZ2V0IEZhY2Vib29rIC0tLS0tLS0tLS0tLS0tICovXHJcbi53aWRnZXQtLWZhY2Vib29rLS1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxufVxyXG5cclxuLndpZGdldC1mYWNlYm9vayB7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuLndpZGdldC1mYWNlYm9vayAuZmFjZWJvb2tfaWZyYW1lIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/main/cards/cards.component.ngfactory.js":
/*!*********************************************************!*\
  !*** ./src/app/main/cards/cards.component.ngfactory.js ***!
  \*********************************************************/
/*! exports provided: RenderType_CardsComponent, View_CardsComponent_0, View_CardsComponent_Host_0, CardsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CardsComponent", function() { return RenderType_CardsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CardsComponent_0", function() { return View_CardsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CardsComponent_Host_0", function() { return View_CardsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponentNgFactory", function() { return CardsComponentNgFactory; });
/* harmony import */ var _cards_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards.component.css.shim.ngstyle */ "./src/app/main/cards/cards.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cards.component */ "./src/app/main/cards/cards.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_CardsComponent = [_cards_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CardsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CardsComponent, data: {} });

function View_CardsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 23, "div", [["class", "card-deck col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 12, "div", [["class", "card mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "div", [["class", "view overlay"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "img", [["alt", "Card image cap"], ["class", "card-img-top"], ["src", "../../../assets/imagenes/atencion-usario.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "a", [["href", "#!"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "div", [["class", "mask rgba-white-slight"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 7, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "h4", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Informaci\u00F3n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Si tiene alguna duda sobre tramites o informacion de direcciones no dudes en llamar al telefono que aparese en la imagen "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 2, "button", [["class", "btn btn-light-blue btn-md"], ["routerLink", "/main/tramites"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Tramites y servicios"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 2, "div", [["class", "card mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 0, "a", [["class", "twitter-timeline"], ["data-height", "600"], ["data-width", "700"], ["href", "https://twitter.com/coprisedoficial"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 6, "div", [["class", "card mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 5, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 3, "div", [["class", "fb-page"], ["data-adapt-container-width", "true"], ["data-height", "600"], ["data-hide-cover", "false"], ["data-href", "https://www.facebook.com/coprised"], ["data-show-facepile", "true"], ["data-small-header", "true"], ["data-tabs", "timeline"], ["data-width", "300"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 2, "blockquote", [["cite", "https://www.facebook.com/coprised"], ["class", "fb-xfbml-parse-ignore"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "a", [["href", "https://www.facebook.com/coprised"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Coprised"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 0, "iframe", [["allow", "encrypted-media"], ["allowTransparency", "true"], ["frameborder", "0"], ["height", "600"], ["scrolling", "no"], ["src", "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcoprised&tabs=timeline&width=350&height=600&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"], ["style", "border:none;overflow:hidden"], ["width", "350"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 0, "div", [["id", "fb-root"]], null, null, null, null, null))], function (_ck, _v) { var currVal_0 = "/main/tramites"; _ck(_v, 12, 0, currVal_0); }, null); }
function View_CardsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-cards", [], null, null, null, View_CardsComponent_0, RenderType_CardsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _cards_component__WEBPACK_IMPORTED_MODULE_3__["CardsComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CardsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-cards", _cards_component__WEBPACK_IMPORTED_MODULE_3__["CardsComponent"], View_CardsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/main/cards/cards.component.ts":
/*!***********************************************!*\
  !*** ./src/app/main/cards/cards.component.ts ***!
  \***********************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var CardsComponent = /** @class */ (function () {
    function CardsComponent() {
    }
    CardsComponent.prototype.ngOnInit = function () {
    };
    return CardsComponent;
}());



/***/ }),

/***/ "./src/app/main/comisionado/comisionado.component.css.shim.ngstyle.js":
/*!****************************************************************************!*\
  !*** ./src/app/main/comisionado/comisionado.component.css.shim.ngstyle.js ***!
  \****************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".img-circle[_ngcontent-%COMP%]\r\n{\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]\r\n{\r\n    vertical-align: middle;\r\n    border-style: none;\r\n}\r\n\r\n.text-center[_ngcontent-%COMP%]\r\n{\r\n    text-align: center!important;\r\n}\r\n\r\np[_ngcontent-%COMP%]\r\n{\r\n    margin-top: 0;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.texto-encabezado[_ngcontent-%COMP%] {\r\n    font-family: 'Anton', sans-serif;\r\n    font-size: 25px;\r\n}\r\n\r\n*[_ngcontent-%COMP%], [_ngcontent-%COMP%]::after, [_ngcontent-%COMP%]::before\r\n{\r\n    box-sizing: border-box;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21pc2lvbmFkby9jb21pc2lvbmFkby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksNEJBQTRCO0FBQ2hDOztBQUVBOztJQUVJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9tYWluL2NvbWlzaW9uYWRvL2NvbWlzaW9uYWRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWNpcmNsZVxyXG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuaW1nXHJcbntcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlclxyXG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xyXG59XHJcblxyXG5wXHJcbntcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4udGV4dG8tZW5jYWJlemFkbyB7XHJcbiAgICBmb250LWZhbWlseTogJ0FudG9uJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuKiwgOjphZnRlciwgOjpiZWZvcmVcclxue1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuIl19 */"];



/***/ }),

/***/ "./src/app/main/comisionado/comisionado.component.ngfactory.js":
/*!*********************************************************************!*\
  !*** ./src/app/main/comisionado/comisionado.component.ngfactory.js ***!
  \*********************************************************************/
/*! exports provided: RenderType_ComisionadoComponent, View_ComisionadoComponent_0, View_ComisionadoComponent_Host_0, ComisionadoComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ComisionadoComponent", function() { return RenderType_ComisionadoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ComisionadoComponent_0", function() { return View_ComisionadoComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ComisionadoComponent_Host_0", function() { return View_ComisionadoComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComisionadoComponentNgFactory", function() { return ComisionadoComponentNgFactory; });
/* harmony import */ var _comisionado_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comisionado.component.css.shim.ngstyle */ "./src/app/main/comisionado/comisionado.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/angular-bootstrap-md/angular-bootstrap-md.ngfactory */ "./node_modules/angular-bootstrap-md/angular-bootstrap-md.ngfactory.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _comisionado_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comisionado.component */ "./src/app/main/comisionado/comisionado.component.ts");
/* harmony import */ var _services_images_images_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/images/images.service */ "./src/app/services/images/images.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_ComisionadoComponent = [_comisionado_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ComisionadoComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ComisionadoComponent, data: {} });

function View_ComisionadoComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "view overlay waves-light"], ["mdbWavesEffect", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).click($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["WavesDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "img", [["alt", "Sample image for first version of blog listing"], ["class", "img-fluid wow fadeInUp"], ["data-wow-delay", "0.5s"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "div", [["class", "mask rgba-white-slight"]], null, null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "assets\\imagenes\\", _v.context.$implicit.image, ""); _ck(_v, 2, 0, currVal_0); }); }
function View_ComisionadoComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 24, "div", [["class", "jumbotron text-center hoverable p-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 23, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "div", [["class", "col-md-4 offset-md-1 mx-3 my-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ComisionadoComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 19, "div", [["class", "col-md-7 text-md-left ml-3 mt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 8, "a", [["class", "blue-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 4, "h5", [["class", "h5 pb-1 wow fadeInUp"], ["data-wow-delay", "0.5s"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "mdb-icon", [["far", ""], ["icon", "user-circle pb-1"]], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MdbIconComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MdbIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MdbIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { icon: [0, "icon"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["FarDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Comisionado estatal "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "h6", [["class", "h6 pb-1 wow fadeInUp"], ["data-wow-delay", "0.5s"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 0, "i", [["class", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Dr. Cresencio Beltran Beltran"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 2, "h1", [["class", "h1 mb-4 wow fadeInUp"], ["data-wow-delay", "0.5s"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Conocenos"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "p", [["class", "font-weight-normal wow fadeInUp text-justify"], ["data-wow-delay", "0.5s"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["En la COPRISED trabajamos personas que servimos con agrado, nuestra funci\u00F3n es una parte fundamental para cuidar la salud de los tamaulipecos; estamos a la orden de todos los usuarios y siempre con la disposici\u00F3n de solucionar las nescesidades."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 4, "a", [["class", "wow fadeInUp"], ["color", "primary"], ["data-wow-delay", "0.5s"], ["mdbBtn", ""], ["mdbWavesEffect", ""], ["routerLink", "/main/mision"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).click($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 81920, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MdbBtnDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { color: [0, "color"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["WavesDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Mision y Vision"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.imagenes; _ck(_v, 4, 0, currVal_0); var currVal_1 = "user-circle pb-1"; _ck(_v, 9, 0, currVal_1); var currVal_4 = "primary"; _ck(_v, 21, 0, currVal_4); var currVal_5 = "/main/mision"; _ck(_v, 23, 0, currVal_5); }, function (_ck, _v) { var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).target; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).href; _ck(_v, 20, 0, currVal_2, currVal_3); }); }
function View_ComisionadoComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-comisionado", [], null, null, null, View_ComisionadoComponent_0, RenderType_ComisionadoComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _comisionado_component__WEBPACK_IMPORTED_MODULE_6__["ComisionadoComponent"], [_services_images_images_service__WEBPACK_IMPORTED_MODULE_7__["ImagesService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ComisionadoComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-comisionado", _comisionado_component__WEBPACK_IMPORTED_MODULE_6__["ComisionadoComponent"], View_ComisionadoComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/main/comisionado/comisionado.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/comisionado/comisionado.component.ts ***!
  \***********************************************************/
/*! exports provided: ComisionadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComisionadoComponent", function() { return ComisionadoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_images_images_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/images/images.service */ "./src/app/services/images/images.service.ts");


var ComisionadoComponent = /** @class */ (function () {
    function ComisionadoComponent(service) {
        this.service = service;
        this.imagenes = [];
    }
    ComisionadoComponent.prototype.ngOnInit = function () {
        this.getImagenes();
    };
    ComisionadoComponent.prototype.getImagenes = function () {
        var _this = this;
        this.service.getImagesc().subscribe(function (res) {
            _this.imagenes = res;
        }, function (err) { return console.error(err); });
    };
    return ComisionadoComponent;
}());



/***/ }),

/***/ "./src/app/main/coordinacion/coordinacion.component.css.shim.ngstyle.js":
/*!******************************************************************************!*\
  !*** ./src/app/main/coordinacion/coordinacion.component.css.shim.ngstyle.js ***!
  \******************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".text-principal[_ngcontent-%COMP%]{\r\n  \r\n    text-align: center; \r\n    font-family: Arial Black; \r\n    font-weight: bold; \r\n    font-size: 30px; \r\n    color:  #ffffff; \r\n\r\n}\r\n.text-pricipald[_ngcontent-%COMP%]{\r\n    text-align: center; \r\n    font-family: Arial black; \r\n    font-weight:bold; \r\n    font-size: 30px; \r\n    color: #ffffff; \r\n}\r\n.text-s[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n    padding-top: 10px;\r\n}\r\n\r\n@media screen and (max-width: 700px){\r\n        .text-principal[_ngcontent-%COMP%]{\r\n        font-size:20px;\r\n        }\r\n        .text-s[_ngcontent-%COMP%]{\r\n        font-size:22px;\r\n        }\r\n        }\r\n\r\n@media screen and (max-width: 400px){\r\n        .text-pricipal[_ngcontent-%COMP%]{\r\n        font-size:20px;\r\n        }\r\n        .text-s[_ngcontent-%COMP%]{\r\n        font-size:22px;\r\n        }\r\n        }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb29yZGluYWNpb24vY29vcmRpbmFjaW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUVBLHdCQUF3QjtBQUVwQjtRQUNJO1FBQ0EsY0FBYztRQUNkO1FBQ0E7UUFDQSxjQUFjO1FBQ2Q7UUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtRQUNBO1FBQ0EsY0FBYztRQUNkO1FBQ0E7UUFDQSxjQUFjO1FBQ2Q7UUFDQSIsImZpbGUiOiJzcmMvYXBwL21haW4vY29vcmRpbmFjaW9uL2Nvb3JkaW5hY2lvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtcHJpbmNpcGFse1xyXG4gIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCBCbGFjazsgXHJcbiAgICBmb250LXdlaWdodDogYm9sZDsgXHJcbiAgICBmb250LXNpemU6IDMwcHg7IFxyXG4gICAgY29sb3I6ICAjZmZmZmZmOyBcclxuXHJcbn1cclxuLnRleHQtcHJpY2lwYWxke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCBibGFjazsgXHJcbiAgICBmb250LXdlaWdodDpib2xkOyBcclxuICAgIGZvbnQtc2l6ZTogMzBweDsgXHJcbiAgICBjb2xvcjogI2ZmZmZmZjsgXHJcbn1cclxuXHJcbi50ZXh0LXN7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLyogUG9yIGRlYmFqbyBkZSA3MDBweCAqL1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KXtcclxuICAgICAgICAudGV4dC1wcmluY2lwYWx7XHJcbiAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0LXN7XHJcbiAgICAgICAgZm9udC1zaXplOjIycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBQb3IgZGViYWpvIGRlIDQwMHB4ICovXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpe1xyXG4gICAgICAgIC50ZXh0LXByaWNpcGFse1xyXG4gICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dC1ze1xyXG4gICAgICAgIGZvbnQtc2l6ZToyMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICB9Il19 */"];



/***/ }),

/***/ "./src/app/main/coordinacion/coordinacion.component.ngfactory.js":
/*!***********************************************************************!*\
  !*** ./src/app/main/coordinacion/coordinacion.component.ngfactory.js ***!
  \***********************************************************************/
/*! exports provided: RenderType_CoordinacionComponent, View_CoordinacionComponent_0, View_CoordinacionComponent_Host_0, CoordinacionComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CoordinacionComponent", function() { return RenderType_CoordinacionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CoordinacionComponent_0", function() { return View_CoordinacionComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CoordinacionComponent_Host_0", function() { return View_CoordinacionComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordinacionComponentNgFactory", function() { return CoordinacionComponentNgFactory; });
/* harmony import */ var _coordinacion_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coordinacion.component.css.shim.ngstyle */ "./src/app/main/coordinacion/coordinacion.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_nav_menu_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu-nav/menu-nav.component.ngfactory */ "./src/app/main/menu-nav/menu-nav.component.ngfactory.js");
/* harmony import */ var _menu_nav_menu_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu-nav/menu-nav.component */ "./src/app/main/menu-nav/menu-nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _banner_banner_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../banner/banner.component.ngfactory */ "./src/app/main/banner/banner.component.ngfactory.js");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../banner/banner.component */ "./src/app/main/banner/banner.component.ts");
/* harmony import */ var _services_images_images_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/images/images.service */ "./src/app/services/images/images.service.ts");
/* harmony import */ var _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../node_modules/angular-bootstrap-md/angular-bootstrap-md.ngfactory */ "./node_modules/angular-bootstrap-md/angular-bootstrap-md.ngfactory.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _coordinacion_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./coordinacion.component */ "./src/app/main/coordinacion/coordinacion.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 











var styles_CoordinacionComponent = [_coordinacion_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CoordinacionComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CoordinacionComponent, data: {} });

function View_CoordinacionComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "menu-nav", [], null, null, null, _menu_nav_menu_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MenuNavComponent_0"], _menu_nav_menu_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MenuNavComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _menu_nav_menu_nav_component__WEBPACK_IMPORTED_MODULE_3__["MenuNavComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "app-banner", [], null, null, null, _banner_banner_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_BannerComponent_0"], _banner_banner_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_BannerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _banner_banner_component__WEBPACK_IMPORTED_MODULE_6__["BannerComponent"], [_services_images_images_service__WEBPACK_IMPORTED_MODULE_7__["ImagesService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 87, "div", [["class", "container-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 42, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 40, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 39, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 4, "div", [["class", "card-header primary-color-dark text-white d-flex justify-content-center align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 3, "div", [["class", "text-principal "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 2, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "strong", [["class", "text-s "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["OFICINA EN SANTIAGO PAPASQUIARO"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 33, "div", [["class", "card-body primary-color"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 32, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 28, "div", [["class", "col-md-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 27, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 6, "div", [["class", "card-header primary-color-dark d-flex justify-content-center align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 5, "h4", [["class", "text-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 2, "mdb-icon", [["fas", ""], ["icon", "map-marker-alt"]], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MdbIconComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MdbIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["MdbIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { icon: [0, "icon"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["FasDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" UBICACION"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 19, "div", [["class", "card-body primary-color-dark text-white justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 2, "p", [["class", "text-justify text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["COPRISED."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 1, "p", [["class", "text-justify text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Donato Guerra 101, Altamira, 34635 Santiago Papasquiaro, Dgo."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 2, "h5", [["class", "text-uppercase font-weight-bold text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 0, "i", [["class", "far fa-clock"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" HORARIO."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 1, "p", [["class", "text-justify text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Lu - 9:00 a 14:00"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 1, "p", [["class", "text-justify text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Ma - 9:00 a 14:00"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 1, "p", [["class", "text-justify text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Mi - 9:00 a 14:00"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 1, "p", [["class", "text-justify text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Ju - 9:00 a 14:00"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 1, "p", [["class", "text-justify text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Vi - 9:00 a 14:00"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 2, "div", [["class", "col-md-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 1, "div", [["class", "z-depth-1-half embed-responsive hoverable marco"], ["id", "map-container"], ["style", "height: 465px; width: 600;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 0, "iframe", [["allowfullscreen", ""], ["frameborder", "0"], ["height", "465"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4496.745537257297!2d-105.42166508743172!3d25.04379730045583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8697680f57f0b917%3A0xac21f09791b363c4!2sCoprised!5e0!3m2!1ses!2smx!4v1559686063283!5m2!1ses!2smx"], ["style", "border:0"], ["width", "600"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 42, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 41, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 40, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 4, "div", [["class", "card-header primary-color-dark text-white d-flex justify-content-center align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 3, "div", [["class", "text-pricinpald"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 2, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 1, "strong", [["class", "text-s"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["OFICINA EN DURANGO, DGO"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 33, "div", [["class", "card-body primary-color"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 32, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 28, "div", [["class", "col-md-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 27, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 6, "div", [["class", "card-header primary-color-dark d-flex justify-content-center align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 5, "h4", [["class", "text-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 2, "mdb-icon", [["fas", ""], ["icon", "map-marker-alt"]], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MdbIconComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MdbIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](65, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["MdbIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { icon: [0, "icon"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](66, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["FasDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" UBICACION"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 19, "div", [["class", "card-body primary-color-dark text-white justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 2, "p", [["class", "text-justify text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["COPRISED"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, null, 1, "p", [["class", "text-justify text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Av. Cuauht\u00E9moc 225 Norte, Centro, 34000 Durango, Dgo."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 0, null, null, 2, "h5", [["class", "text-uppercase font-weight-bold text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](76, 0, null, null, 0, "i", [["class", "far fa-clock"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" HORARIO"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](79, 0, null, null, 1, "p", [["class", "text-justify text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Lu - 9:00 a 14:00"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, null, 1, "p", [["class", "text-justify text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Ma - 9:00 a 14:00"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 0, null, null, 1, "p", [["class", "text-justify text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Mi - 9:00 a 14:00"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](85, 0, null, null, 1, "p", [["class", "text-justify text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Ju - 9:00 a 14:00"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](87, 0, null, null, 1, "p", [["class", "text-justify text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Vi - 9:00 a 14:00"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](89, 0, null, null, 2, "div", [["class", "col-md-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](90, 0, null, null, 1, "div", [["class", "z-depth-1-half embed-responsive hoverable marco"], ["id", "map-container"], ["style", "height: 465px; width: 600; "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](91, 0, null, null, 0, "iframe", [["allowfullscreen", ""], ["frameborder", "0"], ["height", "465"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3643.993882462266!2d-104.65946228450476!3d24.031280884451597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bb7df3501dfcb%3A0x505faa96ccc87cc3!2s(COPRISED)+Comisi%C3%B3n+para+la+Protecci%C3%B3n+Contra+Riesgos+Sanitarios+del+Estado+Durango!5e0!3m2!1ses!2smx!4v1559762778117!5m2!1ses!2smx"], ["style", "border:0"], ["width", "600"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](92, 0, null, null, 0, "br", [], null, null, null, null, null))], function (_ck, _v) { _ck(_v, 1, 0); _ck(_v, 3, 0); var currVal_0 = "map-marker-alt"; _ck(_v, 21, 0, currVal_0); var currVal_1 = "map-marker-alt"; _ck(_v, 65, 0, currVal_1); }, null); }
function View_CoordinacionComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-coordinacion", [], null, null, null, View_CoordinacionComponent_0, RenderType_CoordinacionComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _coordinacion_component__WEBPACK_IMPORTED_MODULE_10__["CoordinacionComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CoordinacionComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-coordinacion", _coordinacion_component__WEBPACK_IMPORTED_MODULE_10__["CoordinacionComponent"], View_CoordinacionComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/main/coordinacion/coordinacion.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/main/coordinacion/coordinacion.component.ts ***!
  \*************************************************************/
/*! exports provided: CoordinacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordinacionComponent", function() { return CoordinacionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var CoordinacionComponent = /** @class */ (function () {
    function CoordinacionComponent() {
    }
    CoordinacionComponent.prototype.ngOnInit = function () {
    };
    return CoordinacionComponent;
}());



/***/ }),

/***/ "./src/app/main/footer/footer.component.css.shim.ngstyle.js":
/*!******************************************************************!*\
  !*** ./src/app/main/footer/footer.component.css.shim.ngstyle.js ***!
  \******************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["s\r\n#face[_ngcontent-%COMP%]\r\n{\r\n    background-color: #3b5999;\r\n}\r\n\r\n#twitt[_ngcontent-%COMP%]\r\n{\r\n    background-color: #55acee;\r\n}\r\n\r\n#goog[_ngcontent-%COMP%]\r\n{\r\n    background-color: #dd4b39;\r\n}\r\n\r\n#linkd[_ngcontent-%COMP%]\r\n{\r\n    background-color: #0077B5;\r\n}\r\n\r\n#insta[_ngcontent-%COMP%]\r\n{\r\n    background-color: #e4405f;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztJQUdJLHlCQUF5QjtBQUM3Qjs7QUFFQTs7SUFFSSx5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUkseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJLHlCQUF5QjtBQUM3Qjs7QUFFQTs7SUFFSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9tYWluL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNcclxuI2ZhY2Vcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5OTtcclxufVxyXG5cclxuI3R3aXR0XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NWFjZWU7XHJcbn1cclxuXHJcbiNnb29nXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZDRiMzk7XHJcbn1cclxuXHJcbiNsaW5rZFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3N0I1O1xyXG59XHJcblxyXG4jaW5zdGFcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0NDA1ZjtcclxufSJdfQ== */"];



/***/ }),

/***/ "./src/app/main/footer/footer.component.ngfactory.js":
/*!***********************************************************!*\
  !*** ./src/app/main/footer/footer.component.ngfactory.js ***!
  \***********************************************************/
/*! exports provided: RenderType_FooterComponent, View_FooterComponent_0, View_FooterComponent_Host_0, FooterComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_FooterComponent", function() { return RenderType_FooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FooterComponent_0", function() { return View_FooterComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FooterComponent_Host_0", function() { return View_FooterComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponentNgFactory", function() { return FooterComponentNgFactory; });
/* harmony import */ var _footer_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component.css.shim.ngstyle */ "./src/app/main/footer/footer.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/angular-bootstrap-md/angular-bootstrap-md.ngfactory */ "./node_modules/angular-bootstrap-md/angular-bootstrap-md.ngfactory.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer.component */ "./src/app/main/footer/footer.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_FooterComponent = [_footer_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_FooterComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_FooterComponent, data: {} });

function View_FooterComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 62, "footer", [["class", "page-footer font-small primary-color-dark pt-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 55, "div", [["class", "container text-center text-md-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 38, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 10, "div", [["class", "col-md-4 mt-md-0 mt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 4, "h5", [["class", "text-uppercase font-weight-bold text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "mdb-icon", [["fas", ""], ["icon", "map-marker-alt"]], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MdbIconComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MdbIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MdbIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { icon: [0, "icon"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["FasDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" UBICACION "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "p", [["class", "text-justify"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Comisi\u00F3n para la Protecci\u00F3n Contra Riesgos Sanitarios del Estado Durango (COPRISED)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "p", [["class", "text-justify"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Av. Cuauht\u00E9moc 225 Norte, Centro, 34000 Durango, Dgo."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 0, "hr", [["class", "clearfix w-100 d-md-none pb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 10, "div", [["class", "col-md-4 mb-md-0 mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 4, "h5", [["class", "text-uppercase font-weight-bold text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 2, "mdb-icon", [["fas", ""], ["icon", "phone"]], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MdbIconComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MdbIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MdbIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { icon: [0, "icon"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["FasDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" CONTACTO "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 1, "p", [["class", "text-justify text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Para mayor informacion marque al siguiente numero:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "p", [["class", "text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Tel. (618)137-7090"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 14, "div", [["class", "col-md-4 mb-md-0 mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 2, "h5", [["class", "text-uppercase font-weight-bold text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 0, "i", [["class", "far fa-clock"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" HORARIO"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 1, "p", [["class", "text-justify text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Lu - 9:00 a 14:00"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 1, "p", [["class", "text-justify text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Ma - 9:00 a 14:00"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 1, "p", [["class", "text-justify text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Mi - 9:00 a 14:00"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 1, "p", [["class", "text-justify text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Ju - 9:00 a 14:00"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 1, "p", [["class", "text-justify text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Vi - 9:00 a 14:00"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 14, "ul", [["class", "list-unstyled list-inline text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 6, "li", [["class", "list-inline-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 5, "a", [["class", "btn-fb waves-light"], ["floating", "true"], ["href", "https://es-la.facebook.com/coprised.durango/"], ["mdbBtn", ""], ["mdbWavesEffect", ""], ["size", "lg"], ["target", ".blank"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).click($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 81920, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MdbBtnDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { size: [0, "size"], floating: [1, "floating"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["WavesDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 2, "mdb-icon", [["fab", ""], ["icon", "facebook-f"], ["size", "lg"]], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MdbIconComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MdbIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MdbIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { icon: [0, "icon"], size: [1, "size"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["FabDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 6, "li", [["class", "list-inline-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 5, "a", [["class", "btn-tw waves-light"], ["floating", "true"], ["href", "https://twitter.com/coprisedoficial"], ["mdbBtn", ""], ["mdbWavesEffect", ""], ["size", "lg"], ["target", ".blank"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).click($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 81920, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MdbBtnDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { size: [0, "size"], floating: [1, "floating"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["WavesDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 2, "mdb-icon", [["fab", ""], ["icon", "twitter"], ["size", "lg"]], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MdbIconComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MdbIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MdbIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { icon: [0, "icon"], size: [1, "size"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["FabDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 4, "div", [["class", "footer-copyright text-center py-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00A9 2018 Copyright: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 2, "a", [["routerLink", "/admin"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](61, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" coprised.com"]))], function (_ck, _v) { var currVal_0 = "map-marker-alt"; _ck(_v, 7, 0, currVal_0); var currVal_1 = "phone"; _ck(_v, 19, 0, currVal_1); var currVal_2 = "lg"; var currVal_3 = "true"; _ck(_v, 46, 0, currVal_2, currVal_3); var currVal_4 = "facebook-f"; var currVal_5 = "lg"; _ck(_v, 49, 0, currVal_4, currVal_5); var currVal_6 = "lg"; var currVal_7 = "true"; _ck(_v, 53, 0, currVal_6, currVal_7); var currVal_8 = "twitter"; var currVal_9 = "lg"; _ck(_v, 56, 0, currVal_8, currVal_9); var currVal_12 = "/admin"; _ck(_v, 61, 0, currVal_12); }, function (_ck, _v) { var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).target; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).href; _ck(_v, 60, 0, currVal_10, currVal_11); }); }
function View_FooterComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-footer", [], null, null, null, View_FooterComponent_0, RenderType_FooterComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var FooterComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-footer", _footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], View_FooterComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/main/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/main/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/main/inicio/inicio.component.css.shim.ngstyle.js":
/*!******************************************************************!*\
  !*** ./src/app/main/inicio/inicio.component.css.shim.ngstyle.js ***!
  \******************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["#myBtn[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n    padding: 10px;\r\n    font-size:20px;\r\n    position: absolute;\r\n    margin: 0 auto;\r\n    right: 0;\r\n    left: 0;\r\n    bottom: 50px;\r\n    z-index: 9999;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9pbmljaW8vaW5pY2lvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFFBQVE7SUFDUixPQUFPO0lBQ1AsWUFBWTtJQUNaLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9tYWluL2luaWNpby9pbmljaW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNteUJ0biB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogNTBweDtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/main/inicio/inicio.component.ngfactory.js":
/*!***********************************************************!*\
  !*** ./src/app/main/inicio/inicio.component.ngfactory.js ***!
  \***********************************************************/
/*! exports provided: RenderType_InicioComponent, View_InicioComponent_0, View_InicioComponent_Host_0, InicioComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_InicioComponent", function() { return RenderType_InicioComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_InicioComponent_0", function() { return View_InicioComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_InicioComponent_Host_0", function() { return View_InicioComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponentNgFactory", function() { return InicioComponentNgFactory; });
/* harmony import */ var _inicio_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio.component.css.shim.ngstyle */ "./src/app/main/inicio/inicio.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_nav_menu_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu-nav/menu-nav.component.ngfactory */ "./src/app/main/menu-nav/menu-nav.component.ngfactory.js");
/* harmony import */ var _menu_nav_menu_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu-nav/menu-nav.component */ "./src/app/main/menu-nav/menu-nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _banner_banner_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../banner/banner.component.ngfactory */ "./src/app/main/banner/banner.component.ngfactory.js");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../banner/banner.component */ "./src/app/main/banner/banner.component.ts");
/* harmony import */ var _services_images_images_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/images/images.service */ "./src/app/services/images/images.service.ts");
/* harmony import */ var _slide_slide_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../slide/slide.component.ngfactory */ "./src/app/main/slide/slide.component.ngfactory.js");
/* harmony import */ var _slide_slide_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../slide/slide.component */ "./src/app/main/slide/slide.component.ts");
/* harmony import */ var _comisionado_comisionado_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../comisionado/comisionado.component.ngfactory */ "./src/app/main/comisionado/comisionado.component.ngfactory.js");
/* harmony import */ var _comisionado_comisionado_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../comisionado/comisionado.component */ "./src/app/main/comisionado/comisionado.component.ts");
/* harmony import */ var _cards_cards_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../cards/cards.component.ngfactory */ "./src/app/main/cards/cards.component.ngfactory.js");
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../cards/cards.component */ "./src/app/main/cards/cards.component.ts");
/* harmony import */ var _ubicacion_ubicacion_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../ubicacion/ubicacion.component.ngfactory */ "./src/app/main/ubicacion/ubicacion.component.ngfactory.js");
/* harmony import */ var _ubicacion_ubicacion_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ubicacion/ubicacion.component */ "./src/app/main/ubicacion/ubicacion.component.ts");
/* harmony import */ var _inicio_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./inicio.component */ "./src/app/main/inicio/inicio.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

















var styles_InicioComponent = [_inicio_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_InicioComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_InicioComponent, data: {} });

function View_InicioComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "menu-nav", [], null, null, null, _menu_nav_menu_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MenuNavComponent_0"], _menu_nav_menu_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MenuNavComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _menu_nav_menu_nav_component__WEBPACK_IMPORTED_MODULE_3__["MenuNavComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "app-banner", [["id", "inicio"]], null, null, null, _banner_banner_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_BannerComponent_0"], _banner_banner_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_BannerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _banner_banner_component__WEBPACK_IMPORTED_MODULE_6__["BannerComponent"], [_services_images_images_service__WEBPACK_IMPORTED_MODULE_7__["ImagesService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "app-slide", [], null, null, null, _slide_slide_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_SlideComponent_0"], _slide_slide_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_SlideComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 114688, null, 0, _slide_slide_component__WEBPACK_IMPORTED_MODULE_9__["SlideComponent"], [_services_images_images_service__WEBPACK_IMPORTED_MODULE_7__["ImagesService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "app-comisionado", [["id", "conocenos"]], null, null, null, _comisionado_comisionado_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_ComisionadoComponent_0"], _comisionado_comisionado_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_ComisionadoComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 114688, null, 0, _comisionado_comisionado_component__WEBPACK_IMPORTED_MODULE_11__["ComisionadoComponent"], [_services_images_images_service__WEBPACK_IMPORTED_MODULE_7__["ImagesService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "app-cards", [], null, null, null, _cards_cards_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_CardsComponent_0"], _cards_cards_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_CardsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 114688, null, 0, _cards_cards_component__WEBPACK_IMPORTED_MODULE_13__["CardsComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "app-ubicacion", [["id", "direcciones"]], null, null, null, _ubicacion_ubicacion_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_UbicacionComponent_0"], _ubicacion_ubicacion_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_UbicacionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 114688, null, 0, _ubicacion_ubicacion_component__WEBPACK_IMPORTED_MODULE_15__["UbicacionComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 10, "div", [["class", "modal fade"], ["id", "myModal"], ["role", "dialog"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 9, "div", [["class", "modal-dialog"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 6, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 2, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "h4", [["class", "modal-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Ejecutar Acci\u00F3n al Cerrar Modal"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 2, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Probaremos como ejecutar una accion al detectar el cierre del modal"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "button", [["class", "btn btn-info btn-md"], ["id", "myBtn"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Ocultar Modal"]))], function (_ck, _v) { _ck(_v, 1, 0); _ck(_v, 3, 0); _ck(_v, 5, 0); _ck(_v, 7, 0); _ck(_v, 9, 0); _ck(_v, 11, 0); }, null); }
function View_InicioComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-inicio", [], null, null, null, View_InicioComponent_0, RenderType_InicioComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _inicio_component__WEBPACK_IMPORTED_MODULE_16__["InicioComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var InicioComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-inicio", _inicio_component__WEBPACK_IMPORTED_MODULE_16__["InicioComponent"], View_InicioComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/main/inicio/inicio.component.ts":
/*!*************************************************!*\
  !*** ./src/app/main/inicio/inicio.component.ts ***!
  \*************************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var InicioComponent = /** @class */ (function () {
    function InicioComponent() {
    }
    InicioComponent.prototype.ngOnInit = function () {
    };
    return InicioComponent;
}());



/***/ }),

/***/ "./src/app/main/main-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inicio/inicio.component */ "./src/app/main/inicio/inicio.component.ts");
/* harmony import */ var _tramites_tramites_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tramites/tramites.component */ "./src/app/main/tramites/tramites.component.ts");
/* harmony import */ var _coordinacion_coordinacion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coordinacion/coordinacion.component */ "./src/app/main/coordinacion/coordinacion.component.ts");
/* harmony import */ var _transparencia_transparencia_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transparencia/transparencia.component */ "./src/app/main/transparencia/transparencia.component.ts");
/* harmony import */ var _mision_mision_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mision/mision.component */ "./src/app/main/mision/mision.component.ts");







var routes = [
    { path: 'main',
        component: _main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"],
        children: [
            { path: '', component: _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__["InicioComponent"] },
            { path: 'inicio', component: _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__["InicioComponent"] },
            { path: 'tramites', component: _tramites_tramites_component__WEBPACK_IMPORTED_MODULE_3__["TramitesComponent"] },
            { path: 'coordinacion', component: _coordinacion_coordinacion_component__WEBPACK_IMPORTED_MODULE_4__["CoordinacionComponent"] },
            { path: 'transparencia', component: _transparencia_transparencia_component__WEBPACK_IMPORTED_MODULE_5__["TransparenciaComponent"] },
            { path: 'mision', component: _mision_mision_component__WEBPACK_IMPORTED_MODULE_6__["MisionComponent"] },
        ] }
];
var MainRoutingModule = /** @class */ (function () {
    function MainRoutingModule() {
    }
    return MainRoutingModule;
}());



/***/ }),

/***/ "./src/app/main/main.component.css.shim.ngstyle.js":
/*!*********************************************************!*\
  !*** ./src/app/main/main.component.css.shim.ngstyle.js ***!
  \*********************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */"];



/***/ }),

/***/ "./src/app/main/main.component.ngfactory.js":
/*!**************************************************!*\
  !*** ./src/app/main/main.component.ngfactory.js ***!
  \**************************************************/
/*! exports provided: RenderType_MainComponent, View_MainComponent_0, View_MainComponent_Host_0, MainComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_MainComponent", function() { return RenderType_MainComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MainComponent_0", function() { return View_MainComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MainComponent_Host_0", function() { return View_MainComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponentNgFactory", function() { return MainComponentNgFactory; });
/* harmony import */ var _main_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.component.css.shim.ngstyle */ "./src/app/main/main.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component.ngfactory */ "./src/app/main/footer/footer.component.ngfactory.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/main/footer/footer.component.ts");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main.component */ "./src/app/main/main.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_MainComponent = [_main_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_MainComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_MainComponent, data: {} });

function View_MainComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "app-footer", [["id", "contacto"]], null, null, null, _footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_FooterComponent_0"], _footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_FooterComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); _ck(_v, 3, 0); }, null); }
function View_MainComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-main", [], null, null, null, View_MainComponent_0, RenderType_MainComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var MainComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-main", _main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"], View_MainComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    return MainModule;
}());



/***/ }),

/***/ "./src/app/main/menu-nav/menu-nav.component.css.shim.ngstyle.js":
/*!**********************************************************************!*\
  !*** ./src/app/main/menu-nav/menu-nav.component.css.shim.ngstyle.js ***!
  \**********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".view[_ngcontent-%COMP%] {\r\n    background-size: cover;\r\n    height: 100vh;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n    background-color: #4285F4;\r\n}\r\n\r\n.top-nav-collapse[_ngcontent-%COMP%] {\r\n    background-color: #4285F4;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\r\n    background-color: #3b5999;\r\n}\r\n\r\n#a[_ngcontent-%COMP%]\r\n{\r\n    margin-right: 0px;\r\n}\r\n\r\n#tama\u00F1o[_ngcontent-%COMP%]\r\n{\r\n    max-width: 10%;\r\n    max-height: 10%;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    .navbar[_ngcontent-%COMP%] {\r\n        background-color: #4285F4;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tZW51LW5hdi9tZW51LW5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUNJO0lBQ0E7UUFDSSx5QkFBeUI7SUFDN0I7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWVudS1uYXYvbWVudS1uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWV3IHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Mjg1RjQ7XHJcbn1cclxuXHJcbi50b3AtbmF2LWNvbGxhcHNlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Mjg1RjQ7XHJcbn1cclxuXHJcbi5uYXZiYXIgLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk5O1xyXG59XHJcblxyXG4jYVxyXG57XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG5cclxuI3RhbWHDsW9cclxue1xyXG4gICAgbWF4LXdpZHRoOiAxMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMCU7XHJcbn1cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5uYXZiYXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Mjg1RjQ7XHJcbiAgICB9XHJcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/main/menu-nav/menu-nav.component.ngfactory.js":
/*!***************************************************************!*\
  !*** ./src/app/main/menu-nav/menu-nav.component.ngfactory.js ***!
  \***************************************************************/
/*! exports provided: RenderType_MenuNavComponent, View_MenuNavComponent_0, View_MenuNavComponent_Host_0, MenuNavComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_MenuNavComponent", function() { return RenderType_MenuNavComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MenuNavComponent_0", function() { return View_MenuNavComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MenuNavComponent_Host_0", function() { return View_MenuNavComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuNavComponentNgFactory", function() { return MenuNavComponentNgFactory; });
/* harmony import */ var _menu_nav_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-nav.component.css.shim.ngstyle */ "./src/app/main/menu-nav/menu-nav.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/angular-bootstrap-md/angular-bootstrap-md.ngfactory */ "./node_modules/angular-bootstrap-md/angular-bootstrap-md.ngfactory.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _menu_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-nav.component */ "./src/app/main/menu-nav/menu-nav.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_MenuNavComponent = [_menu_nav_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_MenuNavComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_MenuNavComponent, data: {} });

function View_MenuNavComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 68, "header", [["class", "h-100"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 67, "mdb-navbar", [["SideClass", "navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar intro-fixed-nav"]], null, [["window", "resize"], ["document", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onResize($event) !== false);
        ad = (pd_0 && ad);
    } if (("document:scroll" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onScroll() !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NavbarComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NavbarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 6406144, null, 1, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["NavbarService"]], { SideClass: [0, "SideClass"], containerInside: [1, "containerInside"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 1, { links: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 3, "mdb-navbar-brand", [], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_LogoComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_LogoComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 49152, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["LogoComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 0, 1, "a", [["class", "logo navbar-brand scroll"], ["href", "/main"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "img", [["alt", ""], ["height", "30"], ["src", "assets\\imagenes\\Logo COPRISED 2017 Horizontal Transparente.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 4, 60, "links", [["class", "justify-content-end"]], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_LinksComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_LinksComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 5292032, [[1, 4]], 1, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["LinksComponent"], [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["NavbarService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { links: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, 0, 48, "ul", [["class", "navbar-nav justify-content-end"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 3, "li", [["class", "nav-item waves-light"], ["mdbWavesEffect", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).click($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["WavesDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "a", [["class", "nav-link scroll"], ["href", "#inicio"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.regresar() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Inicio"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 3, "li", [["class", "nav-item waves-light"], ["mdbWavesEffect", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).click($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["WavesDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "a", [["class", "nav-link scroll"], ["href", "#conocenos"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.regresar() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Conocenos"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 3, "li", [["class", "nav-item waves-light"], ["mdbWavesEffect", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).click($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["WavesDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "a", [["class", "nav-link scroll"], ["href", "#direcciones"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.regresar() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Direcciones"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 7, "li", [["class", "nav-item waves-light"], ["mdbWavesEffect", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).click($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["WavesDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, [[2, 0]], null, 5, "a", [["class", "nav-link"], ["routerLink", "/main/coordinacion"], ["routerLinkActive", "active current"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 671744, [[4, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Oficinas"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 7, "li", [["class", "nav-item waves-light"], ["mdbWavesEffect", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).click($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["WavesDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, [[2, 0]], null, 5, "a", [["class", "nav-link"], ["routerLink", "/main/transparencia"], ["routerLinkActive", "active current"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 671744, [[6, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Transparencia "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 7, "li", [["class", "nav-item waves-light"], ["mdbWavesEffect", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).click($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["WavesDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, [[2, 0]], null, 5, "a", [["class", "nav-link"], ["routerLink", "/main/tramites"], ["routerLinkActive", "active current"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 671744, [[8, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Tramites y servicios"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 3, "li", [["class", "nav-item waves-light"], ["mdbWavesEffect", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).click($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["WavesDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 1, "a", [["class", "nav-link scroll"], ["href", "#contacto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Contacto"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 7, "li", [["class", "nav-item waves-light"], ["mdbWavesEffect", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).click($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["WavesDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, [[2, 0]], null, 5, "a", [["class", "nav-link"], ["routerLink", "/main/mision"], ["routerLinkActive", "active current"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 671744, [[10, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Mision y Vision"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, 0, 8, "ul", [["class", "navbar-nav ml-auto nav-flex-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 3, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 16777216, null, null, 2, "a", [["class", "nav-link waves-effect waves-light"], ["href", "https://twitter.com/coprisedoficial"], ["mdbTooltip", "Twitter"], ["target", ".blank"]], null, [[null, "click"], ["window", "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).onclick($event) !== false);
        ad = (pd_0 && ad);
    } if (("window:click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).onblur() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 737280, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["TooltipDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["ɵe"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["TooltipConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], { mdbTooltip: [0, "mdbTooltip"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 0, "i", [["class", "fab fa-twitter"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 3, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 16777216, null, null, 2, "a", [["class", "nav-link waves-effect waves-light"], ["href", "https://es-la.facebook.com/coprised.durango/"], ["mdbTooltip", "Facebook"], ["target", ".blank"]], null, [[null, "click"], ["window", "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).onclick($event) !== false);
        ad = (pd_0 && ad);
    } if (("window:click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).onblur() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](67, 737280, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["TooltipDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["ɵe"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["TooltipConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], { mdbTooltip: [0, "mdbTooltip"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 0, "i", [["class", "fab fa-facebook"]], null, null, null, null, null))], function (_ck, _v) { var currVal_0 = "navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar intro-fixed-nav"; var currVal_1 = false; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_4 = "/main/coordinacion"; _ck(_v, 27, 0, currVal_4); var currVal_5 = "active current"; _ck(_v, 28, 0, currVal_5); var currVal_8 = "/main/transparencia"; _ck(_v, 35, 0, currVal_8); var currVal_9 = "active current"; _ck(_v, 36, 0, currVal_9); var currVal_12 = "/main/tramites"; _ck(_v, 43, 0, currVal_12); var currVal_13 = "active current"; _ck(_v, 44, 0, currVal_13); var currVal_16 = "/main/mision"; _ck(_v, 55, 0, currVal_16); var currVal_17 = "active current"; _ck(_v, 56, 0, currVal_17); var currVal_18 = "Twitter"; _ck(_v, 63, 0, currVal_18); var currVal_19 = "Facebook"; _ck(_v, 67, 0, currVal_19); }, function (_ck, _v) { var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).target; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).href; _ck(_v, 26, 0, currVal_2, currVal_3); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).target; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).href; _ck(_v, 34, 0, currVal_6, currVal_7); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).target; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).href; _ck(_v, 42, 0, currVal_10, currVal_11); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).target; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).href; _ck(_v, 54, 0, currVal_14, currVal_15); }); }
function View_MenuNavComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "menu-nav", [], null, null, null, View_MenuNavComponent_0, RenderType_MenuNavComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _menu_nav_component__WEBPACK_IMPORTED_MODULE_6__["MenuNavComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var MenuNavComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("menu-nav", _menu_nav_component__WEBPACK_IMPORTED_MODULE_6__["MenuNavComponent"], View_MenuNavComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/main/menu-nav/menu-nav.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/main/menu-nav/menu-nav.component.ts ***!
  \*****************************************************/
/*! exports provided: MenuNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuNavComponent", function() { return MenuNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var MenuNavComponent = /** @class */ (function () {
    function MenuNavComponent(router) {
        this.router = router;
    }
    MenuNavComponent.prototype.ngOnInit = function () {
        this.scroll();
    };
    MenuNavComponent.prototype.regresar = function () {
        this.router.navigate(['/main']);
    };
    //Scroll para las secciones en la pagina main
    MenuNavComponent.prototype.scroll = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__(document).ready(function () {
            var scrollLink = jquery__WEBPACK_IMPORTED_MODULE_1__('.scroll');
            // Smooth scrolling
            scrollLink.click(function (e) {
                e.preventDefault();
                jquery__WEBPACK_IMPORTED_MODULE_1__('body,html').animate({ scrollTop: jquery__WEBPACK_IMPORTED_MODULE_1__(this.hash).offset().top - 35 }, 1000);
            });
            // Active link switching
            jquery__WEBPACK_IMPORTED_MODULE_1__(window).scroll(function () {
                var scrollbarLocation = jquery__WEBPACK_IMPORTED_MODULE_1__(this).scrollTop();
                scrollLink.each(function () {
                    var sectionOffset = jquery__WEBPACK_IMPORTED_MODULE_1__(this.hash).offset().top - 40;
                    if (sectionOffset <= scrollbarLocation) {
                        jquery__WEBPACK_IMPORTED_MODULE_1__(this).parent().addClass('active');
                        jquery__WEBPACK_IMPORTED_MODULE_1__(this).parent().siblings().removeClass('active');
                    }
                });
            });
        });
    };
    return MenuNavComponent;
}());



/***/ }),

/***/ "./src/app/main/mision/mision.component.css.shim.ngstyle.js":
/*!******************************************************************!*\
  !*** ./src/app/main/mision/mision.component.css.shim.ngstyle.js ***!
  \******************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".imagen[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    margin-top: 4em;\r\n}\r\n\r\n*[_ngcontent-%COMP%]{\r\n  padding:0px;\r\n}\r\n\r\n.vision[_ngcontent-%COMP%]{\r\n\tmargin-top: 4px;\r\n}\r\n\r\n.button-c[_ngcontent-%COMP%]{\r\n  height: 50px;\r\n  background-color: #4285F4;\r\n  border-radius: 10px;\r\n  width: 50%;\r\n  display:block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  \r\n}\r\n\r\n.space[_ngcontent-%COMP%]{\r\n  padding-bottom: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9taXNpb24vbWlzaW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCOztBQUVwQjs7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWlzaW9uL21pc2lvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDRlbTtcclxufVxyXG5cclxuKntcclxuICBwYWRkaW5nOjBweDtcclxufVxyXG4udmlzaW9ue1xyXG5cdG1hcmdpbi10b3A6IDRweDtcclxufVxyXG5cclxuLmJ1dHRvbi1je1xyXG4gIGhlaWdodDogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4NUY0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBcclxufVxyXG4uc3BhY2V7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuIl19 */"];



/***/ }),

/***/ "./src/app/main/mision/mision.component.ngfactory.js":
/*!***********************************************************!*\
  !*** ./src/app/main/mision/mision.component.ngfactory.js ***!
  \***********************************************************/
/*! exports provided: RenderType_MisionComponent, View_MisionComponent_0, View_MisionComponent_Host_0, MisionComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_MisionComponent", function() { return RenderType_MisionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MisionComponent_0", function() { return View_MisionComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MisionComponent_Host_0", function() { return View_MisionComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisionComponentNgFactory", function() { return MisionComponentNgFactory; });
/* harmony import */ var _mision_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mision.component.css.shim.ngstyle */ "./src/app/main/mision/mision.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_nav_menu_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu-nav/menu-nav.component.ngfactory */ "./src/app/main/menu-nav/menu-nav.component.ngfactory.js");
/* harmony import */ var _menu_nav_menu_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu-nav/menu-nav.component */ "./src/app/main/menu-nav/menu-nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _mision_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mision.component */ "./src/app/main/mision/mision.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_MisionComponent = [_mision_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_MisionComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_MisionComponent, data: {} });

function View_MisionComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, { collapses: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "menu-nav", [], null, null, null, _menu_nav_menu_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MenuNavComponent_0"], _menu_nav_menu_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MenuNavComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _menu_nav_menu_nav_component__WEBPACK_IMPORTED_MODULE_3__["MenuNavComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "div", [["class", "col-sm-12 col-md-12 col-lg-12 col-xl-12 space"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "img", [["alt", "Responsive image"], ["class", "imagen img-fluid"], ["src", "\\assets\\imagenes\\Logo COPRISED 2017 Horizontal.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 20, "div", [["clase", "mision "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 3, "button", [["block", "true"], ["class", "button button-c white-text"], ["data-target", "#basicExample"], ["data-toggle", "modal"], ["mdbBtn", ""], ["mdbWavesEffect", ""], ["rounded", "true"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).click($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).show() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 81920, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MdbBtnDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { rounded: [0, "rounded"], block: [1, "block"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["WavesDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["MISION"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 16777216, null, null, 15, "div", [["aria-hidden", "true"], ["aria-labelledby", "myModalLabel"], ["class", "modal fade top"], ["id", "frameModalTop"], ["mdbModal", ""], ["role", "dialog"], ["tabindex", "-1"]], null, [[null, "keydown"], [null, "click"], [null, "keydown.esc"]], function (_v, en, $event) { var ad = true; if (("keydown" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onKeyDown($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onClick($event) !== false);
        ad = (pd_1 && ad);
    } if (("keydown.esc" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onEsc() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 4341760, [["frame", 4]], 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["ModalDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["ɵe"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 13, "div", [["class", "modal-dialog modal-notify modal-info"], ["role", "document"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 12, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 5, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "p", [["class", "heading lead text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["MISION & VISION"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 2, "button", [["aria-label", "Close"], ["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).hide() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "span", [["aria-hidden", "true"], ["class", "white-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00D7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 5, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 4, "div", [["class", "text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "i", [["class", "fas fa-book fa-4x mb-3 animated rotateIn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Misi\u00F3n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "p", [["class", "text-justify"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Proteger a la poblaci\u00F3n contra riesgos sanitarios a la salud provocados por el uso y consumo de bienes y servicios, insumos para la salud, as\u00ED como por su exposici\u00F3n a factores ambientales y laborales, la ocurrencia de emergencias sanitarias y la prestaci\u00F3n de servicios de salud, mediante la regulaci\u00F3n, control, fomento y prevenci\u00F3n de riesgos sanitarios"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 20, "div", [["class", "vision justify-content-center space"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 3, "button", [["block", "true"], ["class", "button button-c white-text"], ["data-target", "#frameModalTop2"], ["data-toggle", "vision"], ["mdbBtn", ""], ["mdbWavesEffect", ""], ["rounded", "true"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).click($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).show() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 81920, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MdbBtnDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { rounded: [0, "rounded"], block: [1, "block"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["WavesDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["VISION"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 16777216, null, null, 15, "div", [["aria-hidden", "true"], ["aria-labelledby", "myModalLabel"], ["class", "modal fade top vision"], ["id", "frameModalTop2"], ["mdbModal", ""], ["role", "dialog"], ["tabindex", "-1"]], null, [[null, "keydown"], [null, "click"], [null, "keydown.esc"]], function (_v, en, $event) { var ad = true; if (("keydown" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).onKeyDown($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).onClick($event) !== false);
        ad = (pd_1 && ad);
    } if (("keydown.esc" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).onEsc() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 4341760, [["frame2", 4]], 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["ModalDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["ɵe"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 13, "div", [["class", "modal-dialog modal-notify modal-info"], ["role", "document"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 12, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 5, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 1, "p", [["class", "heading lead text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["MISION & VISION"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 2, "button", [["aria-label", "Close"], ["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).hide() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 1, "span", [["aria-hidden", "true"], ["class", "white-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00D7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 5, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 4, "div", [["class", "text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 1, "i", [["class", "fas fa-eye fa-4x mb-3 animated rotateIn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Vision"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 1, "p", [["class", "text-justify"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Lograr una sociedad sana, sabiendo que definimos y efectuamos intervenciones eficaces para proteger su salud. Coadyuvar y mejorar la competitividad de las empresas y su desarrollo econ\u00F3mico en nuestro Estado."]))], function (_ck, _v) { _ck(_v, 2, 0); var currVal_0 = "true"; var currVal_1 = "true"; _ck(_v, 7, 0, currVal_0, currVal_1); var currVal_2 = "true"; var currVal_3 = "true"; _ck(_v, 28, 0, currVal_2, currVal_3); }, null); }
function View_MisionComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-mision", [], null, null, null, View_MisionComponent_0, RenderType_MisionComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _mision_component__WEBPACK_IMPORTED_MODULE_6__["MisionComponent"], [], null, null)], null, null); }
var MisionComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-mision", _mision_component__WEBPACK_IMPORTED_MODULE_6__["MisionComponent"], View_MisionComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/main/mision/mision.component.ts":
/*!*************************************************!*\
  !*** ./src/app/main/mision/mision.component.ts ***!
  \*************************************************/
/*! exports provided: MisionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisionComponent", function() { return MisionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");


var MisionComponent = /** @class */ (function () {
    function MisionComponent() {
    }
    MisionComponent.prototype.ngAfterViewInit = function () {
        this.collapses.forEach(function (collapse) {
            collapse.toggle();
        });
    };
    return MisionComponent;
}());



/***/ }),

/***/ "./src/app/main/slide/slide.component.css.shim.ngstyle.js":
/*!****************************************************************!*\
  !*** ./src/app/main/slide/slide.component.css.shim.ngstyle.js ***!
  \****************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".carousel[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    max-height: 400px;\r\n}\r\nimg[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    max-height: 550px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9zbGlkZS9zbGlkZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2xpZGUvc2xpZGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbn1cclxuaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA1NTBweDtcclxufSJdfQ== */"];



/***/ }),

/***/ "./src/app/main/slide/slide.component.ngfactory.js":
/*!*********************************************************!*\
  !*** ./src/app/main/slide/slide.component.ngfactory.js ***!
  \*********************************************************/
/*! exports provided: RenderType_SlideComponent, View_SlideComponent_0, View_SlideComponent_Host_0, SlideComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SlideComponent", function() { return RenderType_SlideComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SlideComponent_0", function() { return View_SlideComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SlideComponent_Host_0", function() { return View_SlideComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideComponentNgFactory", function() { return SlideComponentNgFactory; });
/* harmony import */ var _slide_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slide.component.css.shim.ngstyle */ "./src/app/main/slide/slide.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/angular-bootstrap-md/angular-bootstrap-md.ngfactory */ "./node_modules/angular-bootstrap-md/angular-bootstrap-md.ngfactory.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _slide_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slide.component */ "./src/app/main/slide/slide.component.ts");
/* harmony import */ var _services_images_images_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/images/images.service */ "./src/app/services/images/images.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_SlideComponent = [_slide_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_SlideComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_SlideComponent, data: {} });

function View_SlideComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "mdb-carousel-item", [], [[2, "active", null], [2, "animated", null], [2, "carousel-item-next", null], [2, "carousel-item-left", null], [2, "carousel-item-prev", null], [2, "carousel-item-right", null], [2, "carousel-item", null]], null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_SlideComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_SlideComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["SlideComponent"], [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 0, "img", [["alt", "All slides"]], [[8, "src", 4]], null, null, null, null))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).active; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).animated; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).directionNext; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).directionLeft; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).directionPrev; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).directionRight; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).el; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "assets\\imagenes\\", _v.context.$implicit.image, ""); _ck(_v, 2, 0, currVal_7); }); }
function View_SlideComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["id", "home"], ["mdbScrollSpyElement", "scrollspy1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "mdb-carousel", [["class", "carousel slide carousel-fade"]], null, [[null, "mouseleave"], [null, "mouseenter"], [null, "keyup"], [null, "click"]], function (_v, en, $event) { var ad = true; if (("mouseleave" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).play() !== false);
        ad = (pd_0 && ad);
    } if (("mouseenter" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).pause() !== false);
        ad = (pd_1 && ad);
    } if (("keyup" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).keyboardControl($event) !== false);
        ad = (pd_2 && ad);
    } if (("click" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).focus() !== false);
        ad = (pd_3 && ad);
    } return ad; }, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_CarouselComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_CarouselComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4374528, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["CarouselConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { class: [0, "class"], animation: [1, "animation"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_SlideComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "carousel slide carousel-fade"; var currVal_1 = "fade"; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _co.imagenes; _ck(_v, 4, 0, currVal_2); }, null); }
function View_SlideComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-slide", [], null, null, null, View_SlideComponent_0, RenderType_SlideComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _slide_component__WEBPACK_IMPORTED_MODULE_5__["SlideComponent"], [_services_images_images_service__WEBPACK_IMPORTED_MODULE_6__["ImagesService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SlideComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-slide", _slide_component__WEBPACK_IMPORTED_MODULE_5__["SlideComponent"], View_SlideComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/main/slide/slide.component.ts":
/*!***********************************************!*\
  !*** ./src/app/main/slide/slide.component.ts ***!
  \***********************************************/
/*! exports provided: SlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideComponent", function() { return SlideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_images_images_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/images/images.service */ "./src/app/services/images/images.service.ts");


var SlideComponent = /** @class */ (function () {
    function SlideComponent(service) {
        this.service = service;
        this.imagenes = [];
    }
    SlideComponent.prototype.ngOnInit = function () {
        this.getImagenes();
    };
    SlideComponent.prototype.getImagenes = function () {
        var _this = this;
        this.service.getImages().subscribe(function (res) {
            _this.imagenes = res;
        }, function (err) { return console.error(err); });
    };
    return SlideComponent;
}());



/***/ }),

/***/ "./src/app/main/tramites/tramites.component.css.shim.ngstyle.js":
/*!**********************************************************************!*\
  !*** ./src/app/main/tramites/tramites.component.css.shim.ngstyle.js ***!
  \**********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".container[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    grid-template-rows: 50px 50px;\r\n    \r\n}\r\nh1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, \r\n    'Open Sans', 'Helvetica Neue', sans-serif;\r\n    padding: 12px;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, \r\n    'Open Sans', 'Helvetica Neue', sans-serif;\r\n    font-size: 0.6em;\r\n    margin-top: -25px;\r\n   \r\n\r\n}\r\nhr[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n    \r\n}\r\n.def-se[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    border: 2px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.catego[_ngcontent-%COMP%]{\r\n    background: white;\r\n    padding: 15px 10px !important;\r\n    text-align: center;\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    color: #adbdc7;\r\n    text-transform: uppercase;\r\n    border-bottom-width: 3px !important;\r\n    border-style: solid;\r\n    border-width: 0px;\r\n\r\n    \r\n}\r\n.resp[_ngcontent-%COMP%]{\r\n    padding: 0px;\r\n}\r\n.productos[_ngcontent-%COMP%]:hover{\r\n    background: #003a70 !important;\r\n    cursor: pointer;\r\n}\r\n.productos[_ngcontent-%COMP%]{\r\n    border-color: #003a70 !important;\r\n}\r\n.insumos[_ngcontent-%COMP%]:hover{\r\n    background: #a41f35 !important;\r\n    cursor: pointer;\r\n}\r\n.insumos[_ngcontent-%COMP%]{\r\n    border-color: #a41f35;\r\n}\r\n.size[_ngcontent-%COMP%]{\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',\r\n     Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n     font-size: 23px;\r\n     margin: auto;\r\n\r\n}\r\n.text-c[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    \r\n}\r\n.size[_ngcontent-%COMP%]{\r\n    width: 95%;\r\n    margin-bottom: 10px;\r\n}\r\n.font[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n    text-align: justify;\r\n}\r\n.font-c[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    text-align: justify;\r\n}\r\n.list[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n.bo-m[_ngcontent-%COMP%]{\r\n    \r\n    font-size: 10px;\r\n\r\n}\r\n.color-t[_ngcontent-%COMP%]{\r\n    color: #212121;\r\n}\r\n.font-f[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n}\r\n.font-t[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    font-weight: 1000;\r\n}\r\n.font-ti[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    font-weight: 1000;\r\n}\r\n.size-t[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n\r\n}\r\n.size-i[_ngcontent-%COMP%]{\r\n    width:85%;\r\n}\r\n.zoom[_ngcontent-%COMP%]{\r\n    \r\n    transition: width 2s, height 2s, -webkit-transform 2s;\r\n    transition: width 2s, height 2s, transform 2s;\r\n    transition: width 2s, height 2s, transform 2s, -webkit-transform 2s;\r\n    -moz-transition: width 2s, height 2s, -moz-transform 2s;\r\n    -webkit-transition: width 2s, height 2s, -webkit-transform 2s;\r\n    -o-transition: width 2s, height 2s,-o-transform 2s;\r\n}\r\n.zoom[_ngcontent-%COMP%]:hover{\r\n    \r\n    transform : scale(1.6);\r\n    -moz-transform : scale(1.6);      \r\n    -webkit-transform : scale(1.6);   \r\n    -o-transform : scale(1.6);        \r\n}\r\n.text-p[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n    color: black;\r\n    font-weight: bolder;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi90cmFtaXRlcy90cmFtaXRlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyw2QkFBNkI7O0FBRWpDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEI7NkNBQ3lDO0lBQ3pDLGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQjs2Q0FDeUM7SUFDekMsZ0JBQWdCO0lBQ2hCLGlCQUFpQjs7O0FBR3JCO0FBQ0E7SUFDSSxVQUFVOztBQUVkO0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixtQ0FBbUM7SUFDbkMsbUJBQW1CO0lBQ25CLGlCQUFpQjs7O0FBR3JCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDO0FBR0E7SUFDSSw4QkFBOEI7SUFDOUIsZUFBZTtBQUNuQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBR0E7SUFDSTtpRkFDNkU7S0FDNUUsZUFBZTtLQUNmLFlBQVk7O0FBRWpCO0FBQ0E7SUFDSSxrQkFBa0I7O0FBRXRCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBR0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTs7SUFFSSxlQUFlOztBQUVuQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksZUFBZTs7QUFFbkI7QUFDQTtJQUNJLFNBQVM7QUFDYjtBQUVBO0lBQ0ksc0RBQXNEO0lBQ3RELHFEQUE2QztJQUE3Qyw2Q0FBNkM7SUFBN0MsbUVBQTZDO0lBQzdDLHVEQUF1RDtJQUN2RCw2REFBNkQ7SUFDN0Qsa0RBQWtEO0FBQ3REO0FBQ0E7SUFDSTtnQ0FDNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDJCQUEyQixPQUFPLFlBQVk7SUFDOUMsOEJBQThCLElBQUksb0JBQW9CO0lBQ3RELHlCQUF5QixTQUFTLFVBQVU7QUFDaEQ7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi90cmFtaXRlcy90cmFtaXRlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCA1MHB4O1xyXG4gICAgXHJcbn1cclxuaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFxyXG4gICAgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG59XHJcbmgze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcclxuICAgICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAwLjZlbTtcclxuICAgIG1hcmdpbi10b3A6IC0yNXB4O1xyXG4gICBcclxuXHJcbn1cclxuaHJ7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgXHJcbn1cclxuXHJcbi5kZWYtc2V7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgYm9yZGVyOiAycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmNhdGVnb3tcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTVweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICNhZGJkYzc7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcblxyXG4gICAgXHJcbn1cclxuLnJlc3B7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuLnByb2R1Y3Rvczpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICMwMDNhNzAgIWltcG9ydGFudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucHJvZHVjdG9ze1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDAzYTcwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uaW5zdW1vczpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICNhNDFmMzUgIWltcG9ydGFudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uaW5zdW1vc3tcclxuICAgIGJvcmRlci1jb2xvcjogI2E0MWYzNTtcclxufVxyXG5cclxuXHJcbi5zaXple1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJyxcclxuICAgICBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICBtYXJnaW46IGF1dG87XHJcblxyXG59XHJcbi50ZXh0LWN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG5cclxuLnNpemV7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uZm9udHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuLmZvbnQtY3tcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcblxyXG4ubGlzdHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJvLW17XHJcbiAgICBcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuXHJcbn1cclxuXHJcbi5jb2xvci10e1xyXG4gICAgY29sb3I6ICMyMTIxMjE7XHJcbn1cclxuLmZvbnQtZntcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uZm9udC10e1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDA7XHJcbn1cclxuXHJcbi5mb250LXRpe1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDA7XHJcbn1cclxuXHJcbi5zaXplLXR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG59XHJcbi5zaXplLWl7XHJcbiAgICB3aWR0aDo4NSU7XHJcbn1cclxuXHJcbi56b29te1xyXG4gICAgLyogQXVtZW50YW1vcyBsYSBhbmNodXJhIHkgYWx0dXJhIGR1cmFudGUgMiBzZWd1bmRvcyAqL1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMnMsIGhlaWdodCAycywgdHJhbnNmb3JtIDJzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiB3aWR0aCAycywgaGVpZ2h0IDJzLCAtbW96LXRyYW5zZm9ybSAycztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMnMsIGhlaWdodCAycywgLXdlYmtpdC10cmFuc2Zvcm0gMnM7XHJcbiAgICAtby10cmFuc2l0aW9uOiB3aWR0aCAycywgaGVpZ2h0IDJzLC1vLXRyYW5zZm9ybSAycztcclxufVxyXG4uem9vbTpob3ZlcntcclxuICAgIC8qIHRyYW5mb3JtYW1vcyBlbCBlbGVtZW50byBhbCBwYXNhciBlbCBtb3VzZSBwb3IgZW5jaW1hIGFsIGRvYmxlIGRlXHJcbiAgICAgICBzdSB0YW1hw7FvIGNvbiBzY2FsZSgyKS4gKi9cclxuICAgIHRyYW5zZm9ybSA6IHNjYWxlKDEuNik7XHJcbiAgICAtbW96LXRyYW5zZm9ybSA6IHNjYWxlKDEuNik7ICAgICAgLyogRmlyZWZveCAqL1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0gOiBzY2FsZSgxLjYpOyAgIC8qIENocm9tZSAtIFNhZmFyaSAqL1xyXG4gICAgLW8tdHJhbnNmb3JtIDogc2NhbGUoMS42KTsgICAgICAgIC8qIE9wZXJhICovXHJcbn1cclxuXHJcbi50ZXh0LXB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbiJdfQ== */"];



/***/ }),

/***/ "./src/app/main/tramites/tramites.component.ngfactory.js":
/*!***************************************************************!*\
  !*** ./src/app/main/tramites/tramites.component.ngfactory.js ***!
  \***************************************************************/
/*! exports provided: RenderType_TramitesComponent, View_TramitesComponent_0, View_TramitesComponent_Host_0, TramitesComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TramitesComponent", function() { return RenderType_TramitesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TramitesComponent_0", function() { return View_TramitesComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TramitesComponent_Host_0", function() { return View_TramitesComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TramitesComponentNgFactory", function() { return TramitesComponentNgFactory; });
/* harmony import */ var _tramites_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tramites.component.css.shim.ngstyle */ "./src/app/main/tramites/tramites.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/angular-bootstrap-md/angular-bootstrap-md.ngfactory */ "./node_modules/angular-bootstrap-md/angular-bootstrap-md.ngfactory.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _menu_nav_menu_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu-nav/menu-nav.component.ngfactory */ "./src/app/main/menu-nav/menu-nav.component.ngfactory.js");
/* harmony import */ var _menu_nav_menu_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../menu-nav/menu-nav.component */ "./src/app/main/menu-nav/menu-nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _banner_banner_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../banner/banner.component.ngfactory */ "./src/app/main/banner/banner.component.ngfactory.js");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../banner/banner.component */ "./src/app/main/banner/banner.component.ts");
/* harmony import */ var _services_images_images_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/images/images.service */ "./src/app/services/images/images.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tramites_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tramites.component */ "./src/app/main/tramites/tramites.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 












var styles_TramitesComponent = [_tramites_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_TramitesComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_TramitesComponent, data: {} });

function View_TramitesComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 345, "mdb-card", [["class", "size"], ["id", "tramite1"]], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MdbCardComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MdbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MdbCardComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { class: [0, "class"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 343, "mdb-card-body", [["class", "text-c"]], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MdbCardBodyComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MdbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MdbCardBodyComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { class: [0, "class"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 2, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["DOCUMENTOS REQUERIDOS PARA FORMATO "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 4, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["COFEPRIS-05-018"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["(Aviso de funcionamiento del establecimiento de Productos Y Servicios)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, 0, 29, "div", [["class", "list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 28, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "li", [["class", "font"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Original y copia siempre legible del formato \"avisos de funcionaminto, de Responsable Sanitario y Modificacion o Baja\", Debidamente requisitado."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 3, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 16777216, null, null, 2, "u", [["mdbTooltip", "\n                                    Como persona moral o jur\u00EDdica se designa, en derecho, toda aquella entidad de existencia jur\u00EDdica, que est\u00E1 constituida por grupos u organizaciones de personas"]], null, [[null, "click"], ["window", "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onclick($event) !== false);
        ad = (pd_0 && ad);
    } if (("window:click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onblur() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 737280, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["TooltipDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["ɵe"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["TooltipConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], { mdbTooltip: [0, "mdbTooltip"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["En Caso de ser personas Morales:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "li", [["class", "font"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Original y Copia legible de acta constitutiva o poder notarial que acredite al representate legal."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 3, "li", [["class", "font"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Copia legible de identificacion oficial del representante legal "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["(Credencial del Instituto Nacional Electoral(INE)o pasaporte vigente o cartilla militar nacional o licencia de manejo)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 3, "li", [["class", "font"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Copia legible de identificacion oficial de las personas autorizadas"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["(Credencial del Instituto Nacional Electoral(INE)o pasaporte vigente o cartilla militar nacional o licencia de manejo)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 3, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 16777216, null, null, 2, "u", [["mdbTooltip", "\n\n                                    Una persona f\u00EDsica o natural es, seg\u00FAn el derecho, un individuo con existencia real y material, que tiene la capacidad para ejercer sus derechos y contraer obligaciones dentro del marco de la ley y la constituci\u00F3n"]], null, [[null, "click"], ["window", "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).onclick($event) !== false);
        ad = (pd_0 && ad);
    } if (("window:click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).onblur() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 737280, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["TooltipDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["ɵe"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["TooltipConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], { mdbTooltip: [0, "mdbTooltip"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["En Caso de ser personas Fisicas:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 3, "li", [["class", "font"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Copia legible de identificacion oficial del Propietario "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["(Credencial del Instituto Nacional Electoral(INE)o pasaporte vigente o cartilla militar nacional o licencia de manejo) "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 3, "li", [["class", "font"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Copia legible de identificacion oficial del representante legal "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["(Credencial del Instituto Nacional Electoral(INE)o pasaporte vigente o cartilla militar nacional o licencia de manejo) "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, 0, 15, "div", [["class", "table-responsive  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 14, "table", [["class", "table-bordered col-md-6  mx-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 3, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 1, "th", [["class", "text-p"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Papeleria necesaria"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 9, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["COPIA DEL IFE"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["COPIA DE RFC"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" COPIA DE COMPROBANTE DE DOMICILIO DEL NEGOCIO"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, 0, 91, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 1, "a", [["aria-controls", "multiCollapseExample1"], ["aria-expanded", "false"], ["class", "btn btn-primary col-md-5"], ["data-toggle", "collapse"], ["href", "#multiCollapseExample1"], ["role", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CLAVES SCIAN"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 88, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 87, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 86, "div", [["class", "collapse multi-collapse"], ["id", "multiCollapseExample1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 85, "div", [["class", "card card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 84, "div", [["class", "card border-primary col-md-12"], ["style", "max-width: 95rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, null, 1, "div", [["class", "card-header font-t"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CLAVES SCIAN Y DESCRIPCION"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 81, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 78, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 6, "p", [["class", "color-t font-c"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["722511"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [":Restaurantes con servicio de preparacion de alimentos a la carta o de comida corrida "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](76, 0, null, null, 2, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["(incluye Restaurantes Hoteles, Moteles y Similares)."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](79, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](80, 0, null, null, 6, "p", [["class", "color-t font-c"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["722512"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [":Restaurantes con servicio de preparacion de Pescados Y Mariscos "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](84, 0, null, null, 2, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](85, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" (incluye Restaurantes Hoteles, Moteles y Similares)."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](87, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](88, 0, null, null, 6, "p", [["class", "color-t font-c"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](89, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["722513"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [":Restaurantes con servicio de preparacion de antojitos "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](92, 0, null, null, 2, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](93, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["(incluye Restaurantes Hoteles, Moteles y Similares)."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](95, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](96, 0, null, null, 6, "p", [["class", "color-t font-c"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](97, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["722514"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [":Restaurantes con servicio de preparacion de Tacos y Tortas "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](100, 0, null, null, 2, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](101, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" (incluye Restaurantes Hoteles, Moteles y Similares)."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](103, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](104, 0, null, null, 6, "p", [["class", "color-t font-c"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](105, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["722515"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [":Cafeterias, Fuentes de Sodas,Neverias,Refresquerias y Similares "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](108, 0, null, null, 2, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](109, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" (incluye Restaurantes Hoteles, Moteles y Similares)."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](111, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](112, 0, null, null, 3, "p", [["class", "color-t font-c "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](113, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["722517"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [":Restaurantes con Servicio de Preparacion de Pizza,Hamburgesas, HotDogs y Pollos Rostizados para Llevar)."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](116, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](117, 0, null, null, 3, "p", [["class", "color-t font-c"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](118, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["722519"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [":Servicio de Preparacion de Otros Alimentos Para Consumo Inmediato."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](121, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](122, 0, null, null, 6, "p", [["class", "color-t font-c"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](123, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["467111"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [":Comercio al Por Menor en Ferreteria y Tlapalerias "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](126, 0, null, null, 2, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](127, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["(Solo para Ventas de Plaguicidas , Nutrientes Vegetales y Sustancias T\u00F3xicas)."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](129, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](130, 0, null, null, 3, "p", [["class", "color-t font-c"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](131, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["461110"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [":Comercio al Por Menor en Tiendas de Abarrotes, Ultramarinos y Miscelaneas."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](134, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](135, 0, null, null, 3, "p", [["class", "color-t font-c"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](136, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["461121"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [":Comercio al Por Menor de Carnes Rojas."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](139, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](140, 0, null, null, 3, "p", [["class", "color-t font-c"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](141, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["311812"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [":Planificacion Tradicional."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](144, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](145, 0, null, null, 3, "p", [["class", "color-t font-c"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](146, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["312142"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [":Elaboracion de Bebidas Destiladas de Agave."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](149, 0, null, null, 1, "a", [["class", "btn btn-success btn-block"], ["href", "https://www.gob.mx/cms/uploads/attachment/file/348735/SCIAN_completo.pdf"], ["target", ".blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Claves scian completas"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](151, 0, null, 0, 194, "div", [["class", "colla"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](152, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](153, 0, null, null, 1, "a", [["aria-controls", "collapseExample"], ["aria-expanded", "false"], ["class", "btn btn-primary col-md-5"], ["data-toggle", "collapse"], ["href", "#collapseExample"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Descargar formato e informacion "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](155, 0, null, null, 30, "div", [["class", "collapse col-md-12"], ["id", "collapseExample"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](156, 0, null, null, 29, "div", [["class", "mt-3 row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](157, 0, null, null, 7, "div", [["class", "card border-primary col-md-3"], ["style", "max-width: 25rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](158, 0, null, null, 1, "div", [["class", "card-header font-t size-t"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["FORMATO"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](160, 0, null, null, 4, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](161, 0, null, null, 1, "a", [["class", "btn btn-primary bo-m col-md-12"], ["href", "http://documentos.cofepris.gob.mx/archivos/cis/FORMATOS/Formato_Aviso_Funcionamiento.docx"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Descargar formulario"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](163, 0, null, null, 1, "a", [["class", "btn btn-primary bo-m col-md-12"], ["href", "https://www.gob.mx/cms/uploads/attachment/file/348567/Instructivo_Aviso_Funcionamiento.pdf"], ["target", ".blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Click Para Mas informacion"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](165, 0, null, null, 6, "div", [["class", "card border-primary col-md-3"], ["style", "max-width: 25rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](166, 0, null, null, 1, "div", [["class", "card-header font-t  size-t"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["PAGO ASOCIADO"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](168, 0, null, null, 3, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](169, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](170, 0, null, null, 1, "Strong", [["class", "color-t"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["NO REQUIERE PAGO"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](172, 0, null, null, 6, "div", [["class", "card border-primary col-md-3"], ["style", "max-width: 25rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](173, 0, null, null, 1, "div", [["class", "card-header font-t size-t"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" FICHA DE TRAMITE"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](175, 0, null, null, 3, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](176, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](177, 0, null, null, 1, "Strong", [["class", "color-t"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["NO APLICA"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](179, 0, null, null, 6, "div", [["class", "card border-primary col-md-3"], ["style", "max-width: 25rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](180, 0, null, null, 1, "div", [["class", "card-header font-t size-t"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["FUNDAMENTO LEGAL"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](182, 0, null, null, 3, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](183, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](184, 0, null, null, 1, "Strong", [["class", "color-t font-f"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["ARTICULO 200 Y 200 BIS DE LA LEY GENERAL DE SALUD "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](186, 0, null, null, 1, "button", [["aria-controls", "multiCollapseExample2"], ["aria-expanded", "false"], ["class", "btn btn-primary col-md-5"], ["data-target", "#multiCollapseExample2"], ["data-toggle", "collapse"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Instrucciones de como llenar el formato"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](188, 0, null, null, 53, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](189, 0, null, null, 16, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](190, 0, null, null, 15, "div", [["class", "collapse multi-collapse"], ["id", "multiCollapseExample2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](191, 0, null, null, 14, "div", [["class", "card card-body col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](192, 0, null, null, 13, "div", [["class", "card border-primary mb-3 "], ["style", "max-width: 50rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](193, 0, null, null, 1, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CAMPO UNO"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](195, 0, null, null, 10, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](196, 0, null, null, 1, "h5", [["class", "card-title "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](197, 0, null, null, 0, "img", [["alt", ""], ["class", "size-i zoom"], ["src", "../../../assets/imagenes/paso1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](198, 0, null, null, 7, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["En este paso se tiene 3 pasos el numero 1 te pide la homoclave esta es dependedienndo del tramite, En este caso es el COFEPRIS-05-018. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](200, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" El 2do nos pide el nombre que no es el de nosotros si no el nombre del "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](202, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["establecimiento"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](204, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Y por ultimo tenemos la modalidad es esta en este caso Aviso de funcionamiento del establecimiento de Productos Y Servicios ."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](206, 0, null, null, 18, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](207, 0, null, null, 17, "div", [["class", "collapse multi-collapse"], ["id", "multiCollapseExample2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](208, 0, null, null, 16, "div", [["class", "card card-body col-md-12 "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](209, 0, null, null, 15, "div", [["class", "card border-primary mb-3 "], ["style", "max-width: 50rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](210, 0, null, null, 1, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CAMPO DOS"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](212, 0, null, null, 12, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](213, 0, null, null, 1, "h5", [["class", "card-title "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](214, 0, null, null, 0, "img", [["alt", ""], ["class", "size-i zoom"], ["src", "../../../assets/imagenes/paso2.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](215, 0, null, null, 9, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Aqui solo tienes que llenar en caso del la persona que tu seas si eres moral solo llenas los campos de las personal moral , en caso contrario llenar los campos de persona fisica. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](217, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Eso en la primera parte despues se tiene que llenar los datos del propietario del local o establecimiento "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](219, 0, null, null, 4, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](220, 0, null, null, 2, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["NOTA: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](222, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" No son los datos del lugar si no de la persona que es due\u00F1a "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" ."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](225, 0, null, null, 16, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](226, 0, null, null, 15, "div", [["class", "collapse multi-collapse"], ["id", "multiCollapseExample2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](227, 0, null, null, 14, "div", [["class", "card card-body col-md-12 "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](228, 0, null, null, 13, "div", [["class", "card border-primary mb-3 "], ["style", "max-width: 50rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](229, 0, null, null, 1, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CAMPO TRES"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](231, 0, null, null, 10, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](232, 0, null, null, 1, "h5", [["class", "card-title "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](233, 0, null, null, 0, "img", [["alt", ""], ["class", "size-i zoom"], ["src", "../../../assets/imagenes/paso3.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](234, 0, null, null, 7, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["En esta seccion nos pide la clave scian que esta la puede encontrar en la parte de arriba de un boton que se llama clave scian que son las scian de este tipo de permisos. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](236, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Despues nos pide los horario de las horas que el establecimiento estara abierto como observaion poner si abre de lunes a domingo pero los sabados y domingo cierra mas temprano poner en primera columna que horario tiene de lunes a viernes y debajo en la segunda columna poner que horario tiene los sabados y domingos. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](238, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Ahora poner el domicilio y los datos de donde esta ubicado el establecimiento. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](240, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" llenar datos de persona legal que es el due\u00F1o y la perosona autorizada que puede ser el gerente o un encargado del lugar, poner sus datos. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](242, 0, null, null, 56, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](243, 0, null, null, 10, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](244, 0, null, null, 9, "div", [["class", "collapse multi-collapse"], ["id", "multiCollapseExample2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](245, 0, null, null, 8, "div", [["class", "card card-body "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](246, 0, null, null, 7, "div", [["class", "card border-primary mb-3 "], ["style", "max-width: 50rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](247, 0, null, null, 1, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CAMPO TRES PARTE DOS"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](249, 0, null, null, 4, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](250, 0, null, null, 1, "h5", [["class", "card-title "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](251, 0, null, null, 0, "img", [["alt", ""], ["class", "size-i zoom"], ["src", "../../../assets/imagenes/paso3_parte2.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](252, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Mas campos en caso de que no solo sea un solo due\u00F1o o que hay mas de una persona autoriazda, llenar los campos de cada una de estas personas."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](254, 0, null, null, 13, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](255, 0, null, null, 12, "div", [["class", "collapse multi-collapse"], ["id", "multiCollapseExample2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](256, 0, null, null, 11, "div", [["class", "card card-body "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](257, 0, null, null, 10, "div", [["class", "card border-primary mb-3 "], ["style", "max-width: 50rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](258, 0, null, null, 1, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CAMPO SEIS"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](260, 0, null, null, 7, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](261, 0, null, null, 4, "h5", [["class", "card-title color-t"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](262, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](263, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Aqui de la seccion 6 se llenan los siguientes numeros"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](265, 0, null, null, 0, "img", [["alt", ""], ["class", "size-i zoom"], ["src", "../../../assets/imagenes/paso6_sub1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](266, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Llenar si es alta, baja o modificacion de negocio."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](268, 0, null, null, 30, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](269, 0, null, null, 29, "div", [["class", "collapse multi-collapse"], ["id", "multiCollapseExample2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](270, 0, null, null, 28, "div", [["class", "card card-body "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](271, 0, null, null, 27, "div", [["class", "card border-primary mb-3 "], ["style", "max-width: 50rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](272, 0, null, null, 1, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CAMPO SEIS"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](274, 0, null, null, 24, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](275, 0, null, null, 4, "h5", [["class", "card-title color-t "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](276, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](277, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Aqui de la seccion 6 se llenan los siguientes numeros"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](279, 0, null, null, 0, "img", [["alt", ""], ["class", "size-i zoom"], ["src", "../../../assets/imagenes/paso6_sub2.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](280, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Llenar datos de la tabla en caso de que no sepa cual es su categoria dar click en el boton de ver tabla y despues buscar su categoria,subcategoria etc."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](282, 0, null, null, 1, "button", [["class", "btn btn-primary"], ["data-target", "#basicExampleModal"], ["data-toggle", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Ver tablas "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](284, 0, null, null, 14, "div", [["aria-hidden", "true"], ["aria-labelledby", "exampleModalLabel"], ["class", "modal fade"], ["id", "basicExampleModal"], ["role", "dialog"], ["tabindex", "-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](285, 0, null, null, 13, "div", [["class", "modal-dialog"], ["role", "document"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](286, 0, null, null, 12, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](287, 0, null, null, 5, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](288, 0, null, null, 1, "h5", [["class", "modal-title"], ["id", "exampleModalLabel"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Categoria de Producto"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](290, 0, null, null, 2, "button", [["aria-label", "Close"], ["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](291, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00D7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](293, 0, null, null, 2, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](294, 0, null, null, 0, "img", [["class", "size-i zoom"], ["src", "../../../assets/imagenes/tabla_b.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](295, 0, null, null, 0, "img", [["alt", ""], ["class", "size-i zoom"], ["src", "../../../assets/imagenes/tabla_b_cont.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](296, 0, null, null, 2, "div", [["class", "modal-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](297, 0, null, null, 1, "button", [["class", "btn btn-secondary mx-auto"], ["data-dismiss", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Close"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](299, 0, null, null, 46, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](300, 0, null, null, 13, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](301, 0, null, null, 12, "div", [["class", "collapse multi-collapse"], ["id", "multiCollapseExample2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](302, 0, null, null, 11, "div", [["class", "card card-body "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](303, 0, null, null, 10, "div", [["class", "card border-primary mb-3 "], ["style", "max-width: 50rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](304, 0, null, null, 1, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CAMPO SEIS"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](306, 0, null, null, 7, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](307, 0, null, null, 4, "h5", [["class", "card-title color-t "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](308, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](309, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Aqui de la seccion 6 se llenan los siguientes numeros"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](311, 0, null, null, 0, "img", [["alt", ""], ["class", "size-i zoom"], ["src", "../../../assets/imagenes/pasos3y4.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](312, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["En esta seccion se llena con los datos del producto que quiere dar de alta."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](314, 0, null, null, 17, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](315, 0, null, null, 16, "div", [["class", "collapse multi-collapse"], ["id", "multiCollapseExample2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](316, 0, null, null, 15, "div", [["class", "card card-body "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](317, 0, null, null, 14, "div", [["class", "card border-primary mb-3 "], ["style", "max-width: 50rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](318, 0, null, null, 1, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CAMPO SEIS"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](320, 0, null, null, 11, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](321, 0, null, null, 8, "h5", [["class", "card-title color-t "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](322, 0, null, null, 3, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["AVISO!!! "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](324, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" este paso solo si es requerido"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](326, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](327, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Aqui de la seccion 6 se llenan los siguientes numeros"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](329, 0, null, null, 0, "img", [["alt", ""], ["class", "size-i zoom"], ["src", "../../../assets/imagenes/pasos_5_y_6.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](330, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](332, 0, null, null, 13, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](333, 0, null, null, 12, "div", [["class", "collapse multi-collapse"], ["id", "multiCollapseExample2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](334, 0, null, null, 11, "div", [["class", "card card-body "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](335, 0, null, null, 10, "div", [["class", "card border-primary mb-3 "], ["style", "max-width: 50rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](336, 0, null, null, 1, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CAMPO SEIS"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](338, 0, null, null, 7, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](339, 0, null, null, 4, "h5", [["class", "card-title color-t "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](340, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](341, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Aqui de la seccion 6 se llenan los siguientes numeros"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](343, 0, null, null, 0, "img", [["alt", ""], ["class", "size-i zoom"], ["src", "../../../assets/imagenes/pasos_7y8.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](344, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Llenar los datos segin la tabla A que esta debajo del punto."]))], function (_ck, _v) { var currVal_0 = "size"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "text-c"; _ck(_v, 3, 0, currVal_1); var currVal_2 = "\n                                    Como persona moral o jur\u00EDdica se designa, en derecho, toda aquella entidad de existencia jur\u00EDdica, que est\u00E1 constituida por grupos u organizaciones de personas"; _ck(_v, 19, 0, currVal_2); var currVal_3 = "\n\n                                    Una persona f\u00EDsica o natural es, seg\u00FAn el derecho, un individuo con existencia real y material, que tiene la capacidad para ejercer sus derechos y contraer obligaciones dentro del marco de la ley y la constituci\u00F3n"; _ck(_v, 33, 0, currVal_3); }, null); }
function View_TramitesComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 399, "mdb-card", [["class", "size"], ["id", "tramite2"]], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MdbCardComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MdbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MdbCardComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { class: [0, "class"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 397, "mdb-card-body", [["class", "text-c"]], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MdbCardBodyComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MdbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MdbCardBodyComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { class: [0, "class"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 2, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["DOCUMENTOS REQUERIDOS PARA FORMATO "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 4, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["COFEPRIS-05-019"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["(Aviso de Modificacion al Aviso de Funcionamiento o Baja de Establecimiento de Productos Y Servicios)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, 0, 29, "div", [["class", "list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 28, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "li", [["class", "font"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Original y copia siempre legible del formato \"avisos de funcionaminto, de Responsable Sanitario y de Modificacion o Baja\", Debidamente requisitado."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 3, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 16777216, null, null, 2, "u", [["mdbTooltip", "Como persona moral o jur\u00EDdica se designa, en derecho, toda aquella entidad de existencia jur\u00EDdica, que est\u00E1 constituida por grupos u organizaciones de personas"]], null, [[null, "click"], ["window", "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onclick($event) !== false);
        ad = (pd_0 && ad);
    } if (("window:click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onblur() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 737280, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["TooltipDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["ɵe"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["TooltipConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], { mdbTooltip: [0, "mdbTooltip"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["En Caso de ser personas Morales:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "li", [["class", "font"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Original y Copia legible de acta constitutiva o poder notarial que acredite al representate legal."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 3, "li", [["class", "font"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Copia legible de identificacion oficial del representante legal "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["(Credencial del Instituto Nacional Electoral(INE)o pasaporte vigente o cartilla militar nacional o licencia de manejo)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 3, "li", [["class", "font"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Copia legible de identificacion oficial de las personas autorizadas"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["(Credencial del Instituto Nacional Electoral(INE)o pasaporte vigente o cartilla militar nacional o licencia de manejo)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 3, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 16777216, null, null, 2, "u", [["mdbTooltip", "Una persona f\u00EDsica o natural es, seg\u00FAn el derecho, un individuo con existencia real y material, que tiene la capacidad para ejercer sus derechos y contraer obligaciones dentro del marco de la ley y la constituci\u00F3n"]], null, [[null, "click"], ["window", "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).onclick($event) !== false);
        ad = (pd_0 && ad);
    } if (("window:click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).onblur() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 737280, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["TooltipDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["ɵe"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["TooltipConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], { mdbTooltip: [0, "mdbTooltip"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["En Caso de ser personas Fisicas:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 3, "li", [["class", "font"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Copia legible de identificacion oficial del Propietario "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["(Credencial del Instituto Nacional Electoral(INE)o pasaporte vigente o cartilla militar nacional o licencia de manejo) "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 3, "li", [["class", "font"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Copia legible de identificacion oficial del representante legal "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["(Credencial del Instituto Nacional Electoral(INE)o pasaporte vigente o cartilla militar nacional o licencia de manejo) "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, 0, 18, "div", [["class", "table-responsive  "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 17, "table", [["class", "table-bordered col-md-6  mx-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 3, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 1, "th", [["class", "text-p"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Papeleria necesaria"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 12, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["COPIA DEL IFE"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["COPIA DE RFC"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" COPIA DE COMPROBANTE DE DOMICILIO DEL NEGOCIO"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" ENTREGAR EL ORIGINAL ANTERIOR"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, 0, 91, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 1, "a", [["aria-controls", "multiCollapseExample4"], ["aria-expanded", "false"], ["class", "btn btn-primary col-md-5"], ["data-toggle", "collapse"], ["href", "#multiCollapseExample4"], ["role", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CLAVES SCIAN"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 88, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 87, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, null, 86, "div", [["class", "collapse multi-collapse"], ["id", "multiCollapseExample4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 85, "div", [["class", "card card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 84, "div", [["class", "card border-primary col-md-12"], ["style", "max-width: 95rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 1, "div", [["class", "card-header font-t"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CLAVES SCIAN Y DESCRIPCION"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 81, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, null, 78, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 0, null, null, 6, "p", [["class", "color-t font-c"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](76, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["722511"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [":Restaurantes con servicio de preparacion de alimentos a la carta o de comida corrida "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](79, 0, null, null, 2, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](80, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["(incluye Restaurantes Hoteles, Moteles y Similares)."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](82, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 0, null, null, 6, "p", [["class", "color-t font-c"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](84, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["722512"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [":Restaurantes con servicio de preparacion de Pescados Y Mariscos "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](87, 0, null, null, 2, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](88, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" (incluye Restaurantes Hoteles, Moteles y Similares)."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](90, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](91, 0, null, null, 6, "p", [["class", "color-t font-c"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](92, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["722513"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [":Restaurantes con servicio de preparacion de antojitos "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](95, 0, null, null, 2, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](96, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["(incluye Restaurantes Hoteles, Moteles y Similares)."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](98, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](99, 0, null, null, 6, "p", [["class", "color-t font-c"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](100, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["722514"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [":Restaurantes con servicio de preparacion de Tacos y Tortas "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](103, 0, null, null, 2, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](104, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" (incluye Restaurantes Hoteles, Moteles y Similares)."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](106, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](107, 0, null, null, 6, "p", [["class", "color-t font-c"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](108, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["722515"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [":Cafeterias, Fuentes de Sodas,Neverias,Refresquerias y Similares "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](111, 0, null, null, 2, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](112, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" (incluye Restaurantes Hoteles, Moteles y Similares)."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](114, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](115, 0, null, null, 3, "p", [["class", "color-t font-c "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](116, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["722517"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [":Restaurantes con Servicio de Preparacion de Pizza,Hamburgesas, HotDogs y Pollos Rostizados para Llevar)."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](119, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](120, 0, null, null, 3, "p", [["class", "color-t font-c"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](121, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["722519"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [":Servicio de Preparacion de Otros Alimentos Para Consumo Inmediato."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](124, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](125, 0, null, null, 6, "p", [["class", "color-t font-c"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](126, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["467111"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [":Comercio al Por Menor en Ferreteria y Tlapalerias "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](129, 0, null, null, 2, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](130, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["(Solo para Ventas de Plaguicidas , Nutrientes Vegetales y Sustancias T\u00F3xicas)."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](132, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](133, 0, null, null, 3, "p", [["class", "color-t font-c"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](134, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["461110"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [":Comercio al Por Menor en Tiendas de Abarrotes, Ultramarinos y Miscelaneas."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](137, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](138, 0, null, null, 3, "p", [["class", "color-t font-c"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](139, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["461121"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [":Comercio al Por Menor de Carnes Rojas."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](142, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](143, 0, null, null, 3, "p", [["class", "color-t font-c"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](144, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["311812"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [":Planificacion Tradicional."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](147, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](148, 0, null, null, 3, "p", [["class", "color-t font-c"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](149, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["312142"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [":Elaboracion de Bebidas Destiladas de Agave."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](152, 0, null, null, 1, "a", [["class", "btn btn-success btn-block"], ["href", "https://www.gob.mx/cms/uploads/attachment/file/348735/SCIAN_completo.pdf"], ["target", ".blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Claves scian completas"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](154, 0, null, 0, 245, "div", [["class", "colla"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](155, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](156, 0, null, null, 1, "a", [["aria-controls", "collapseExample2"], ["aria-expanded", "false"], ["class", "btn btn-primary col-md-5"], ["data-toggle", "collapse"], ["href", "#collapseExample2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Descargar formato e informacion "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](158, 0, null, null, 30, "div", [["class", "collapse col-md-12"], ["id", "collapseExample2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](159, 0, null, null, 29, "div", [["class", "mt-3 row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](160, 0, null, null, 7, "div", [["class", "card border-primary col-md-3"], ["style", "max-width: 25rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](161, 0, null, null, 1, "div", [["class", "card-header font-t size-t"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["FORMATO"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](163, 0, null, null, 4, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](164, 0, null, null, 1, "a", [["class", "btn btn-primary bo-m col-md-12"], ["href", "http://documentos.cofepris.gob.mx/archivos/cis/FORMATOS/Formato_Aviso_Funcionamiento.docx"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Descargar formulario"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](166, 0, null, null, 1, "a", [["class", "btn btn-primary bo-m col-md-12"], ["href", "https://www.gob.mx/cms/uploads/attachment/file/348567/Instructivo_Aviso_Funcionamiento.pdf"], ["target", ".blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Click Para Mas informacion"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](168, 0, null, null, 6, "div", [["class", "card border-primary col-md-3"], ["style", "max-width: 25rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](169, 0, null, null, 1, "div", [["class", "card-header font-t  size-t"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["PAGO ASOCIADO"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](171, 0, null, null, 3, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](172, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](173, 0, null, null, 1, "Strong", [["class", "color-t"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["NO REQUIERE PAGO"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](175, 0, null, null, 6, "div", [["class", "card border-primary col-md-3"], ["style", "max-width: 25rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](176, 0, null, null, 1, "div", [["class", "card-header font-t size-t"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" FICHA DE TRAMITE"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](178, 0, null, null, 3, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](179, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](180, 0, null, null, 1, "Strong", [["class", "color-t"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["NO APLICA"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](182, 0, null, null, 6, "div", [["class", "card border-primary col-md-3"], ["style", "max-width: 25rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](183, 0, null, null, 1, "div", [["class", "card-header font-t size-t"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["FUNDAMENTO LEGAL"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](185, 0, null, null, 3, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](186, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](187, 0, null, null, 1, "Strong", [["class", "color-t font-f"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["ARTICULO 200 Y 200 BIS DE LA LEY GENERAL DE SALUD "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](189, 0, null, null, 1, "button", [["aria-controls", "multiCollapseExample3"], ["aria-expanded", "false"], ["class", "btn btn-primary col-md-5"], ["data-target", "#multiCollapseExample3"], ["data-toggle", "collapse"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Instrucciones de como llenar el formato"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](191, 0, null, null, 53, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](192, 0, null, null, 16, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](193, 0, null, null, 15, "div", [["class", "collapse multi-collapse"], ["id", "multiCollapseExample3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](194, 0, null, null, 14, "div", [["class", "card card-body col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](195, 0, null, null, 13, "div", [["class", "card border-primary mb-3 "], ["style", "max-width: 50rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](196, 0, null, null, 1, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CAMPO UNO"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](198, 0, null, null, 10, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](199, 0, null, null, 1, "h5", [["class", "card-title "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](200, 0, null, null, 0, "img", [["alt", ""], ["class", "size-i zoom"], ["src", "../../../assets/imagenes/paso1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](201, 0, null, null, 7, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["En este paso se tiene 3 pasos el numero 1 te pide la homoclave esta es dependedienndo del tramite, En este caso es el COFEPRIS-05-018. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](203, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" El 2do nos pide el nombre que no es el de nosotros si no el nombre del "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](205, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["establecimiento"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](207, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Y por ultimo tenemos la modalidad es esta en este caso Aviso de funcionamiento del establecimiento de Productos Y Servicios ."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](209, 0, null, null, 18, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](210, 0, null, null, 17, "div", [["class", "collapse multi-collapse"], ["id", "multiCollapseExample3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](211, 0, null, null, 16, "div", [["class", "card card-body col-md-12 "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](212, 0, null, null, 15, "div", [["class", "card border-primary mb-3 "], ["style", "max-width: 50rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](213, 0, null, null, 1, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CAMPO DOS"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](215, 0, null, null, 12, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](216, 0, null, null, 1, "h5", [["class", "card-title "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](217, 0, null, null, 0, "img", [["alt", ""], ["class", "size-i zoom"], ["src", "../../../assets/imagenes/paso2.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](218, 0, null, null, 9, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Aqui solo tienes que llenar en caso del la persona que tu seas si eres moral solo llenas los campos de las personal moral , en caso contrario llenar los campos de persona fisica. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](220, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Eso en la primera parte despues se tiene que llenar los datos del propietario del local o establecimiento "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](222, 0, null, null, 4, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](223, 0, null, null, 2, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["NOTA: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](225, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" No son los datos del lugar si no de la persona que es due\u00F1a "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" ."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](228, 0, null, null, 16, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](229, 0, null, null, 15, "div", [["class", "collapse multi-collapse"], ["id", "multiCollapseExample3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](230, 0, null, null, 14, "div", [["class", "card card-body col-md-12 "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](231, 0, null, null, 13, "div", [["class", "card border-primary mb-3 "], ["style", "max-width: 50rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](232, 0, null, null, 1, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CAMPO TRES"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](234, 0, null, null, 10, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](235, 0, null, null, 1, "h5", [["class", "card-title "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](236, 0, null, null, 0, "img", [["alt", ""], ["class", "size-i zoom"], ["src", "../../../assets/imagenes/paso3.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](237, 0, null, null, 7, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["En esta seccion nos pide la clave scian que esta la puede encontrar en la parte de arriba de un boton que se llama clave scian que son las scian de este tipo de permisos. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](239, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Despues nos pide los horario de las horas que el establecimiento estara abierto como observaion poner si abre de lunes a domingo pero los sabados y domingo cierra mas temprano poner en primera columna que horario tiene de lunes a viernes y debajo en la segunda columna poner que horario tiene los sabados y domingos. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](241, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Ahora poner el domicilio y los datos de donde esta ubicado el establecimiento. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](243, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" llenar datos de persona legal que es el due\u00F1o y la perosona autorizada que puede ser el gerente o un encargado del lugar, poner sus datos. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](245, 0, null, null, 56, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](246, 0, null, null, 10, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](247, 0, null, null, 9, "div", [["class", "collapse multi-collapse"], ["id", "multiCollapseExample3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](248, 0, null, null, 8, "div", [["class", "card card-body "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](249, 0, null, null, 7, "div", [["class", "card border-primary mb-3 "], ["style", "max-width: 50rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](250, 0, null, null, 1, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CAMPO TRES PARTE DOS"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](252, 0, null, null, 4, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](253, 0, null, null, 1, "h5", [["class", "card-title "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](254, 0, null, null, 0, "img", [["alt", ""], ["class", "size-i zoom"], ["src", "../../../assets/imagenes/paso3_parte2.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](255, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Mas campos en caso de que no solo sea un solo due\u00F1o o que hay mas de una persona autoriazda, llenar los campos de cada una de estas personas."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](257, 0, null, null, 13, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](258, 0, null, null, 12, "div", [["class", "collapse multi-collapse"], ["id", "multiCollapseExample3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](259, 0, null, null, 11, "div", [["class", "card card-body "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](260, 0, null, null, 10, "div", [["class", "card border-primary mb-3 "], ["style", "max-width: 50rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](261, 0, null, null, 1, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CAMPO SEIS"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](263, 0, null, null, 7, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](264, 0, null, null, 4, "h5", [["class", "card-title color-t"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](265, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](266, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Aqui de la seccion 6 se llenan los siguientes numeros"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](268, 0, null, null, 0, "img", [["alt", ""], ["class", "size-i zoom"], ["src", "../../../assets/imagenes/paso6_sub1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](269, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Llenar los campos de el tramite que se va a realizar si es una alta de negocio , baja de negocio o una modificacion de negocio."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](271, 0, null, null, 30, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](272, 0, null, null, 29, "div", [["class", "collapse multi-collapse"], ["id", "multiCollapseExample3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](273, 0, null, null, 28, "div", [["class", "card card-body "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](274, 0, null, null, 27, "div", [["class", "card border-primary mb-3 "], ["style", "max-width: 50rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](275, 0, null, null, 1, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CAMPO SEIS"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](277, 0, null, null, 7, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](278, 0, null, null, 4, "h5", [["class", "card-title color-t "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](279, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](280, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Aqui de la seccion 6 se llenan los siguientes numeros"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](282, 0, null, null, 0, "img", [["alt", ""], ["class", "size-i zoom"], ["src", "../../../assets/imagenes/paso6_sub2.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](283, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Lenar los campos con ayuda de la tabala b que esta si usted selecciona la parte de ver tabla usted puede ver cual es la tabla en caso de que no quiera la tabla b esta en la parte final del formulario en las ultimas 2 paginas."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](285, 0, null, null, 1, "button", [["class", "btn btn-primary"], ["data-target", "#basicExampleModal2"], ["data-toggle", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Ver tablas "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](287, 0, null, null, 14, "div", [["aria-hidden", "true"], ["aria-labelledby", "exampleModalLabel2"], ["class", "modal fade"], ["id", "basicExampleModal2"], ["role", "dialog"], ["tabindex", "-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](288, 0, null, null, 13, "div", [["class", "modal-dialog"], ["role", "document"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](289, 0, null, null, 12, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](290, 0, null, null, 5, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](291, 0, null, null, 1, "h5", [["class", "modal-title"], ["id", "exampleModalLabel2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Categoria de Producto"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](293, 0, null, null, 2, "button", [["aria-label", "Close"], ["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](294, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00D7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](296, 0, null, null, 2, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](297, 0, null, null, 0, "img", [["class", "size-i zoom"], ["src", "../../../assets/imagenes/tabla_b.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](298, 0, null, null, 0, "img", [["alt", ""], ["class", "size-i zoom"], ["src", "../../../assets/imagenes/tabla_b_cont.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](299, 0, null, null, 2, "div", [["class", "modal-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](300, 0, null, null, 1, "button", [["class", "btn btn-secondary mx-auto"], ["data-dismiss", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Close"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](302, 0, null, null, 48, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](303, 0, null, null, 17, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](304, 0, null, null, 16, "div", [["class", "collapse multi-collapse"], ["id", "multiCollapseExample3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](305, 0, null, null, 15, "div", [["class", "card card-body "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](306, 0, null, null, 14, "div", [["class", "card border-primary mb-3 "], ["style", "max-width: 50rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](307, 0, null, null, 1, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CAMPO SEIS"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](309, 0, null, null, 11, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](310, 0, null, null, 8, "h5", [["class", "card-title color-t "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](311, 0, null, null, 3, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["AVISO!!! "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](313, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" este paso solo si es requerido"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](315, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](316, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Aqui de la seccion 6 se llenan los siguientes numeros"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](318, 0, null, null, 0, "img", [["alt", ""], ["class", "size-i zoom"], ["src", "../../../assets/imagenes/pasos3y4.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](319, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["En esta seccion se llena con los datos del producto que quiere dar de alta."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](321, 0, null, null, 13, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](322, 0, null, null, 12, "div", [["class", "collapse multi-collapse"], ["id", "multiCollapseExample3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](323, 0, null, null, 11, "div", [["class", "card card-body "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](324, 0, null, null, 10, "div", [["class", "card border-primary mb-3 "], ["style", "max-width: 50rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](325, 0, null, null, 1, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CAMPO SEIS"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](327, 0, null, null, 7, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](328, 0, null, null, 4, "h5", [["class", "card-title color-t "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](329, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](330, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Aqui de la seccion 6 se llenan los siguientes numeros"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](332, 0, null, null, 0, "img", [["alt", ""], ["class", "size-i zoom"], ["src", "../../../assets/imagenes/pasos_7y8.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](333, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Se llenaran los datos dependedienndo si es persona moral o perosona fisica y cual modificacion que desea realizar en caso de ser una modificacion ."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](335, 0, null, null, 15, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](336, 0, null, null, 14, "div", [["class", "collapse multi-collapse"], ["id", "multiCollapseExample3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](337, 0, null, null, 13, "div", [["class", "card card-body "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](338, 0, null, null, 12, "div", [["class", "card border-primary mb-3 "], ["style", "max-width: 50rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](339, 0, null, null, 1, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CAMPO SIETE"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](341, 0, null, null, 9, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](342, 0, null, null, 6, "h5", [["class", "card-title color-t "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](343, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](344, 0, null, null, 3, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["AVISO!!! "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](346, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" SOLO EN CASO DE SER NECESARIO LLENAR ESTE CAMPO"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](348, 0, null, null, 0, "img", [["alt", ""], ["class", "size-i zoom"], ["src", "../../../assets/imagenes/paso7.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](349, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](351, 0, null, null, 48, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](352, 0, null, null, 15, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](353, 0, null, null, 14, "div", [["class", "collapse multi-collapse"], ["id", "multiCollapseExample3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](354, 0, null, null, 13, "div", [["class", "card card-body "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](355, 0, null, null, 12, "div", [["class", "card border-primary mb-3 "], ["style", "max-width: 50rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](356, 0, null, null, 1, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CAMPO SIETE"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](358, 0, null, null, 9, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](359, 0, null, null, 6, "h5", [["class", "card-title color-t "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](360, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](361, 0, null, null, 3, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["AVISO!!! "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](363, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" SOLO EN CASO DE SER NECESARIO LLENAR ESTE CAMPO"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](365, 0, null, null, 0, "img", [["alt", ""], ["class", "size-i zoom"], ["src", "../../../assets/imagenes/paso7_sub2.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](366, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Aqui es si usted va a hacer una modificacion va a poner como esta actualmente en la parte de dice y en la parte de debe decir va a poner los nuevos campos si cambio nombre o si cambio domicilio dependiendo de su modificacion."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](368, 0, null, null, 15, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](369, 0, null, null, 14, "div", [["class", "collapse multi-collapse"], ["id", "multiCollapseExample3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](370, 0, null, null, 13, "div", [["class", "card card-body "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](371, 0, null, null, 12, "div", [["class", "card border-primary mb-3 "], ["style", "max-width: 50rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](372, 0, null, null, 1, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CAMPO SIETE"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](374, 0, null, null, 9, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](375, 0, null, null, 6, "h5", [["class", "card-title color-t "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](376, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](377, 0, null, null, 3, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["AVISO!!! "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](379, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" SOLO EN CASO DE SER NECESARIO LLENAR ESTE CAMPO"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](381, 0, null, null, 0, "img", [["alt", ""], ["class", "size-i zoom"], ["src", "../../../assets/imagenes/paso7_sub3.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](382, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Aqui es si usted va a hacer una modificacion va a poner como esta actualmente en la parte de dice y en la parte de debe decir va a poner los nuevos campos si cambio nombre o si cambio domicilio dependiendo de su modificacion."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](384, 0, null, null, 15, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](385, 0, null, null, 14, "div", [["class", "collapse multi-collapse"], ["id", "multiCollapseExample3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](386, 0, null, null, 13, "div", [["class", "card card-body "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](387, 0, null, null, 12, "div", [["class", "card border-primary mb-3 "], ["style", "max-width: 50rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](388, 0, null, null, 1, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CAMPO SIETE"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](390, 0, null, null, 9, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](391, 0, null, null, 6, "h5", [["class", "card-title color-t "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](392, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](393, 0, null, null, 3, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["AVISO!!! "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](395, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" SOLO EN CASO DE SER NECESARIO LLENAR ESTE CAMPO"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](397, 0, null, null, 0, "img", [["alt", ""], ["class", "size-i zoom"], ["src", "../../../assets/imagenes/paso7_sub4.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](398, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Aqui es si usted va a hacer una modificacion va a poner como esta actualmente en la parte de dice y en la parte de debe decir va a poner los nuevos campos si cambio nombre o si cambio domicilio dependiendo de su modificacion."]))], function (_ck, _v) { var currVal_0 = "size"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "text-c"; _ck(_v, 3, 0, currVal_1); var currVal_2 = "Como persona moral o jur\u00EDdica se designa, en derecho, toda aquella entidad de existencia jur\u00EDdica, que est\u00E1 constituida por grupos u organizaciones de personas"; _ck(_v, 19, 0, currVal_2); var currVal_3 = "Una persona f\u00EDsica o natural es, seg\u00FAn el derecho, un individuo con existencia real y material, que tiene la capacidad para ejercer sus derechos y contraer obligaciones dentro del marco de la ley y la constituci\u00F3n"; _ck(_v, 33, 0, currVal_3); }, null); }
function View_TramitesComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 277, "mdb-card", [["class", "size"], ["id", "tramite3"]], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MdbCardComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MdbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MdbCardComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { class: [0, "class"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 275, "mdb-card-body", [["class", "text-c"]], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MdbCardBodyComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MdbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MdbCardBodyComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { class: [0, "class"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 2, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["DOCUMENTOS REQUERIDOS PARA FORMATO "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 4, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["COFEPRIS-05-036"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["(Aviso de Funcionamiento y de Responsable Sanitario de el Establecimiento de Servicios de Salud)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, 0, 29, "div", [["class", "list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 28, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "li", [["class", "font"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Original y copia siempre legible del formato \"avisos de funcionaminto, de Responsable Sanitario y de Modificacion o Baja\", Debidamente requisitado."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 3, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 16777216, null, null, 2, "u", [["mdbTooltip", "Como persona moral o jur\u00EDdica se designa, en derecho, toda aquella entidad de existencia jur\u00EDdica, que est\u00E1 constituida por grupos u organizaciones de personas"]], null, [[null, "click"], ["window", "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onclick($event) !== false);
        ad = (pd_0 && ad);
    } if (("window:click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onblur() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 737280, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["TooltipDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["ɵe"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["TooltipConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], { mdbTooltip: [0, "mdbTooltip"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["En Caso de ser personas Morales:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "li", [["class", "font"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Original y Copia legible de acta constitutiva o poder notarial que acredite al representate legal."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 3, "li", [["class", "font"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Copia legible de identificacion oficial del representante legal "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["(Credencial del Instituto Nacional Electoral(INE)o pasaporte vigente o cartilla militar nacional o licencia de manejo)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 3, "li", [["class", "font"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Copia legible de identificacion oficial de las personas autorizadas"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["(Credencial del Instituto Nacional Electoral(INE)o pasaporte vigente o cartilla militar nacional o licencia de manejo)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 3, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 16777216, null, null, 2, "u", [["mdbTooltip", "Una persona f\u00EDsica o natural es, seg\u00FAn el derecho, un individuo con existencia real y material, que tiene la capacidad para ejercer sus derechos y contraer obligaciones dentro del marco de la ley y la constituci\u00F3n"]], null, [[null, "click"], ["window", "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).onclick($event) !== false);
        ad = (pd_0 && ad);
    } if (("window:click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).onblur() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 737280, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["TooltipDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["ɵe"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["TooltipConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], { mdbTooltip: [0, "mdbTooltip"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["En Caso de ser personas Fisicas:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 3, "li", [["class", "font"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Copia legible de identificacion oficial del Propietario "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["(Credencial del Instituto Nacional Electoral(INE)o pasaporte vigente o cartilla militar nacional o licencia de manejo) "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 3, "li", [["class", "font"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Copia legible de identificacion oficial del representante legal "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["(Credencial del Instituto Nacional Electoral(INE)o pasaporte vigente o cartilla militar nacional o licencia de manejo) "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, 0, 36, "div", [["class", "table-responsive "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 35, "table", [["class", "table-bordered col-md-6  mx-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 3, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 1, "th", [["class", "text-p"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Papeleria necesaria"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 30, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["COPIA DEL IFE"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["COPIA DE RFC"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" COPIA DE COPIA DEL TITULO"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" COPIA DE CEDULA"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" SI TIENE ESPECIALIDAD TRAER TITULO Y CEDULA "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" CURRICULUM SIMPLIFICADO"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" PLANO DEL CONSULTORIO A COMPUTADORA"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 5, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 4, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" MEMORIA DESCRIPTIVA ("])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["INVENTARIO"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [")"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" DOS FOTOGRAFIA"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](80, 0, null, 0, 53, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, null, 1, "a", [["aria-controls", "multiCollapseExample5"], ["aria-expanded", "false"], ["class", "btn btn-primary col-md-5"], ["data-toggle", "collapse"], ["href", "#multiCollapseExample5"], ["role", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CLAVES SCIAN"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 0, null, null, 50, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](84, 0, null, null, 49, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](85, 0, null, null, 48, "div", [["class", "collapse multi-collapse"], ["id", "multiCollapseExample5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](86, 0, null, null, 47, "div", [["class", "card card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](87, 0, null, null, 46, "div", [["class", "card border-primary col-md-12"], ["style", "max-width: 95rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](88, 0, null, null, 1, "div", [["class", "card-header font-t"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CLAVES SCIAN Y DESCRIPCION"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](90, 0, null, null, 43, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](91, 0, null, null, 40, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](92, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](93, 0, null, null, 3, "p", [["class", "color-t font-c"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](94, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["621111"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [":Consultorios de Medicamentos General del Sector Privado."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](97, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](98, 0, null, null, 3, "p", [["class", "color-t font-c"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](99, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["621113"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [":Consultorios de Medicina Especializada del Sector Privado."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](102, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](103, 0, null, null, 3, "p", [["class", "color-t font-c"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](104, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["621211"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [":Consultorios Dentales del Sector Privado."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](107, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](108, 0, null, null, 3, "p", [["class", "color-t font-c"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](109, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["621311"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [":Consultorios de Quiropractica del Sector Privado."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](112, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](113, 0, null, null, 3, "p", [["class", "color-t font-c"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](114, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["621331"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [":Consultorios de Psicologia del Sector Privado."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](117, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](118, 0, null, null, 3, "p", [["class", "color-t font-c "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](119, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["621341"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [":Consultorios del Sector Privado de Audiologia y Terapia Ocupacional.Fiscal y de Lenguage."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](122, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](123, 0, null, null, 3, "p", [["class", "color-t font-c"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](124, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["621391"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [":Consultorios de Nutriologos y Dietistas del Sector Privado."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](127, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](128, 0, null, null, 3, "p", [["class", "color-t font-c"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](129, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["621398"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [":Otros Consultorios del Sector Privado Para el Cuidado de la Salud."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](132, 0, null, null, 1, "a", [["class", "btn btn-success btn-block"], ["href", "https://www.gob.mx/cms/uploads/attachment/file/348735/SCIAN_completo.pdf"], ["target", ".blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Claves scian completas"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](134, 0, null, 0, 143, "div", [["class", "colla"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](135, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](136, 0, null, null, 1, "a", [["aria-controls", "collapseExample3"], ["aria-expanded", "false"], ["class", "btn btn-primary col-md-5"], ["data-toggle", "collapse"], ["href", "#collapseExample3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Descargar formato e informacion "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](138, 0, null, null, 30, "div", [["class", "collapse col-md-12"], ["id", "collapseExample3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](139, 0, null, null, 29, "div", [["class", "mt-3 row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](140, 0, null, null, 7, "div", [["class", "card border-primary col-md-3"], ["style", "max-width: 25rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](141, 0, null, null, 1, "div", [["class", "card-header font-t size-t"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["FORMATO"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](143, 0, null, null, 4, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](144, 0, null, null, 1, "a", [["class", "btn btn-primary bo-m col-md-12"], ["href", "http://documentos.cofepris.gob.mx/archivos/cis/FORMATOS/Formato_Aviso_Funcionamiento.docx"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Descargar formulario"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](146, 0, null, null, 1, "a", [["class", "btn btn-primary bo-m col-md-12"], ["href", "https://www.gob.mx/cms/uploads/attachment/file/348567/Instructivo_Aviso_Funcionamiento.pdf"], ["target", ".blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Click Para Mas informacion"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](148, 0, null, null, 6, "div", [["class", "card border-primary col-md-3"], ["style", "max-width: 25rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](149, 0, null, null, 1, "div", [["class", "card-header font-t  size-t"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["PAGO ASOCIADO"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](151, 0, null, null, 3, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](152, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](153, 0, null, null, 1, "Strong", [["class", "color-t"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["NO REQUIERE PAGO"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](155, 0, null, null, 6, "div", [["class", "card border-primary col-md-3"], ["style", "max-width: 25rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](156, 0, null, null, 1, "div", [["class", "card-header font-t size-t"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" FICHA DE TRAMITE"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](158, 0, null, null, 3, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](159, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](160, 0, null, null, 1, "Strong", [["class", "color-t"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["NO APLICA"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](162, 0, null, null, 6, "div", [["class", "card border-primary col-md-3"], ["style", "max-width: 25rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](163, 0, null, null, 1, "div", [["class", "card-header font-t size-t"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["FUNDAMENTO LEGAL"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](165, 0, null, null, 3, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](166, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](167, 0, null, null, 1, "Strong", [["class", "color-t font-f"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["ARTICULOS 47 , 200 Y 200 BIS DE LA LEY GENERAL DE SALUD "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](169, 0, null, null, 1, "button", [["aria-controls", "multiCollapseExample6"], ["aria-expanded", "false"], ["class", "btn btn-primary col-md-5"], ["data-target", "#multiCollapseExample6"], ["data-toggle", "collapse"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Instrucciones de como llenar el formato"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](171, 0, null, null, 33, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](172, 0, null, null, 10, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](173, 0, null, null, 9, "div", [["class", "collapse multi-collapse"], ["id", "multiCollapseExample6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](174, 0, null, null, 8, "div", [["class", "card card-body col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](175, 0, null, null, 7, "div", [["class", "card border-primary mb-3 "], ["style", "max-width: 50rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](176, 0, null, null, 1, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CAMPO UNO"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](178, 0, null, null, 4, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](179, 0, null, null, 1, "h5", [["class", "card-title "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](180, 0, null, null, 0, "img", [["alt", ""], ["class", "size-i zoom"], ["src", "../../../assets/imagenes/paso1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](181, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Some quick example text to build on the panel title and make up the bulk of the panel's content."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](183, 0, null, null, 10, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](184, 0, null, null, 9, "div", [["class", "collapse multi-collapse"], ["id", "multiCollapseExample6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](185, 0, null, null, 8, "div", [["class", "card card-body col-md-12 "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](186, 0, null, null, 7, "div", [["class", "card border-primary mb-3 "], ["style", "max-width: 50rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](187, 0, null, null, 1, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CAMPO DOS"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](189, 0, null, null, 4, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](190, 0, null, null, 1, "h5", [["class", "card-title "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](191, 0, null, null, 0, "img", [["alt", ""], ["class", "size-i zoom"], ["src", "../../../assets/imagenes/paso2.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](192, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Some quick example text to build on the panel title and make up the bulk of the panel's content."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](194, 0, null, null, 10, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](195, 0, null, null, 9, "div", [["class", "collapse multi-collapse"], ["id", "multiCollapseExample6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](196, 0, null, null, 8, "div", [["class", "card card-body col-md-12 "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](197, 0, null, null, 7, "div", [["class", "card border-primary mb-3 "], ["style", "max-width: 50rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](198, 0, null, null, 1, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CAMPO TRES"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](200, 0, null, null, 4, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](201, 0, null, null, 1, "h5", [["class", "card-title "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](202, 0, null, null, 0, "img", [["alt", ""], ["class", "size-i zoom"], ["src", "../../../assets/imagenes/paso3.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](203, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Some quick example text to build on the panel title and make up the bulk of the panel's content."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](205, 0, null, null, 38, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](206, 0, null, null, 10, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](207, 0, null, null, 9, "div", [["class", "collapse multi-collapse"], ["id", "multiCollapseExample6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](208, 0, null, null, 8, "div", [["class", "card card-body "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](209, 0, null, null, 7, "div", [["class", "card border-primary mb-3 "], ["style", "max-width: 50rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](210, 0, null, null, 1, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CAMPO TRES PARTE DOS"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](212, 0, null, null, 4, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](213, 0, null, null, 1, "h5", [["class", "card-title "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](214, 0, null, null, 0, "img", [["alt", ""], ["class", "size-i zoom"], ["src", "../../../assets/imagenes/paso3_parte2.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](215, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Some quick example text to build on the panel title and make up the bulk of the panel's content."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](217, 0, null, null, 14, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](218, 0, null, null, 13, "div", [["class", "collapse multi-collapse"], ["id", "multiCollapseExample6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](219, 0, null, null, 12, "div", [["class", "card card-body "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](220, 0, null, null, 11, "div", [["class", "card border-primary mb-3 "], ["style", "max-width: 50rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](221, 0, null, null, 1, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CAMPO CUATRO"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](223, 0, null, null, 8, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](224, 0, null, null, 5, "h5", [["class", "card-title color-t"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](225, 0, null, null, 2, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](226, 0, null, null, 1, "ul", [["class", "color-t"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["LLENAR ESTE PASO SOLO SI EL CONSULTORIO CUENTA CON AMBULANCIAS!!"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](228, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](229, 0, null, null, 0, "img", [["alt", "click para zoom"], ["class", "size-i zoom"], ["src", "../../../assets/imagenes/PASO4.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](230, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Some quick example text to build on the panel title and make up the bulk of the panel's content."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](232, 0, null, null, 11, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](233, 0, null, null, 10, "div", [["class", "collapse multi-collapse"], ["id", "multiCollapseExample6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](234, 0, null, null, 9, "div", [["class", "card card-body "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](235, 0, null, null, 8, "div", [["class", "card border-primary mb-3 "], ["style", "max-width: 50rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](236, 0, null, null, 1, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CAMPO CINCO"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](238, 0, null, null, 5, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](239, 0, null, null, 2, "h5", [["class", "card-title color-t "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](240, 0, null, null, 0, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](241, 0, null, null, 0, "img", [["alt", ""], ["class", "size-i zoom"], ["src", "../../../assets/imagenes/paso5.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](242, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Some quick example text to build on the panel title and make up the bulk of the panel's content."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](244, 0, null, null, 33, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](245, 0, null, null, 32, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](246, 0, null, null, 31, "div", [["class", "collapse multi-collapse"], ["id", "multiCollapseExample6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](247, 0, null, null, 30, "div", [["class", "card card-body "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](248, 0, null, null, 29, "div", [["class", "card border-primary mb-3 "], ["style", "max-width: 95rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](249, 0, null, null, 1, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CAMPO SEIS"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](251, 0, null, null, 26, "div", [["class", "card-body text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](252, 0, null, null, 6, "h5", [["class", "card-title color-t "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](253, 0, null, null, 3, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["AVISO!!! "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](255, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" este paso solo si es requerido"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](257, 0, null, null, 0, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](258, 0, null, null, 0, "img", [["alt", ""], ["class", "size-i "], ["src", "../../../assets/imagenes/paso6_sub2.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](259, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Some quick example text to build on the panel title and make up the bulk of the panel's content."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](261, 0, null, null, 1, "button", [["class", "btn btn-primary"], ["data-target", "#basicExampleModal3"], ["data-toggle", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Ver tablas "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](263, 0, null, null, 14, "div", [["aria-hidden", "true"], ["aria-labelledby", "exampleModalLabel3"], ["class", "modal fade"], ["id", "basicExampleModal3"], ["role", "dialog"], ["tabindex", "-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](264, 0, null, null, 13, "div", [["class", "modal-dialog"], ["role", "document"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](265, 0, null, null, 12, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](266, 0, null, null, 5, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](267, 0, null, null, 1, "h5", [["class", "modal-title"], ["id", "exampleModalLabel3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Categoria de Producto"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](269, 0, null, null, 2, "button", [["aria-label", "Close"], ["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](270, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00D7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](272, 0, null, null, 2, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](273, 0, null, null, 0, "img", [["class", "size-i zoom"], ["src", "../../../assets/imagenes/tabla_b.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](274, 0, null, null, 0, "img", [["alt", ""], ["class", "size-i zoom"], ["src", "../../../assets/imagenes/tabla_b_cont.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](275, 0, null, null, 2, "div", [["class", "modal-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](276, 0, null, null, 1, "button", [["class", "btn btn-secondary mx-auto"], ["data-dismiss", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Close"]))], function (_ck, _v) { var currVal_0 = "size"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "text-c"; _ck(_v, 3, 0, currVal_1); var currVal_2 = "Como persona moral o jur\u00EDdica se designa, en derecho, toda aquella entidad de existencia jur\u00EDdica, que est\u00E1 constituida por grupos u organizaciones de personas"; _ck(_v, 19, 0, currVal_2); var currVal_3 = "Una persona f\u00EDsica o natural es, seg\u00FAn el derecho, un individuo con existencia real y material, que tiene la capacidad para ejercer sus derechos y contraer obligaciones dentro del marco de la ley y la constituci\u00F3n"; _ck(_v, 33, 0, currVal_3); }, null); }
function View_TramitesComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "menu-nav", [], null, null, null, _menu_nav_menu_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MenuNavComponent_0"], _menu_nav_menu_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MenuNavComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _menu_nav_menu_nav_component__WEBPACK_IMPORTED_MODULE_5__["MenuNavComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "app-banner", [], null, null, null, _banner_banner_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_BannerComponent_0"], _banner_banner_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_BannerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _banner_banner_component__WEBPACK_IMPORTED_MODULE_8__["BannerComponent"], [_services_images_images_service__WEBPACK_IMPORTED_MODULE_9__["ImagesService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Tramites y Servicios"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Guia de Tramites Y Servios Gubernamentales con Especificaciones , Costos Requisitos y Lugares Donde Realizarlos. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 29, "div", [["class", "row justify-content-center tama\u00F1o col-md-12 mx-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 28, "mdb-navbar", [["SideClass", "navbar navbar-expand-lg navbar-dark indigo"]], null, [["window", "resize"], ["document", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onResize($event) !== false);
        ad = (pd_0 && ad);
    } if (("document:scroll" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onScroll() !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NavbarComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NavbarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 6406144, null, 1, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["NavbarService"]], { SideClass: [0, "SideClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 1, { links: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 0, 3, "mdb-navbar-brand", [], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_LogoComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_LogoComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 49152, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["LogoComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 0, 1, "a", [["class", "navbar-brand "], ["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Tramites Comunes"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 4, 21, "links", [], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_LinksComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_LinksComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 5292032, [[1, 4]], 1, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["LinksComponent"], [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["NavbarService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { links: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, 0, 18, "ul", [["class", "navbar-nav"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 7, "li", [["class", "nav-item active"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 16777216, null, null, 6, "a", [["class", "nav-link scroll"], ["href", "#tramite1"], ["mdbTooltip", "Para dar de alta tramites de productos y servicios"], ["mdbWavesEffect", ""]], null, [[null, "click"], ["window", "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).click($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).onclick($event) !== false);
        ad = (pd_1 && ad);
    } if (("window:click" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).onblur() !== false);
        ad = (pd_2 && ad);
    } if (("click" === en)) {
        var pd_3 = (_co.mostrar() !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["WavesDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 737280, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["TooltipDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["ɵe"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["TooltipConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], { mdbTooltip: [0, "mdbTooltip"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["ALTAS DE NEGOCIOS"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["(current)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 4, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 3, "a", [["class", "nav-link scroll"], ["href", "#tramite2"], ["mdbWavesEffect", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).click($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.mostrar2() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["WavesDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["BAJA O MODIFICACION DE NEGOCIO"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 4, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 3, "a", [["class", "nav-link scroll"], ["href", "#tramite3"], ["mdbWavesEffect", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).click($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.mostrar3() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["WavesDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["ALTA DE CONSULTORIOS"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TramitesComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TramitesComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TramitesComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; _ck(_v, 1, 0); _ck(_v, 3, 0); var currVal_0 = "navbar navbar-expand-lg navbar-dark indigo"; _ck(_v, 12, 0, currVal_0); var currVal_1 = "Para dar de alta tramites de productos y servicios"; _ck(_v, 25, 0, currVal_1); var currVal_2 = _co.mostrarTramite; _ck(_v, 43, 0, currVal_2); var currVal_3 = _co.mostrarTramite2; _ck(_v, 46, 0, currVal_3); var currVal_4 = _co.mostrarTramite3; _ck(_v, 49, 0, currVal_4); }, null); }
function View_TramitesComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-tramites", [], null, null, null, View_TramitesComponent_0, RenderType_TramitesComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _tramites_component__WEBPACK_IMPORTED_MODULE_11__["TramitesComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var TramitesComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-tramites", _tramites_component__WEBPACK_IMPORTED_MODULE_11__["TramitesComponent"], View_TramitesComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/main/tramites/tramites.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/main/tramites/tramites.component.ts ***!
  \*****************************************************/
/*! exports provided: TramitesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TramitesComponent", function() { return TramitesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);


var TramitesComponent = /** @class */ (function () {
    function TramitesComponent() {
        this.mostrarTramite = true;
        this.mostrarTramite2 = false;
        this.mostrarTramite3 = false;
    }
    TramitesComponent.prototype.ngOnInit = function () {
        this.scroll();
    };
    TramitesComponent.prototype.mostrar = function () {
        this.mostrarTramite = true;
        this.mostrarTramite2 = false;
        this.mostrarTramite3 = false;
    };
    TramitesComponent.prototype.mostrar2 = function () {
        this.mostrarTramite = false;
        this.mostrarTramite2 = true;
        this.mostrarTramite3 = false;
    };
    TramitesComponent.prototype.mostrar3 = function () {
        this.mostrarTramite = false;
        this.mostrarTramite2 = false;
        this.mostrarTramite3 = true;
    };
    TramitesComponent.prototype.scroll = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__(document).ready(function () {
            var scrollLink = jquery__WEBPACK_IMPORTED_MODULE_1__('.scroll');
            // Smooth scrolling
            scrollLink.click(function (e) {
                e.preventDefault();
                jquery__WEBPACK_IMPORTED_MODULE_1__('body,html').animate({ scrollTop: jquery__WEBPACK_IMPORTED_MODULE_1__(this.hash).offset().top - 35 }, 1000);
            });
            // Active link switching
            jquery__WEBPACK_IMPORTED_MODULE_1__(window).scroll(function () {
                var scrollbarLocation = jquery__WEBPACK_IMPORTED_MODULE_1__(this).scrollTop();
                scrollLink.each(function () {
                    var sectionOffset = jquery__WEBPACK_IMPORTED_MODULE_1__(this.hash).offset().top - 40;
                    if (sectionOffset <= scrollbarLocation) {
                        jquery__WEBPACK_IMPORTED_MODULE_1__(this).parent().addClass('active');
                        jquery__WEBPACK_IMPORTED_MODULE_1__(this).parent().siblings().removeClass('active');
                    }
                });
            });
        });
    };
    return TramitesComponent;
}());



/***/ }),

/***/ "./src/app/main/transparencia/transparencia.component.css.shim.ngstyle.js":
/*!********************************************************************************!*\
  !*** ./src/app/main/transparencia/transparencia.component.css.shim.ngstyle.js ***!
  \********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".imagen[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n   \r\n}\r\n\r\n*[_ngcontent-%COMP%]{\r\n  padding:0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi90cmFuc3BhcmVuY2lhL3RyYW5zcGFyZW5jaWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZOztBQUVoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL21haW4vdHJhbnNwYXJlbmNpYS90cmFuc3BhcmVuY2lhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2VuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICBcclxufVxyXG5cclxuKntcclxuICBwYWRkaW5nOjBweDtcclxufSJdfQ== */"];



/***/ }),

/***/ "./src/app/main/transparencia/transparencia.component.ngfactory.js":
/*!*************************************************************************!*\
  !*** ./src/app/main/transparencia/transparencia.component.ngfactory.js ***!
  \*************************************************************************/
/*! exports provided: RenderType_TransparenciaComponent, View_TransparenciaComponent_0, View_TransparenciaComponent_Host_0, TransparenciaComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TransparenciaComponent", function() { return RenderType_TransparenciaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TransparenciaComponent_0", function() { return View_TransparenciaComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TransparenciaComponent_Host_0", function() { return View_TransparenciaComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransparenciaComponentNgFactory", function() { return TransparenciaComponentNgFactory; });
/* harmony import */ var _transparencia_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transparencia.component.css.shim.ngstyle */ "./src/app/main/transparencia/transparencia.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_nav_menu_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu-nav/menu-nav.component.ngfactory */ "./src/app/main/menu-nav/menu-nav.component.ngfactory.js");
/* harmony import */ var _menu_nav_menu_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu-nav/menu-nav.component */ "./src/app/main/menu-nav/menu-nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _transparencia_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transparencia.component */ "./src/app/main/transparencia/transparencia.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_TransparenciaComponent = [_transparencia_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_TransparenciaComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_TransparenciaComponent, data: {} });

function View_TransparenciaComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "menu-nav", [], null, null, null, _menu_nav_menu_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MenuNavComponent_0"], _menu_nav_menu_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MenuNavComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _menu_nav_menu_nav_component__WEBPACK_IMPORTED_MODULE_3__["MenuNavComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "div", [["class", "row col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "img", [["alt", ""], ["class", "imagen"], ["src", "../../../assets/imagenes/image.png"]], null, null, null, null, null))], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_TransparenciaComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-transparencia", [], null, null, null, View_TransparenciaComponent_0, RenderType_TransparenciaComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _transparencia_component__WEBPACK_IMPORTED_MODULE_5__["TransparenciaComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var TransparenciaComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-transparencia", _transparencia_component__WEBPACK_IMPORTED_MODULE_5__["TransparenciaComponent"], View_TransparenciaComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/main/transparencia/transparencia.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/main/transparencia/transparencia.component.ts ***!
  \***************************************************************/
/*! exports provided: TransparenciaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransparenciaComponent", function() { return TransparenciaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var TransparenciaComponent = /** @class */ (function () {
    function TransparenciaComponent() {
    }
    TransparenciaComponent.prototype.ngOnInit = function () {
    };
    return TransparenciaComponent;
}());



/***/ }),

/***/ "./src/app/main/ubicacion/ubicacion.component.css.shim.ngstyle.js":
/*!************************************************************************!*\
  !*** ./src/app/main/ubicacion/ubicacion.component.css.shim.ngstyle.js ***!
  \************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".map-container[_ngcontent-%COMP%]\r\n{\r\n    margin-right: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi91YmljYWNpb24vdWJpY2FjaW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi91YmljYWNpb24vdWJpY2FjaW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwLWNvbnRhaW5lclxyXG57XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufSJdfQ== */"];



/***/ }),

/***/ "./src/app/main/ubicacion/ubicacion.component.ngfactory.js":
/*!*****************************************************************!*\
  !*** ./src/app/main/ubicacion/ubicacion.component.ngfactory.js ***!
  \*****************************************************************/
/*! exports provided: RenderType_UbicacionComponent, View_UbicacionComponent_0, View_UbicacionComponent_Host_0, UbicacionComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_UbicacionComponent", function() { return RenderType_UbicacionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_UbicacionComponent_0", function() { return View_UbicacionComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_UbicacionComponent_Host_0", function() { return View_UbicacionComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UbicacionComponentNgFactory", function() { return UbicacionComponentNgFactory; });
/* harmony import */ var _ubicacion_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ubicacion.component.css.shim.ngstyle */ "./src/app/main/ubicacion/ubicacion.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ubicacion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ubicacion.component */ "./src/app/main/ubicacion/ubicacion.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_UbicacionComponent = [_ubicacion_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_UbicacionComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_UbicacionComponent, data: {} });

function View_UbicacionComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "z-depth-1-half embed-responsive hoverable"], ["id", "map-container"], ["style", "height: 500px; width: 600;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "iframe", [["allowfullscreen", ""], ["class", "embed-responsive-item"], ["frameborder", "2"], ["height", "500"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2089.901809435945!2d-104.65838757140784!3d24.031464580798474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bb7df3501dfcb%3A0x505faa96ccc87cc3!2s(COPRISED)+Comisi%C3%B3n+para+la+Protecci%C3%B3n+Contra+Riesgos+Sanitarios+del+Estado+Durango!5e0!3m2!1ses!2smx!4v1551200782958"], ["style", "border:0"], ["width", "600"]], null, null, null, null, null))], null, null); }
function View_UbicacionComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-ubicacion", [], null, null, null, View_UbicacionComponent_0, RenderType_UbicacionComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _ubicacion_component__WEBPACK_IMPORTED_MODULE_2__["UbicacionComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var UbicacionComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-ubicacion", _ubicacion_component__WEBPACK_IMPORTED_MODULE_2__["UbicacionComponent"], View_UbicacionComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/main/ubicacion/ubicacion.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/ubicacion/ubicacion.component.ts ***!
  \*******************************************************/
/*! exports provided: UbicacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UbicacionComponent", function() { return UbicacionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var UbicacionComponent = /** @class */ (function () {
    function UbicacionComponent() {
    }
    UbicacionComponent.prototype.ngOnInit = function () {
    };
    return UbicacionComponent;
}());



/***/ }),

/***/ "./src/app/services/images/images.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/images/images.service.ts ***!
  \***************************************************/
/*! exports provided: ImagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesService", function() { return ImagesService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ImagesService = /** @class */ (function () {
    function ImagesService(http) {
        this.http = http;
        this.API_URI = 'http://localhost:5000/api';
    }
    //Trae todas las imagenes de la base de datos
    // CAROUSEL
    ImagesService.prototype.getImages = function () {
        return this.http.get(this.API_URI + "/imagenes");
    };
    // BANNER
    ImagesService.prototype.getImagesb = function () {
        return this.http.get(this.API_URI + "/imagenes/banner");
    };
    // CONOCENOS
    ImagesService.prototype.getImagesc = function () {
        return this.http.get(this.API_URI + "/imagenes/conocenos");
    };
    //Trae una imagen de la base de datos
    ImagesService.prototype.getImage = function (id) {
        return this.http.get(this.API_URI + "/imagenes/" + id);
    };
    //Borra una imagen de la base de datos usando REST APIs
    ImagesService.prototype.deleteImage = function (id) {
        return this.http.delete(this.API_URI + "/imagenes/" + id);
    };
    //Guarda una imagen en la base de datos
    ImagesService.prototype.saveImage = function (imagen) {
        return this.http.post(this.API_URI + "/imagenes/upload", imagen);
    };
    //Actualiza una imagen en la base de datos
    ImagesService.prototype.updateImage = function (id, updatedImage) {
        return this.http.put(this.API_URI + "/imagenes/" + id, updatedImage);
    };
    ImagesService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"]({ factory: function ImagesService_Factory() { return new ImagesService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); }, token: ImagesService, providedIn: "root" });
    return ImagesService;
}());



/***/ }),

/***/ "./src/app/services/registrar/registrar.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/registrar/registrar.service.ts ***!
  \*********************************************************/
/*! exports provided: RegistrarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarService", function() { return RegistrarService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var RegistrarService = /** @class */ (function () {
    function RegistrarService(http) {
        this.http = http;
        this.API_URI = 'http://localhost:5000/api';
    }
    //Trae todos los usuarios de la base de datos
    RegistrarService.prototype.getUsers = function () {
        return this.http.get(this.API_URI + "/registrar");
    };
    //Trae un usuario de la base de datos
    RegistrarService.prototype.getUser = function (id) {
        return this.http.get(this.API_URI + "/registrar/" + id);
    };
    //Borra un usuario de la base de datos usando REST APIs
    RegistrarService.prototype.deleteUser = function (id) {
        return this.http.delete(this.API_URI + "/registrar/" + id);
    };
    //Guarda un usuario en la base de datos
    RegistrarService.prototype.saveUser = function (user) {
        return this.http.post(this.API_URI + "/registrar", user);
    };
    //Actualiza la informacion de un usuario en la base de datos
    RegistrarService.prototype.updateUser = function (id, updatedUser) {
        return this.http.put(this.API_URI + "/registrar/" + id, updatedUser);
    };
    RegistrarService.prototype.loginUser = function (user) {
        return this.http.post(this.API_URI + "/login", user);
    };
    RegistrarService.prototype.loggedIn = function () {
        return !!localStorage.getItem('token');
    };
    RegistrarService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    RegistrarService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"]({ factory: function RegistrarService_Factory() { return new RegistrarService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); }, token: RegistrarService, providedIn: "root" });
    return RegistrarService;
}());



/***/ }),

/***/ "./src/app/services/token/token-interceptor.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/token/token-interceptor.service.ts ***!
  \*************************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _registrar_registrar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../registrar/registrar.service */ "./src/app/services/registrar/registrar.service.ts");




var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(injector, service) {
        this.injector = injector;
        this.service = service;
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        // let service = this.injector.get(RegistrarService);
        var tokenizedReq = req.clone({
            setHeaders: {
                Authorization: "Bearer " + this.service.getToken()
            }
        });
        return next.handle(tokenizedReq);
    };
    TokenInterceptorService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"]({ factory: function TokenInterceptorService_Factory() { return new TokenInterceptorService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["INJECTOR"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"](_registrar_registrar_service__WEBPACK_IMPORTED_MODULE_1__["RegistrarService"])); }, token: TokenInterceptorService, providedIn: "root" });
    return TokenInterceptorService;
}());



/***/ }),

/***/ "./src/app/services/tramites/tramites.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/tramites/tramites.service.ts ***!
  \*******************************************************/
/*! exports provided: TramitesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TramitesService", function() { return TramitesService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var TramitesService = /** @class */ (function () {
    function TramitesService(http) {
        this.http = http;
        this.API_URI = 'http://localhost:5000/api';
    }
    //Trae todos los tramites de la base de datos
    TramitesService.prototype.getTramites = function () {
        return this.http.get(this.API_URI + "/tramites");
    };
    //Trae un tramite de la base de datos
    TramitesService.prototype.getTramite = function (id) {
        return this.http.get(this.API_URI + "/tramites/" + id);
    };
    //Borra un tramite de la base de datos usando REST APIs
    TramitesService.prototype.deleteTramite = function (id) {
        return this.http.delete(this.API_URI + "/tramites/" + id);
    };
    //Guarda un tramite en la base de datos
    TramitesService.prototype.saveTramite = function (tramite) {
        return this.http.post(this.API_URI + "/tramites", tramite);
    };
    //Actualiza la informacion de un tramite en la base de datos
    TramitesService.prototype.updateTramite = function (id, updatedTramite) {
        return this.http.put(this.API_URI + "/tramites/" + id, updatedTramite);
    };
    TramitesService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"]({ factory: function TramitesService_Factory() { return new TramitesService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); }, token: TramitesService, providedIn: "root" });
    return TramitesService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module.ngfactory */ "./src/app/app.module.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\git\Coprised_2\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map