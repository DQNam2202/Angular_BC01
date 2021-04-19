import { Component, OnInit,Input } from '@angular/core';

class SanPham {
  maSP: number;
  tenSP: string;
  hinhAnh: string;
  gia: number;
}

@Component({
  selector: 'app-san-pham',
  templateUrl: './san-pham.component.html',
  styleUrls: ['./san-pham.component.css']
})



export class SanPhamComponent implements OnInit {

  @Input() sanPham: SanPham = new SanPham();
  constructor() { }

  ngOnInit(): void {
  }

}
