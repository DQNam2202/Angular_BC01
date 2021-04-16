import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap6',
  templateUrl: './baitap6.component.html',
  styleUrls: ['./baitap6.component.css']
})
export class Baitap6Component implements OnInit {

  form:any = {
    maSP: "",
    tenSP: "",
    gia: ""
  }
  products:any[] = [];
  total:number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  addProduct = () =>{
    console.table(this.form);
    this.products.push({...this.form});
    this.total = this.products.reduce((total,product) =>{
      total += +product.giaSP;
      return total;
    },0);
   }

}
