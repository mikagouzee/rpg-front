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
var character_1 = require('./models/character');
var character_service_1 = require('./services/character.service');
var CthulhuCharacterEditComponent = (function () {
    //constructor
    function CthulhuCharacterEditComponent(characterService) {
        this.characterService = characterService;
    }
    //onInit
    CthulhuCharacterEditComponent.prototype.ngOnInit = function () {
        this.skillFirstValue = new Array();
        //this.mygame = this.mycharacter.game;
        //get base skill point
        if (this.mycharacter != null) {
            for (var _i = 0, _a = this.mycharacter.spendPoints; _i < _a.length; _i++) {
                var sk = _a[_i];
                if (sk.name.toLowerCase() == "occupation skill points") {
                    this.occupationSkillPoint = sk.value;
                    this.ospStartValue = sk.value;
                }
                else if (sk.name.toLowerCase() == "personal interest skill points") {
                    this.personalSkillPoint = sk.value;
                    this.pspStartValue = sk.value;
                }
            }
        }
        //get base value of the skills
        for (var _b = 0, _c = this.mycharacter.skills; _b < _c.length; _b++) {
            var myskill = _c[_b];
            var newSkill = myskill;
            this.skillFirstValue.push(newSkill);
        }
    };
    //methods
    CthulhuCharacterEditComponent.prototype.validate = function () {
        this.characterService.update(this.mycharacter);
    };
    CthulhuCharacterEditComponent.prototype.increment = function (skill) {
        if (this.isJobSkill(skill)) {
            if (skill.value < skill.max &&
                this.occupationSkillPoint > 0) {
                skill.value += 1;
                this.occupationSkillPoint -= 1;
                this.mycharacter.spendPoints.find(function (s) { return s.name == "Occupation skill points"; }).value = this.occupationSkillPoint;
            }
        }
        else {
            if (skill.value < skill.max &&
                this.personalSkillPoint > 0) {
                skill.value += 1;
                this.personalSkillPoint -= 1;
                this.mycharacter.spendPoints.find(function (s) { return s.name == "Personal interest skill points"; }).value = this.personalSkillPoint;
            }
        }
    };
    CthulhuCharacterEditComponent.prototype.decrement = function (skill) {
        var toCheck = new ICaracteristic_1.ICaracteristic();
        toCheck = this.skillFirstValue.find(function (s) { return s.name == skill.name; });
        if (this.isJobSkill(skill)) {
            if (skill.value > 0 &&
                !(skill.value < toCheck.value) &&
                this.occupationSkillPoint < this.ospStartValue) {
                skill.value -= 1;
                this.occupationSkillPoint += 1;
                this.mycharacter.spendPoints.find(function (s) { return s.name == "Occupation skill points"; }).value = this.occupationSkillPoint;
            }
        }
        else {
            if (skill.value > 0 &&
                this.personalSkillPoint < this.pspStartValue) {
                skill.value -= 1;
                this.personalSkillPoint += 1;
                this.mycharacter.spendPoints.find(function (s) { return s.name == "Personal interest skill points"; }).value = this.personalSkillPoint;
            }
        }
    };
    CthulhuCharacterEditComponent.prototype.isJobSkill = function (skill) {
        var isJob = false;
        for (var _i = 0, _a = this.mycharacter.metier.jobSkills; _i < _a.length; _i++) {
            var inJob = _a[_i];
            if (inJob.name == skill.name) {
                isJob = true;
                return isJob;
            }
        }
        return isJob;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', character_1.Character)
    ], CthulhuCharacterEditComponent.prototype, "mycharacter", void 0);
    CthulhuCharacterEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cthulhu-edit',
            templateUrl: './templates/cthulhu-edit.component.html',
            providers: [character_service_1.CharacterService]
        }), 
        __metadata('design:paramtypes', [character_service_1.CharacterService])
    ], CthulhuCharacterEditComponent);
    return CthulhuCharacterEditComponent;
}());
exports.CthulhuCharacterEditComponent = CthulhuCharacterEditComponent;
//# sourceMappingURL=cthulhu-character-edit.component.js.map