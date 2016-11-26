import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <a routerLink="/">Home</a>
    <a routerLink="/blah">Blah</a>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'Col de Jau';
}
