import { Component, Input }    from '@angular/core';
import { Character }            from '../models/character';
import { ICaracteristic }       from '../models/ICaracteristic';

@Component({
    moduleId:module.id,
    selector: 'my-character-spendable-points',
    templateUrl : '../templates/spendable-point-view-component.html',

})


export class SpendablePointViewComponent{
    @Input()
    character: Character;
    //spendPoint : ICaracteristic[];
    }