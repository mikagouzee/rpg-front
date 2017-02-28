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
var SkillViewComponent = (function () {
    function SkillViewComponent() {
    }
    SkillViewComponent.prototype.ngOnInit = function () {
        this.startPoint = this.character.spendPoints.find(function (i) { return i.name.toLowerCase() == "occupation skill points"; }).value;
    };
    SkillViewComponent.prototype.increment_occupation_skill = function (skill) {
        if (skill.value < skill.max && this.character.spendPoints.find(function (i) { return i.name.toLowerCase() == "occupation skill points"; }).value > 0) {
            skill.value++;
            this.character.spendPoints.find(function (i) { return i.name.toLowerCase() == "occupation skill points"; }).value--;
        }
    };
    SkillViewComponent.prototype.decrement_occupation_skill = function (skill) {
        if (skill.value > 1 && this.character.spendPoints.find(function (i) { return i.name.toLowerCase() == "occupation skill points"; }).value < this.startPoint) {
            skill.value--;
            this.character.spendPoints.find(function (i) { return i.name.toLowerCase() == "occupation skill points"; }).value++;
        }
    };
    SkillViewComponent.prototype.increment_personal_skill = function (skill) {
        if (skill.value < skill.max && this.character.spendPoints.find(function (i) { return i.name.toLowerCase() == "personal interest skill points"; }).value > 0) {
            skill.value++;
            this.character.spendPoints.find(function (i) { return i.name.toLowerCase() == "personal interest skill points"; }).value--;
        }
    };
    SkillViewComponent.prototype.decrement_personal_skill = function (skill) {
        if (skill.value > 1 && this.character.spendPoints.find(function (i) { return i.name.toLowerCase() == "personal interest skill points"; }).value < this.startPoint) {
            skill.value--;
            this.character.spendPoints.find(function (i) { return i.name.toLowerCase() == "personal interest skill points"; }).value++;
        }
    };
    SkillViewComponent.prototype.isJobSkill = function (skill) {
        var isJob = false;
        for (var _i = 0, _a = this.character.metier.jobSkills; _i < _a.length; _i++) {
            var icar = _a[_i];
            if (icar.name == skill.name) {
                console.log("skill " + skill.name);
                isJob = true;
            }
        }
        return isJob;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', character_1.Character)
    ], SkillViewComponent.prototype, "character", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SkillViewComponent.prototype, "_edit", void 0);
    SkillViewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-character-skills',
            templateUrl: 'skills-view-component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], SkillViewComponent);
    return SkillViewComponent;
}());
exports.SkillViewComponent = SkillViewComponent;
//# sourceMappingURL=SkillViewComponent.js.map