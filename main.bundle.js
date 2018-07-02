webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--<div style=\"text-align:center\">-->\n  <!--<h1>-->\n    <!--Welcome to {{ title }}!-->\n  <!--</h1>-->\n  <!--<img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">-->\n<!--</div>-->\n<!--<h2>Here are some links to help you start: </h2>-->\n<!--<ul>-->\n  <!--<li>-->\n    <!--<h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>-->\n  <!--</li>-->\n  <!--<li>-->\n    <!--<h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>-->\n  <!--</li>-->\n  <!--<li>-->\n    <!--<h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>-->\n  <!--</li>-->\n<!--</ul>-->\n\n<!--<button nz-button nzType=\"primary\">Button</button>-->\n\n\n<app-dashboard></app-dashboard>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_zorro_antd__ = __webpack_require__("./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_component__ = __webpack_require__("./src/app/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_table_component__ = __webpack_require__("./src/app/component/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_batch_page__ = __webpack_require__("./src/app/pages/batch.page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_review_component__ = __webpack_require__("./src/app/component/review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_nebpay_component__ = __webpack_require__("./src/app/component/nebpay.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_smart_page__ = __webpack_require__("./src/app/pages/smart.page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_welcome_page__ = __webpack_require__("./src/app/pages/welcome.page.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_14__pages_welcome_page__["a" /* WelcomePage */] },
    { path: 'batch', component: __WEBPACK_IMPORTED_MODULE_9__pages_batch_page__["a" /* BatchPage */] },
    { path: 'smart', component: __WEBPACK_IMPORTED_MODULE_12__pages_smart_page__["a" /* SmartPage */] },
    { path: '',
        redirectTo: '/welcome',
        pathMatch: 'full'
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dashboard_component__["a" /* AppDashboard */],
                __WEBPACK_IMPORTED_MODULE_8__component_table_component__["a" /* TableComponent */],
                __WEBPACK_IMPORTED_MODULE_10__component_review_component__["a" /* ReviewComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pages_batch_page__["a" /* BatchPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_smart_page__["a" /* SmartPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_welcome_page__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_11__component_nebpay_component__["a" /* NebpayComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng_zorro_antd__["a" /* NgZorroAntdModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_13__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/nebpay.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NebpayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nebpay_js__ = __webpack_require__("./node_modules/nebpay.js/nebpay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nebpay_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nebpay_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_global__ = __webpack_require__("./src/config.global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NebpayComponent = /** @class */ (function () {
    function NebpayComponent() {
        this.dest = __WEBPACK_IMPORTED_MODULE_2__config_global__["a" /* batch_distribute_address */];
        this.data = [];
        this.totalNAS = 0;
        this.equal = true;
        this.nebPay = new __WEBPACK_IMPORTED_MODULE_1_nebpay_js__();
        this.function_name = '';
        this.args = [];
    }
    // data = [
    //   {
    //     name: 'Account 1',
    //     address: '',
    //     amount: 500
    //   },
    //   {
    //     name: 'Account 2',
    //     address: '',
    //     amount: 500
    //   },
    //   {
    //     name: 'Account 3',
    //     address: '',
    //     amount: 500
    //   },
    //   {
    //     name: 'Account 4',
    //     address: '',
    //     amount: 500
    //   }
    // ];
    NebpayComponent.prototype.set_function = function () {
        if (this.equal) {
            this.function_name = "distribute_equal";
        }
        else {
            this.function_name = "custom_distribute";
        }
        return this.function_name;
    };
    NebpayComponent.prototype.ngOnInit = function () {
        console.log('lalala');
    };
    NebpayComponent.prototype.sendTX = function () {
        console.log("Start send transaction");
        var to = this.dest; // Dapp的合约地址
        var value = this.totalNAS;
        var callFunction = this.function_name; // 调用的函数名称
        var callArgs = JSON.stringify(this.args);
        this.nebPay.call(to, value, callFunction, callArgs);
    };
    NebpayComponent.prototype.setArgs = function () {
        this.args = [];
        if (this.equal) {
            var address = [];
            for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
                var val = _a[_i];
                address = address.concat([val.address]);
            }
            this.args[0] = address;
        }
        else {
            var address = [];
            var amount = [];
            for (var _b = 0, _c = this.data; _b < _c.length; _b++) {
                var val = _c[_b];
                address = address.concat([val.address]);
                amount = amount.concat([val.amount]);
            }
            this.args[0] = address;
            this.args[1] = amount;
        }
        return JSON.stringify(this.args);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], NebpayComponent.prototype, "dest", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], NebpayComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], NebpayComponent.prototype, "totalNAS", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], NebpayComponent.prototype, "equal", void 0);
    NebpayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-component-nebpay',
            template: "\n    <div nz-row nzType=\"flex\" nzJustify=\"center\" style=\"font-size: xx-large\">\n      <p style=\"margin-bottom: 0.2em\">Transaction Summary</p>\n    </div>\n    <div nz-row nzType=\"flex\" nzJustify=\"center\" style=\"margin-bottom: 10px;font-size: large\">\n      <p style=\"margin-bottom: 0.2em\">Total Amount: <b>{{totalNAS}} NAS</b></p>\n    </div>\n    <div nz-row nzType=\"flex\" nzJustify=\"center\" style=\"margin-bottom: 10px;font-size: large\">\n      <p style=\"margin-bottom: 0.2em\">To: <b>{{dest}}</b></p>\n    </div>\n    <div nz-row nzType=\"flex\" nzJustify=\"center\" style=\"margin-bottom: 10px\">\n      <p>Function: {{set_function()}}</p>\n    </div>\n    <div nz-row nzType=\"flex\" nzJustify=\"center\" style=\"margin-bottom: 10px\">\n      <p>Args: {{setArgs()}}</p>\n    </div>\n\n    <div nz-row nzType=\"flex\" nzJustify=\"center\" style=\"margin-bottom: 10px\">\n\n      <button nz-button class=\"big-button\" nzType=\"primary\" nzSize=\"large\" nzShape=\"circle\" (click)=\"sendTX()\"><i\n        class=\"anticon anticon-check\"></i>\n      </button>\n    </div>\n  ",
            styles: [
                "\n      :host ::ng-deep .demo-infinite-container {\n        border: 1px solid #e8e8e8;\n        border-radius: 4px;\n        overflow: auto;\n        padding: 8px 24px;\n        height: 300px;\n      }\n\n      :host ::ng-deep .demo-loading {\n        position: absolute;\n        bottom: -40px;\n        left: 50%;\n      }\n\n      .big-button {\n        width: 100px;\n        height: 100px;\n        font-size: -webkit-xxx-large;\n      }\n    "
            ]
        })
    ], NebpayComponent);
    return NebpayComponent;
}());



/***/ }),

/***/ "./src/app/component/review.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReviewComponent = /** @class */ (function () {
    function ReviewComponent() {
        this.form_data = [];
        this.equalDistribute = false;
        this.totalNAS = 0;
        this.data = [
            {
                name: 'Account 1',
                address: '',
                amount: 500
            },
            {
                name: 'Account 2',
                address: '',
                amount: 500
            },
            {
                name: 'Account 3',
                address: '',
                amount: 500
            },
            {
                name: 'Account 4',
                address: '',
                amount: 500
            }
        ];
    }
    ReviewComponent.prototype.ngOnInit = function () {
        console.log("lalala");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ReviewComponent.prototype, "form_data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ReviewComponent.prototype, "equalDistribute", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ReviewComponent.prototype, "totalNAS", void 0);
    ReviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-component-review',
            template: "\n    <nz-list [nzDataSource]=\"form_data\" [nzRenderItem]=\"item\" [nzItemLayout]=\"'horizontal'\">\n      <ng-template #item let-item>\n        <nz-list-item>\n          <nz-list-item-meta\n            [nzTitle]=\"nzTitle\"\n            nzAvatar=\"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png\"\n            [nzDescription]=\"nzDescription\">\n            <ng-template #nzTitle>\n              <a >{{item.name}}</a>\n            </ng-template>\n            <ng-template #nzDescription>\n                <p style=\"display: inline\">{{item.address}}\n                </p>\n                <p style=\"display: inline; float:right\" align=\"right\" *ngIf=\"equalDistribute\">{{totalNAS/(form_data.length)}} NAS</p>\n                <p style=\"display: inline; float:right\" align=\"right\" *ngIf=\"!equalDistribute\">{{item.amount}} NAS</p>\n            </ng-template>\n          </nz-list-item-meta>\n        </nz-list-item>\n      </ng-template>\n    </nz-list>\n\n  ",
            styles: [
                "\n      :host ::ng-deep .demo-infinite-container {\n        border: 1px solid #e8e8e8;\n        border-radius: 4px;\n        overflow: auto;\n        padding: 8px 24px;\n        height: 300px;\n      }\n      :host ::ng-deep .demo-loading {\n        position: absolute;\n        bottom: -40px;\n        left: 50%;\n      }\n\n    "
            ]
        })
    ], ReviewComponent);
    return ReviewComponent;
}());



/***/ }),

/***/ "./src/app/component/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableComponent = /** @class */ (function () {
    function TableComponent() {
        this.i = 1;
        this.editCache = {};
        this.dataSet = [];
        this.equalDistribute = true;
        this.dataEmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.totalEmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    TableComponent.prototype.emitTotal = function () {
        if (!this.equalDistribute) {
            var total = 0;
            for (var _i = 0, _a = this.dataSet; _i < _a.length; _i++) {
                var val = _a[_i];
                total += parseInt(val.amount);
            }
            console.log("total: " + total);
            this.totalEmit.emit(total);
        }
        else {
            this.totalEmit.emit(this.totalNAS);
        }
    };
    TableComponent.prototype.addRow = function () {
        this.i++;
        this.dataSet = this.dataSet.concat([{
                key: "" + this.i,
                name: "Account " + this.i,
                amount: '0',
                address: "Input NAS address here"
            }]);
        this.updateEditCache();
        this.startEdit(this.i.toString());
        this.dataEmit.emit(this.dataSet);
    };
    TableComponent.prototype.deleteRow = function (i) {
        var dataSet = this.dataSet.filter(function (d) { return d.key !== i; });
        this.dataSet = dataSet;
        this.dataEmit.emit(this.dataSet);
    };
    TableComponent.prototype.startEdit = function (key) {
        this.editCache[key].edit = true;
    };
    TableComponent.prototype.cancelEdit = function (key) {
        this.editCache[key].edit = false;
    };
    TableComponent.prototype.saveEdit = function (key) {
        var index = this.dataSet.findIndex(function (item) { return item.key === key; });
        this.dataSet[index] = this.editCache[key].data;
        this.editCache[key].edit = false;
        this.dataEmit.emit(this.dataSet);
    };
    TableComponent.prototype.updateEditCache = function () {
        var _this = this;
        this.dataSet.forEach(function (item) {
            if (!_this.editCache[item.key]) {
                _this.editCache[item.key] = {
                    edit: false,
                    data: item
                };
            }
        });
    };
    TableComponent.prototype.ngOnInit = function () {
        // for (let i = 0; i < 5; i++) {
        //   this.dataSet.push({
        //     key: i.toString(),
        //     name: `Edrward ${i}`,
        //     amount: 32,
        //     address: `London Park no. ${i}`,
        //   });
        // }
        this.i = 0;
        this.updateEditCache();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "equalDistribute", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "dataEmit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "totalEmit", void 0);
    TableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-component-table',
            template: "\n    <nz-table\n      #editRowTable\n      nzBordered\n      [nzData]=\"dataSet\">\n      <thead>\n      <tr>\n        <th nzWidth=\"25%\">Name</th>\n        <th nzWidth=\"15%\" *ngIf=\"!equalDistribute\">NAS Amount</th>\n        <th nzWidth=\"40%\">Address</th>\n        <th>Action</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let data of editRowTable.data\">\n        <td>\n          <div class=\"editable-cell\">\n            <div class=\"editable-cell-text-wrapper\">\n              <ng-container *ngIf=\"!editCache[data.key].edit\">\n                {{data.name}}\n              </ng-container>\n              <ng-container *ngIf=\"editCache[data.key].edit\">\n                <input type=\"text\" nz-input [(ngModel)]=\"editCache[data.key].data.name\">\n              </ng-container>\n            </div>\n          </div>\n        </td>\n        <td *ngIf=\"!equalDistribute\">\n          <ng-container *ngIf=\"!editCache[data.key].edit\">\n            {{data.amount}}\n          </ng-container>\n          <ng-container *ngIf=\"editCache[data.key].edit\">\n            <input type=\"text\" nz-input [(ngModel)]=\"editCache[data.key].data.amount\">\n          </ng-container>\n        </td>\n        <td>\n          <ng-container *ngIf=\"!editCache[data.key].edit\">\n            {{data.address}}\n          </ng-container>\n          <ng-container *ngIf=\"editCache[data.key].edit\">\n            <input type=\"text\" nz-input [(ngModel)]=\"editCache[data.key].data.address\">\n          </ng-container>\n        </td>\n        <td>\n          <div class=\"editable-row-operations\">\n            <ng-container *ngIf=\"!editCache[data.key].edit\">\n              <a (click)=\"startEdit(data.key)\">Edit</a>\n            </ng-container>\n            <ng-container *ngIf=\"editCache[data.key].edit\">\n              <a (click)=\"saveEdit(data.key);emitTotal();\" >Save</a>\n              <nz-popconfirm [nzTitle]=\"'Sure to cancel?'\" (nzOnConfirm)=\"cancelEdit(data.key)\">\n                <a nz-popconfirm>Cancel</a>\n              </nz-popconfirm>\n            </ng-container>\n          </div>\n          <nz-popconfirm [nzTitle]=\"'Sure to delete?'\" (nzOnConfirm)=\"deleteRow(data.key);emitTotal();\">\n            <a nz-popconfirm>Delete</a>\n          </nz-popconfirm>\n        </td>\n      </tr>\n      </tbody>\n    </nz-table>\n    <div nz-row nzType=\"flex\" nzJustify=\"end\" style=\"margin-bottom: 10px\">\n      <button nz-button (click)=\"addRow()\" class=\"editable-add-btn\" style=\"display:inline; margin-right: 10px\">Add\n      </button>\n      <input *ngIf=\"equalDistribute\" type=\"text\" nz-input placeholder=\"Enter Total NAS Amount\" (keyup)=\"emitTotal()\"\n             [(ngModel)]=\"totalNAS\" style=\"width:200px;display:inline;\">\n    </div>\n\n  ",
            styles: [
                "\n      .editable-row-operations a {\n        margin-right: 8px;\n      }\n\n      .anticon-close-circle {\n        cursor: pointer;\n        color: #ccc;\n        transition: color 0.3s;\n        font-size: 12px;\n      }\n\n      .anticon-close-circle:hover {\n        color: #999;\n      }\n\n      .anticon-close-circle:active {\n        color: #666;\n      }\n\n    "
            ]
        })
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppDashboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppDashboard = /** @class */ (function () {
    function AppDashboard() {
        this.isCollapsed = false;
    }
    AppDashboard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: "\n    <nz-layout>\n      <nz-sider nzCollapsible [(nzCollapsed)]=\"isCollapsed\" [nzCollapsedWidth]=\"0\" [nzBreakpoint]=\"'lg'\">\n        <div class=\"logo\">\n        </div>\n        <ul nz-menu [nzTheme]=\"'dark'\" [nzMode]=\"isCollapsed?'vertical':'inline'\">\n          <li nz-menu-item routerLink=\"/batch\" routerLinkActive=\"active\"><span><i class=\"anticon anticon-user\"></i><span class=\"nav-text\" routerLink=\"/batch\" routerLinkActive=\"active\">NAS Batch distribute</span></span>\n          </li>\n          <li nz-menu-item routerLink=\"/smart\" routerLinkActive=\"active\"><span><i class=\"anticon anticon-video-camera\"></i><span class=\"nav-text\" routerLink=\"/smart\" routerLinkActive=\"active\">NAS Smart distribute</span></span>\n          </li>\n          <li nz-menu-item><span><i class=\"anticon anticon-upload\"></i><span\n            class=\"nav-text\">Nebulas Smart Wallet</span></span></li>\n          <li nz-menu-item routerLink=\"/welcome\" routerLinkActive=\"active\"><span><i class=\"anticon anticon-user\"></i><span class=\"nav-text\" routerLink=\"/welcome\" routerLinkActive=\"active\">Help</span></span></li>\n        </ul>\n      </nz-sider>\n      <nz-layout>\n        <nz-header style=\"background: #fff; padding:0;\">\n          <p style=\"margin-left: 20px;font-size: xx-large\">NAS Toolbox</p>\n        </nz-header>\n        <nz-content style=\"margin:24px 16px 0;\">\n          <div style=\"padding:24px; background: #fff; min-height: 720px;\">\n            <router-outlet></router-outlet>\n          </div>\n        </nz-content>\n        <nz-footer style=\"text-align: center;\">Nebulas Toolbox by Ljm625</nz-footer>\n      </nz-layout>\n    </nz-layout>\n  ",
            styles: [
                "\n      :host ::ng-deep .logo {\n        height: 32px;\n        background: rgba(255, 255, 255, .2);\n        margin: 16px;\n      }\n    "
            ]
        })
    ], AppDashboard);
    return AppDashboard;
}());



/***/ }),

/***/ "./src/app/pages/batch.page.html":
/***/ (function(module, exports) {

module.exports = "<nz-steps [nzCurrent]=\"current\" nzSize=\"small\">\n  <nz-step nzTitle=\"Input Info\"></nz-step>\n  <nz-step nzTitle=\"Review Info\"></nz-step>\n  <nz-step nzTitle=\"Send\"></nz-step>\n</nz-steps>\n\n<br>\n\n<app-component-table [hidden]=\"current!=0\" (dataEmit)=\"getFormData($event)\" [equalDistribute]=\"true\" (totalEmit)=\"getTotal($event)\"></app-component-table>\n\n<app-component-review [hidden] = \"current!=1\" [form_data]=\"form_data\" [equalDistribute]=\"true\" [totalNAS]=\"totalNas\"></app-component-review>\n\n<app-component-nebpay *ngIf = \"current==2\" [totalNAS]=\"totalNas\" [dest]=\"contract_address\" [data]=\"form_data\"></app-component-nebpay>\n\n<div nz-row nzType=\"flex\" nzJustify=\"end\">\n\n<nz-button-group [nzSize]=\"size\">\n  <button nz-button nzType=\"primary\" (click)=\"prevStep()\"><i class=\"anticon anticon-left\"></i>Backward</button>\n  <button nz-button nzType=\"primary\"  (click)=\"nextStep()\">Forward<i class=\"anticon anticon-right\"></i></button>\n</nz-button-group>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/batch.page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BatchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_global__ = __webpack_require__("./src/config.global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BatchPage = /** @class */ (function () {
    function BatchPage() {
        this.isCollapsed = false;
        this.current = 0;
        this.size = 'large';
        this.address_list = [];
        this.form_data = [];
        this.totalNas = 0;
        this.contract_address = __WEBPACK_IMPORTED_MODULE_1__config_global__["a" /* batch_distribute_address */];
    }
    BatchPage.prototype.nextStep = function () {
        if (this.current < 2) {
            this.current = this.current + 1;
        }
    };
    BatchPage.prototype.prevStep = function () {
        if (this.current > 0) {
            this.current = this.current - 1;
        }
    };
    BatchPage.prototype.getFormData = function ($event) {
        console.log($event);
        this.form_data = $event;
    };
    BatchPage.prototype.getTotal = function ($event) {
        this.totalNas = $event;
    };
    BatchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-batch',
            template: __webpack_require__("./src/app/pages/batch.page.html"),
            styles: [
                "\n      :host ::ng-deep .logo {\n        height: 32px;\n        background: rgba(255, 255, 255, .2);\n        margin: 16px;\n      }\n    "
            ]
        })
    ], BatchPage);
    return BatchPage;
}());



/***/ }),

/***/ "./src/app/pages/smart.page.html":
/***/ (function(module, exports) {

module.exports = "<nz-steps [nzCurrent]=\"current\" nzSize=\"small\">\n  <nz-step nzTitle=\"Input Info\"></nz-step>\n  <nz-step nzTitle=\"Review Info\"></nz-step>\n  <nz-step nzTitle=\"Send\"></nz-step>\n</nz-steps>\n\n<br>\n\n<app-component-table [hidden]=\"current!=0\" (dataEmit)=\"getFormData($event)\" [equalDistribute]=\"false\" (totalEmit)=\"getTotal($event)\"></app-component-table>\n\n<app-component-review [hidden] = \"current!=1\" [form_data]=\"form_data\" [equalDistribute]=\"false\" [totalNAS]=\"totalNas\"></app-component-review>\n\n<app-component-nebpay *ngIf = \"current==2\" [equal]=\"false\" [totalNAS]=\"totalNas\" [dest]=\"contract_address\" [data]=\"form_data\"></app-component-nebpay>\n\n<div nz-row nzType=\"flex\" nzJustify=\"end\">\n\n  <nz-button-group [nzSize]=\"size\">\n    <button nz-button nzType=\"primary\" (click)=\"prevStep()\"><i class=\"anticon anticon-left\"></i>Backward</button>\n    <button nz-button nzType=\"primary\"  (click)=\"nextStep()\">Forward<i class=\"anticon anticon-right\"></i></button>\n  </nz-button-group>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/smart.page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_global__ = __webpack_require__("./src/config.global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SmartPage = /** @class */ (function () {
    function SmartPage() {
        this.isCollapsed = false;
        this.current = 0;
        this.size = 'large';
        this.address_list = [];
        this.form_data = [];
        this.totalNas = 0;
        this.contract_address = __WEBPACK_IMPORTED_MODULE_1__config_global__["a" /* batch_distribute_address */];
    }
    SmartPage.prototype.nextStep = function () {
        if (this.current < 2) {
            this.current = this.current + 1;
        }
    };
    SmartPage.prototype.prevStep = function () {
        if (this.current > 0) {
            this.current = this.current - 1;
        }
    };
    SmartPage.prototype.getFormData = function ($event) {
        console.log($event);
        this.form_data = $event;
    };
    SmartPage.prototype.getTotal = function ($event) {
        this.totalNas = $event;
    };
    SmartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-smart',
            template: __webpack_require__("./src/app/pages/smart.page.html"),
            styles: [
                "\n      :host ::ng-deep .logo {\n        height: 32px;\n        background: rgba(255, 255, 255, .2);\n        margin: 16px;\n      }\n    "
            ]
        })
    ], SmartPage);
    return SmartPage;
}());



/***/ }),

/***/ "./src/app/pages/welcome.page.html":
/***/ (function(module, exports) {

module.exports = "<h1 id=\"nebulastoolboxuserguide\">Nebulas Toolbox UserGuide</h1>\n\n<p>The Nebulas Toolbox is a tool for you to easily distibute NAS to multiple account (for example Airdrop) and much more.</p>\n\n<p>Currently it supports </p>\n\n<ul>\n  <li>NAS equally distribute (Distribute NAS to multiple address equally)</li>\n\n  <li>NAS custom batch distribute (Distribute NAS to multiple address with custom amount per address)</li>\n\n  <li>Smart NAS wallet (the wallet auto checks if there's a tx from owner for given time. If time limit exceeded, the amount can be withdraw to the secondary wallet to avoid wallet loss) (Frontend still developing)</li>\n</ul>\n\n<h3 id=\"nasequaldistribute\">NAS Equal Distribute</h3>\n\n<p>For Simple batch distribute, choose \"NAS batch distribute\" on the left. Click add and enter the name and address. Do it multiple times for all recipients. Enter total NAS amount on the lower right. Then go to next page by clicking forward. Check if the summary is correct. If it's correct, go to the last page and click the button. the NebPay will popup and click send to send the contribution.</p>\n\n<h3 id=\"nascustomdistribute\">NAS Custom Distribute</h3>\n\n<p>For Custom batch distribute, choose \"NAS Smart distribute\" on the left. Click add and enter the name, address and amount. Do it multiple times for all recipients. Go to next page by clicking forward. Check if the summary is correct. If it's correct, go to the last page and click the button. the NebPay will popup and click send to send the contribution.</p>\n\n<h5 id=\"forhelpandadvicespleasesendtoljmwowcom\">For Help and advices, please send to ljm#wow.com</h5>\n"

/***/ }),

/***/ "./src/app/pages/welcome.page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WelcomePage = /** @class */ (function () {
    function WelcomePage() {
    }
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-welcome',
            template: __webpack_require__("./src/app/pages/welcome.page.html"),
            styles: [
                "\n      :host ::ng-deep .logo {\n        height: 32px;\n        background: rgba(255, 255, 255, .2);\n        margin: 16px;\n      }\n    "
            ]
        })
    ], WelcomePage);
    return WelcomePage;
}());



/***/ }),

/***/ "./src/config.global.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return batch_distribute_address; });
/* unused harmony export custom_distribute_address */
var batch_distribute_address = "n1mTJngmidve6S8383Ts774b3biZ37iYk9v";
var custom_distribute_address = "n1mTJngmidve6S8383Ts774b3biZ37iYk9v";


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map