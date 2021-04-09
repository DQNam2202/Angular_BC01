import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap-layout',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-12">
          <app-header></app-header>
        </div>
      </div>
      <div class="row">
        <div class="col-8">
          <app-content></app-content>
        </div>
        <div class="col-4">
          <app-side-bar></app-side-bar>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <app-footer></app-footer>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./bai-tap-layout.component.css'],
})
export class BaiTapLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
