import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
})
export class AddMovieComponent implements OnInit {
  form: any = {
    name: '',
    description: '',
    img:""
  };
  @Output() onAdd = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  handleAddMovies(){
    //random id tự dộng 
    const id = Math.floor(Math.random()*100);
    this.onAdd.emit({...this.form,id});
  }
}
