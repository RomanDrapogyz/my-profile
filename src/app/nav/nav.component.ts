import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { navList } from '../app.component';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() navlist: navList;
  @Output() toggle = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  select(id: number) {
    this.toggle.emit(id);
  }
}
