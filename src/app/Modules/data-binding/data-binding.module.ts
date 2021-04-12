import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule} from '@angular/forms'

import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';



@NgModule({
  declarations: [
    OneWayBindingComponent,
    TwoWayBindingComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    OneWayBindingComponent,
    TwoWayBindingComponent
  ]
})
export class DataBindingModule { }
