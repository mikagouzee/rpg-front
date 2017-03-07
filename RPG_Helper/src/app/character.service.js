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
var http_1 = require('@angular/http');
var Character_DTO_1 = require('./Character_DTO');
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
var CharacterService = (function () {
    function CharacterService(http) {
        this.http = http;
        this.charactersUrl = 'http://localhost:58225/api/getAll';
    }
    CharacterService.prototype.getCharacters = function () {
        return this.http.get(this.charactersUrl)
            .toPromise()
            .then((function (response) { return response.json(); }))
            .catch(this.handleError);
    };
    CharacterService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    CharacterService.prototype.getCharacter = function (characterName) {
        console.log("character name received : ", characterName);
        var url = "http://localhost:58225/api/get/" + characterName;
        console.log("url called : ", url);
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CharacterService.prototype.create = function (characterName, playerName, game) {
        var url = "http://localhost:58225/api/create/";
        var myCharacter = new Character_DTO_1.Character_DTO();
        myCharacter.characterName = characterName;
        myCharacter.playerName = playerName;
        myCharacter.gameName = game.name;
        var headers = new http_1.Headers({ headers: { 'Content-Type': 'application/json' } });
        var options = new http_1.RequestOptions({ headers: headers });
        console.log(JSON.stringify(myCharacter));
        return this.http.post(url, myCharacter, options)
            .map(function (res) { return res.json(); })
            .toPromise()
            .catch(this.handleError);
    };
    CharacterService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CharacterService);
    return CharacterService;
}());
exports.CharacterService = CharacterService;
//# sourceMappingURL=character.service.js.map