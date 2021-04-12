import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css'],
})
export class StructuralDirectivesComponent implements OnInit {
  isActive: boolean = true;
  isLoggedIn: Boolean = false;
  color: string = '';
  Student: any[] = [
    { name: 'Nam', age: 24 },
    { name: 'Tèo', age: 20 },
    { name: 'Tú', age: 25 }
  ];
  constructor() {}

  ngOnInit(): void {}
  changeColor(evt: any) {
    this.color = evt.target.value;
  }
}
