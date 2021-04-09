import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrls: ['./one-way-binding.component.css'],
})
export class OneWayBindingComponent implements OnInit {
  name: String = 'cybersoft';

  // Nó không có state vì nó hiểu tất cả là state
  constructor() {}

  imgSrc: String = 'https://picsum.photos/200/200';
  changeName = (value: String) => {
    this.name = value;
  };

  showTitle = () => {
    return 'cybersoft BootCamp01';
  };
  ngOnInit(): void {}
}
