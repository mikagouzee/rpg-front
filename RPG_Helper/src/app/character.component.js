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
var character_service_1 = require('./character.service');
var router_1 = require('@angular/router');
var CharacterComponent = (function () {
    function CharacterComponent(router, characterService) {
        this.router = router;
        this.characterService = characterService;
    }
    CharacterComponent.prototype.ngOnInit = function () {
        this.getCharacters();
    };
    CharacterComponent.prototype.getCharacters = function () {
        var _this = this;
        this.characterService.getCharacters()
            .then(function (characters) { return _this.characters = characters; });
    };
    CharacterComponent.prototype.onSelect = function (character) {
        console.log(character.characterName);
        this.selectedCharacter = character;
    };
    CharacterComponent.prototype.voirFiche = function (character) {
        this.router.navigate(['/characDetail', character.characterName]);
    };
    CharacterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-characters',
            templateUrl: './character.component.html',
            providers: [character_service_1.CharacterService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, character_service_1.CharacterService])
    ], CharacterComponent);
    return CharacterComponent;
}());
exports.CharacterComponent = CharacterComponent;
//# sourceMappingURL=character.component.js.map