import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 't', url: '/home', icon: 'home' },

    { title: 'a', url: '/autores', icon: 'people-circle' },
    { title: 'Livros', url: '/livros', icon: 'book' },
    { title: 'Livros', url: '/livros', icon: 'book' },
  ];

  constructor() {}
}
