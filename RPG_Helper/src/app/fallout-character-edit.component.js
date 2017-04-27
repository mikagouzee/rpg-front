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
var FalloutCharacterEditComponent = (function () {
    //constructor
    function FalloutCharacterEditComponent(characterService) {
        this.characterService = characterService;
    }
    //onInit
    FalloutCharacterEditComponent.prototype.ngOnInit = function () {
        this.selectedSkills = new Array();
    };
    //methods
    FalloutCharacterEditComponent.prototype.select = function (skill) {
        skill.value += 15;
        this.selectedSkills.push(skill);
    };
    FalloutCharacterEditComponent.prototype.isSelected = function (skill) {
        var isSelect = false;
        for (var _i = 0, _a = this.selectedSkills; _i < _a.length; _i++) {
            var aSkill = _a[_i];
            if (aSkill.name == skill.name) {
                isSelect = true;
            }
        }
        return isSelect;
    };
    FalloutCharacterEditComponent.prototype.reset = function () {
        for (var _i = 0, _a = this.selectedSkills; _i < _a.length; _i++) {
            var changedSkill = _a[_i];
            changedSkill.value -= 15;
        }
        this.selectedSkills = new Array();
    };
    FalloutCharacterEditComponent.prototype.validate = function () {
        //TO DO : RECORD CHARACTER WITH CHARACTERSERVICE
        console.log("Validation ongoing");
        //this.characterService.update(this.mycharacter);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', character_1.Character)
    ], FalloutCharacterEditComponent.prototype, "mycharacter", void 0);
    FalloutCharacterEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fallout-edit',
            templateUrl: './templates/fallout-edit.component.html',
            providers: [character_service_1.CharacterService]
        }), 
        __metadata('design:paramtypes', [character_service_1.CharacterService])
    ], FalloutCharacterEditComponent);
    return FalloutCharacterEditComponent;
}());
exports.FalloutCharacterEditComponent = FalloutCharacterEditComponent;
//# sourceMappingURL=fallout-character-edit.component.js.map