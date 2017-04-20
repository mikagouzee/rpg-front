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
var character_service_1 = require('./services/character.service');
var IGame_1 = require('./models/IGame');
var game_service_1 = require('./services/game.service');
var router_1 = require('@angular/router');
require('rxjs/add/operator/switchMap');
var CharacterCreationComponent = (function () {
    function CharacterCreationComponent(characterService, gameService, route) {
        this.characterService = characterService;
        this.gameService = gameService;
        this.route = route;
    }
    CharacterCreationComponent.prototype.ngOnInit = function () {
        // this.route.params
        //     .switchMap((params:Params) => this.gameService.get(params['selectedGame']))
        //     .subscribe(game => this.game = game);
    };
    CharacterCreationComponent.prototype.create = function (characterName, playerName, game) {
        alert("Creation ongoing from 'creation-component' for game " + game.name);
        this.characterService.create(characterName, playerName, game);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', IGame_1.IGame)
    ], CharacterCreationComponent.prototype, "game", void 0);
    CharacterCreationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'character-creation',
            templateUrl: './templates/character-creation.component.html',
            providers: [character_service_1.CharacterService, game_service_1.GameService]
        }), 
        __metadata('design:paramtypes', [character_service_1.CharacterService, game_service_1.GameService, router_1.ActivatedRoute])
    ], CharacterCreationComponent);
    return CharacterCreationComponent;
}());
exports.CharacterCreationComponent = CharacterCreationComponent;
//# sourceMappingURL=character-creation.component.js.map