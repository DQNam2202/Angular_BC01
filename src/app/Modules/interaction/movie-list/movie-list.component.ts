import { Component, OnInit , Input, EventEmitter, Output} from '@angular/core';



@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  // Khi component con muốn nhận dữ liệu từ component cha phải khai báo @Input() variable-name
  @Input() movies = []; // khi bị null hoặc underfine thì sử dụng []
  selectedMovie: any = null;
  @Output() onDelete = new EventEmitter();
  constructor() {
  // console.log(this.movie,"movie");
   }

  ngOnInit(): void {
  }
  selectMovie(movie: any){
    console.log(movie);
    this.selectedMovie = movie;
  }
  deleteMovie(movieId: number){
    this.onDelete.emit(movieId);
  }
}
