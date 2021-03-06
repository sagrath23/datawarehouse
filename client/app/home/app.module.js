"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//Angular 2 Core Components
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
//Angular 2 Material WebComponents
var material_1 = require("@angular/material");
//Angular Material Animations
var animations_1 = require("@angular/platform-browser/animations");
//Chartjs module
var ng2_charts_1 = require("ng2-charts/ng2-charts");
//App Main Component
var app_component_1 = require("./app.component");
//App Components
var auth_service_1 = require("./auth/auth.service");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var sales_component_1 = require("./sales/sales.component");
var report_component_1 = require("./report/report.component");
//App routes
var app_routing_module_1 = require("./routes/app-routing.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routing_module_1.AppRoutingModule, material_1.MaterialModule, animations_1.NoopAnimationsModule, ng2_charts_1.ChartsModule],
        declarations: [app_component_1.AppComponent, dashboard_component_1.DashboardComponent, sales_component_1.SalesComponent, report_component_1.ReportComponent],
        providers: [auth_service_1.AuthService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map