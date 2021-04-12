import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  // two-way-binding cần import FormsModule
  styleUrls: ['./two-way-binding.component.css'],
})
export class TwoWayBindingComponent implements OnInit {
  userName: String = '';
  email:String = '';
  color:string = 'red';
  constructor() {}

  ngOnInit(): void {}
  changeUsername(evt: any) {
    console.log(evt.target.value);
    //Lấy value của input gán cho biến userName
    //Giá trị userName thay đổi thì component render lại thì giao diện sẽ được cập nhật giá trị của data
    this.userName = evt.target.value
  }
}
