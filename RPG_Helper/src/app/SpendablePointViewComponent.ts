import { Component, Input }    from '@angular/core';
import { Character }            from './character';
import { ICaracteristic }       from './ICaracteristic';

@Component({
    moduleId:module.id,
    selector: 'my-character-spendable-points',
    templateUrl : 'spendable-point-view-component.html',

})


export class SpendablePointViewComponent{
    @Input()
    character: Character;
    spendPoint : ICaracteristic[];
}