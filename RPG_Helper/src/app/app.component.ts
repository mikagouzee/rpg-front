import { Component } from '@angular/core';

@Component({
    selector:'my-app',
    template:`
        <h1>{{title}}</h1>
        <a routerLink="/dashboard">dashboard</a>

        <a routerLink="/characters">characters</a>
        <router-outlet></router-outlet>
    `
})

export class AppComponent{
    title='Rpg Helper';
}