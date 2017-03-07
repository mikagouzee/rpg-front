import { ICaracteristic } from './ICaracteristic';
import { ICareer }          from './ICareer';

export class IGame{
    name: string;
    BaseAttributes:ICaracteristic[];
    Stats:ICaracteristic[];
    Skills:ICaracteristic[];
    SpendPoints:ICaracteristic[];
    professions:ICareer[];
    rules:string[];

    constructor(myname:string){
        this.name = myname;
    }
}