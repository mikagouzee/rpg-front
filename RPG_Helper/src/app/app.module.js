"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var dashboard_component_1 = require('./dashboard.component');
var character_component_1 = require('./character.component');
var character_service_1 = require('./services/character.service');
var character_detail_component_1 = require('./character-detail.component');
var character_creation_component_1 = require('./character-creation.component');
var fallout_character_creation_component_1 = require('./fallout-character-creation.component');
var cthulhu_character_creation_component_1 = require('./cthulhu-character-creation.component');
var SpendablePointViewComponent_1 = require('./viewcomponent/SpendablePointViewComponent');
var SkillViewComponent_1 = require('./viewcomponent/SkillViewComponent');
var app_routing_module_1 = require('./app-routing.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpModule
            ],
            declarations: [
                app_component_1.AppComponent,
                character_component_1.CharacterComponent,
                character_detail_component_1.CharacterDetailComponent,
                character_creation_component_1.CharacterCreationComponent,
                fallout_character_creation_component_1.FalloutCharacterCreationComponent,
                cthulhu_character_creation_component_1.CthulhuCharacterCreationComponent,
                SpendablePointViewComponent_1.SpendablePointViewComponent,
                SkillViewComponent_1.SkillViewComponent,
                dashboard_component_1.DashboardComponent
            ],
            providers: [
                character_service_1.CharacterService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map