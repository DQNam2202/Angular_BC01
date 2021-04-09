import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `<p>Đây là Component demo</p>`,
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
