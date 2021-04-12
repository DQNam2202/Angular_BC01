import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.css'],
})
export class AttributeDirectivesComponent implements OnInit {
  isActive: boolean = true;
  color: string = 'yellow';
  imgSrc: string = 'https://picsum.photos/200/200';

  html: string = `
    <div class="alert alert-danger">
        <span>Error</span>
    </div>
  `;

  constructor() {}

  ngOnInit(): void {}
}
