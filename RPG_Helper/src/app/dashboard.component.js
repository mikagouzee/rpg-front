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
var game_service_1 = require('./services/game.service');
var router_1 = require('@angular/router');
require('rxjs/add/operator/toPromise');
var DashboardComponent = (function () {
    function DashboardComponent(http, router, gameService) {
        this.http = http;
        this.router = router;
        this.gameService = gameService;
    }
    //private gamesUrl = 'http://localhost:58225/api/games/getAll';
    DashboardComponent.prototype.ngOnInit = function () {
        this.getGames();
    };
    ;
    DashboardComponent.prototype.getGames = function () {
        var _this = this;
        this.gameService.getGames()
            .then(function (games) { return _this.games = games; });
    };
    DashboardComponent.prototype.game_change = function () {
        this.selectedGame = null;
    };
    DashboardComponent.prototype.checkState = function () {
        console.log(JSON.stringify(this.selectedGame));
    };
    DashboardComponent.prototype.onChange = function (game) {
        this.selectedGame = game;
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-dashboard',
            templateUrl: './templates/dashboard.component.html',
            providers: [game_service_1.GameService]
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router, game_service_1.GameService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map