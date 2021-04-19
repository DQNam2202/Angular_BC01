import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { SanPhamComponent } from '../san-pham/san-pham.component';
interface SanPham {
  // Interface: class trừu tượng (không thể khởi tạo đối tượng từ interface => không thể new)
  // Chỉ chứa tên chứ không định nghĩa phương thức hay thuộc tính
  // Lớp chung về chức năng chứ không phải kế thừa => interface ra đời để nhất quán về phương thức
  // Khi implements (gần giống phương thức kế thừa) phải định ngĩa toàn bộ cho các phương thức của interface
  // Các phương thức trong interface không được định nghĩa=> sẽ được định nghĩa từ class con implements
  maSP: number;
  tenSP: string;
  hinhAnh: string;
  gia: number;
}
@Component({
  selector: 'app-danh-sach-san-pham',
  templateUrl: './danh-sach-san-pham.component.html',
  styleUrls: ['./danh-sach-san-pham.component.css'],
})
export class DanhSachSanPhamComponent implements OnInit {
  mangSanPham: SanPham[] = [
    {
      maSP: 1,
      tenSP: 'Iphone X',
      hinhAnh: 'https://picsum.photos/200',
      gia: 4000,
    },
    {
      maSP: 2,
      tenSP: 'Iphone Xs',
      hinhAnh: 'https://picsum.photos/200',
      gia: 5000,
    },
    {
      maSP: 3,
      tenSP: 'Iphone Xs max',
      hinhAnh: 'https://picsum.photos/200',
      gia: 6000,
    },
  ];
  constructor() {}
  // DOm đến danh sách các thẻ 
  @ViewChildren(SanPhamComponent) dsTagSanPham: QueryList<SanPhamComponent>;
  // hàm chạy sau khi giao diện render xong
  ngOnInit(): void {}

  //dsTagSanPham Object
  thayDoiGia(){
    // DOM đến các tag sản phẩm <app-san-pham></app-san-pham>
    // let arrayTag = this.dsTagSanPham.toArray();

    this.dsTagSanPham.forEach((item:SanPhamComponent,index:number) =>{
      if(item.sanPham.maSP === 2){
        item.sanPham.gia = 200000;
      }
     })
  }
}
