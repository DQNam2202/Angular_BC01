import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css'],
})
export class MovieItemComponent implements OnInit {
  @Input() movie: any = {};

  // EventEmitter: Đối tượng giúp định nghĩa 1 event
  // onSelect là tên event do mình tự đặt
  // Output: nhận vào event vừa tạo, cung cấp các hàm để đẩy event này lên component cha
  @Output() onSelect = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
 
  selectMovie(){
    // Cần đẩy bộ phim vừa click lên componet cha (MovieListComponent)
    // emit kích hoạt event đẩy lên componet cha
    // Có thể truyền kèm data trong hàm emit để component cha nhận được
    this.onSelect.emit(this.movie);
  };
  deleteMovie(){
    this.onDelete.emit(this.movie.id);
  }
}
