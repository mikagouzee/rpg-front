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
var character_1 = require('./character');
var SpendablePointViewComponent = (function () {
    function SpendablePointViewComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', character_1.Character)
    ], SpendablePointViewComponent.prototype, "character", void 0);
    SpendablePointViewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-character-spendable-points',
            templateUrl: 'spendable-point-view-component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], SpendablePointViewComponent);
    return SpendablePointViewComponent;
}());
exports.SpendablePointViewComponent = SpendablePointViewComponent;
//# sourceMappingURL=SpendablePointViewComponent.js.map