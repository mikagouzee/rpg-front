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
var character_1 = require('./models/character');
var character_service_1 = require('./services/character.service');
var router_1 = require('@angular/router');
require('rxjs/add/operator/switchMap');
var CharacterEditComponent = (function () {
    function CharacterEditComponent(router, route, characterService) {
        this.router = router;
        this.route = route;
        this.characterService = characterService;
    }
    CharacterEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.characterService.getCharacter(params['characterName']); })
            .subscribe(function (character) { return _this.character = character; });
    };
    CharacterEditComponent.prototype.ngAfterContentInit = function () {
        this.starting_occupation_skill_point = this.character.spendPoints.find(function (i) { return i.name == "occupation_skill_point"; }).value;
    };
    CharacterEditComponent.prototype.increment_occupation_skill = function (target) {
        var skillPoint = this.character.spendPoints.find(function (i) { return i.name == "occupation_skill_points"; }).value;
        if (skillPoint > 0 && target.value < target.max) {
            skillPoint--;
            target.value++;
            this.character.spendPoints.find(function (i) { return i.name == "occupation_skill_points"; }).value = skillPoint;
        }
    };
    CharacterEditComponent.prototype.decrement_occupation_skill = function (target) {
        var skillPoint = this.character.spendPoints.find(function (i) { return i.name == "occupation_skill_points"; }).value;
        if (skillPoint > 0 && skillPoint < this.starting_occupation_skill_point) {
            if (target.value > 0) {
                skillPoint++;
                target.value--;
                this.character.spendPoints.find(function (i) { return i.name == "occupation_skill_points"; }).value = skillPoint;
            }
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', character_1.Character)
    ], CharacterEditComponent.prototype, "character", void 0);
    CharacterEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'character-edit',
            templateUrl: './templates/character-edit.component.html',
            providers: [character_service_1.CharacterService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, character_service_1.CharacterService])
    ], CharacterEditComponent);
    return CharacterEditComponent;
}());
exports.CharacterEditComponent = CharacterEditComponent;
//# sourceMappingURL=character-edit.component.js.map