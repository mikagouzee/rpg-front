import { ICaracteristic } from './ICaracteristic';
import { IGame }          from './IGame';
import { ICareer }          from './ICareer';

export class Character{
    characterName: string;
    playerName: string;
    
    game: IGame;
    gameName: string;

    metier: ICareer;
    careerName: string;


    baseAttr : ICaracteristic[];
    skills: ICaracteristic[];
    stats: ICaracteristic[];
    spendPoints: ICaracteristic[];

 }