import { Component } from '@angular/core';
export interface navList {
  name: string,
  id: number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-profile';
  navlist: navList[] = [
    {name: "About",id: 0},
    {name: "Experience",id: 1},
    {name: "Education",id: 2},
    {name: "Skills",id: 3},
    {name: "Contact",id: 4}
  ]
  index: number = 0;
  tg(id: number) {
    this.index = id;
    console.log(id);
  }
}
