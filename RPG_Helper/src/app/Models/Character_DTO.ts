import {ICaracteristic} from './ICaracteristic';
import { ICareer } from './Icareer';

export class Character_DTO{
    characterName:string;
    playerName:string;
    gameName:string;
    baseAttr:ICaracteristic[];
    metier:ICareer;
}