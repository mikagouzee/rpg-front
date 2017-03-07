import { Component, OnInit} from '@angular/core';
import { Character } from './character';
import { CharacterService} from './character.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-characters',

    templateUrl: './character.component.html',
    providers:[CharacterService]

})

export class CharacterComponent implements OnInit{
    characters: Character[];
    selectedCharacter: Character;

    constructor(private router: Router,
        private characterService: CharacterService){}

    ngOnInit():void{
        this.getCharacters();
    }

    getCharacters():void{
        this.characterService.getCharacters()
                .then(characters => this.characters = characters);
    }

    onSelect(character: Character):void{
        console.log(character.characterName);
        this.selectedCharacter = character;
    }

    voirFiche(character:Character){
        this.router.navigate(['/characDetail', character.characterName]);
    }


}