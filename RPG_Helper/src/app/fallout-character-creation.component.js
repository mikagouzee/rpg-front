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
var IGame_1 = require('./models/IGame');
var character_service_1 = require('./services/character.service');
var FalloutCharacterCreationComponent = (function () {
    function FalloutCharacterCreationComponent(characterService) {
        this.characterService = characterService;
    }
    FalloutCharacterCreationComponent.prototype.ngOnInit = function () {
        this.CharDTOBattr = new Array();
        this.career = this.game.professions[0];
    };
    FalloutCharacterCreationComponent.prototype.AddOne = function (battr) {
        if (battr.value < battr.max && this.checkCurrent() < 31)
            battr.value += 1;
    };
    FalloutCharacterCreationComponent.prototype.RemoveOne = function (battr) {
        if (battr.value > 0)
            battr.value -= 1;
        this.checkCurrent();
    };
    FalloutCharacterCreationComponent.prototype.checkCurrent = function () {
        var currentTotal = 0;
        for (var _i = 0, _a = this.game.BaseAttributes; _i < _a.length; _i++) {
            var battr = _a[_i];
            currentTotal += battr.value;
        }
        console.log(currentTotal);
        document.getElementById('remainingPoints').innerText = "Remaining Points : " + (30 - currentTotal);
        return currentTotal;
    };
    FalloutCharacterCreationComponent.prototype.validate = function (battr) {
        var alreadyAdd = false;
        for (var _i = 0, _a = this.CharDTOBattr; _i < _a.length; _i++) {
            var curBat = _a[_i];
            if (curBat.name == battr.name) {
                alert("You've already validate this attribute!");
                alreadyAdd = true;
            }
        }
        if (!alreadyAdd) {
            this.CharDTOBattr.push(battr);
        }
    };
    FalloutCharacterCreationComponent.prototype.create = function (characterName, playerName, game) {
        var included = "";
        for (var _i = 0, _a = this.CharDTOBattr; _i < _a.length; _i++) {
            var alreadyIncluded = _a[_i];
            included += alreadyIncluded.name;
            included += " , ";
        }
        if (this.CharDTOBattr.length < game.BaseAttributes.length) {
            alert("You haven't validate all your points. You have validate : " + included);
        }
        else {
            alert("Creation ongoing from 'creation-component' for game " + game.name
                + " with base attributes : " + this.CharDTOBattr.toString());
            this.characterService.createWithBattr(characterName, playerName, game, this.career, this.CharDTOBattr);
        }
    };
    FalloutCharacterCreationComponent.prototype.onChange = function (career) {
        alert(career.name);
        this.career = career;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', IGame_1.IGame)
    ], FalloutCharacterCreationComponent.prototype, "game", void 0);
    FalloutCharacterCreationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fallout-creation',
            templateUrl: './templates/fallout-creation.component.html',
            providers: [character_service_1.CharacterService]
        }), 
        __metadata('design:paramtypes', [character_service_1.CharacterService])
    ], FalloutCharacterCreationComponent);
    return FalloutCharacterCreationComponent;
}());
exports.FalloutCharacterCreationComponent = FalloutCharacterCreationComponent;
//# sourceMappingURL=fallout-character-creation.component.js.map