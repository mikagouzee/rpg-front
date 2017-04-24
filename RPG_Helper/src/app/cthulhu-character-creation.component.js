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
var ICaracteristic_1 = require('./models/ICaracteristic');
var IGame_1 = require('./models/IGame');
var character_service_1 = require('./services/character.service');
var CthulhuCharacterCreationComponent = (function () {
    function CthulhuCharacterCreationComponent(characterService) {
        this.characterService = characterService;
    }
    CthulhuCharacterCreationComponent.prototype.ngOnInit = function () {
        this.CharDTOBattr = new Array();
    };
    CthulhuCharacterCreationComponent.prototype.onClickRoll = function (battr) {
        var toBePush = new ICaracteristic_1.ICaracteristic();
        var randomVal = Math.floor(Math.random() * battr.max) + 1;
        while (randomVal == 1) {
            randomVal = Math.floor(Math.random() * battr.max) + 1;
        }
        console.log("We will add " + battr.name + " to the array with val " + randomVal);
        toBePush.name = battr.name;
        toBePush.value = randomVal;
        this.CharDTOBattr.push(toBePush);
    };
    CthulhuCharacterCreationComponent.prototype.isRolled = function (battr) {
        var isRolled = false;
        for (var _i = 0, _a = this.CharDTOBattr; _i < _a.length; _i++) {
            var icar = _a[_i];
            if (icar.name == battr.name) {
                console.log("We already rolled " + battr.name);
                isRolled = true;
            }
        }
        return isRolled;
    };
    CthulhuCharacterCreationComponent.prototype.create = function (characterName, playerName, game) {
        alert("Creation ongoing from 'creation-component' for game " + game.name);
        this.characterService.createWithBattr(characterName, playerName, game, this.CharDTOBattr);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', IGame_1.IGame)
    ], CthulhuCharacterCreationComponent.prototype, "game", void 0);
    CthulhuCharacterCreationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cthulhu-creation',
            templateUrl: './templates/cthulhu-creation.component.html',
            providers: [character_service_1.CharacterService]
        }), 
        __metadata('design:paramtypes', [character_service_1.CharacterService])
    ], CthulhuCharacterCreationComponent);
    return CthulhuCharacterCreationComponent;
}());
exports.CthulhuCharacterCreationComponent = CthulhuCharacterCreationComponent;
//# sourceMappingURL=cthulhu-character-creation.component.js.map