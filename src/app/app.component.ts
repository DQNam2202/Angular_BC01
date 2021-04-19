import { Component,ViewChild } from '@angular/core';
import { DanhSachSanPhamComponent } from './domangular/danh-sach-san-pham/danh-sach-san-pham.component';
interface SanPham {
  maSP: number;
  tenSP: string;
  hinhAnh: string;
  gia: number;
}
@Component({
  selector: 'app-root', // Tên thẻ  <app-root></app-root>
  // Template thành phần giao diện của thẻ
  template: `<div class="container">
    <!-- <app-bai-tap-layout></app-bai-tap-layout> -->
    <!-- <app-one-way-binding></app-one-way-binding> -->
    <!-- <app-two-way-binding></app-two-way-binding> -->
    <!-- <app-structural-directives></app-structural-directives> -->
    <!-- <app-attribute-directives></app-attribute-directives> -->
    <!-- <app-baitap6></app-baitap6> -->
    <!-- <app-interaction></app-interaction> -->
    <app-danh-sach-san-pham #tagDSSP></app-danh-sach-san-pham>
    <div class="container">
      <div class="form-group">
        <p>Mã SP</p>
        <input #maSP class="form-control" />
      </div>
    </div>
    <div class="container">
      <div class="form-group">
        <p>Tên SP</p>
        <input #tenSP class="form-control" />
      </div>
    </div>
    <div class="container">
      <div class="form-group">
        <p>Giá SP</p>
        <input #gia class="form-control" />
      </div>
    </div>
    <button
      #btnThemSanPham
      class="btn btn-success"
      (click)="
        themSanPham({
          maSP: maSP.value,
          tenSP: tenSP.value,
          gia: gia.value
        })
      "
      theButton="theButton"
    >
      Thêm Sản Phẩm
    </button>
  </div>`,

  styleUrls: ['./app.component.css'], //đường dẫn đến file CSS của thẻ
})
// Xử lý các nút trên giao diện của thẻ <app-root></app-root>
export class AppComponent {
  title = 'bc01angular';
  // #id: templateVariable
  // alert(document.getElementById("btnThemSanPham").id);
  // ViewChild dùng để DOM đến các thẻ lấy ra thuộc tính và phương thức của thẻ đó
  // attribute là các thuộc tính trên thẻ (chúng ta có thể tạo thêm)
  // properties là các thuộc tính có sẵn trong đối tượng HTML
  
  @ViewChild('btnThemSanPham') tagButtonThem: any;
  @ViewChild('tagDSSP') tagDSSP: DanhSachSanPhamComponent;
  themSanPham(sanPham: SanPham): void {
    console.log(this.tagButtonThem.nativeElement.id);
    console.log(this.tagButtonThem.nativeElement.className);
    this.tagButtonThem.nativeElement.className = 'btn btn-primary';
    console.log(this.tagButtonThem.nativeElement.getAttribute('theButton'));

    this.tagDSSP.mangSanPham.push({ ...sanPham ,hinhAnh:"https://picsum.photos/200"});
  }
}
