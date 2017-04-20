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
var router_1 = require('@angular/router');
var character_service_1 = require('./services/character.service');
var character_1 = require('./models/character');
var router_2 = require('@angular/router');
var common_1 = require('@angular/common');
require('rxjs/add/operator/switchMap');
var CharacterDetailComponent = (function () {
    function CharacterDetailComponent(characterService, route, location, router) {
        this.characterService = characterService;
        this.route = route;
        this.location = location;
        this.router = router;
    }
    CharacterDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.characterService.getCharacter(params['characterName']); })
            .subscribe(function (character) { return _this.character = character; });
        this._edit = false;
    };
    CharacterDetailComponent.prototype.edit = function () {
        this._edit = !this._edit;
        console.log(this._edit);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', character_1.Character)
    ], CharacterDetailComponent.prototype, "character", void 0);
    CharacterDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-character-detail',
            templateUrl: './templates/character-detail.component.html',
            providers: [character_service_1.CharacterService],
        }), 
        __metadata('design:paramtypes', [character_service_1.CharacterService, router_2.ActivatedRoute, common_1.Location, router_1.Router])
    ], CharacterDetailComponent);
    return CharacterDetailComponent;
}());
exports.CharacterDetailComponent = CharacterDetailComponent;
//# sourceMappingURL=character-detail.component.js.map