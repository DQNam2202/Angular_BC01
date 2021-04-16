import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css'],
})
export class InteractionComponent implements OnInit {
  movies: any[] = [
    {
      id: 1,
      name: 'Naruto',
      description: 'Rasengan',
      img: 'assets/images/1.jpg',
    },
    {
      id: 2,
      name: 'Doremon',
      description: 'Nobita and Doremon',
      img: 'assets/images/2.jpg',
    },
    {
      id: 3,
      name: 'Winx',
      description: 'Winx Intratix',
      img: 'assets/images/3.jpg',
    },
  ];
  constructor() {
    console.log(this.movies, 'data');
  }

  ngOnInit(): void {}

  handleAddMovies(movie:any){
    this.movies.push(movie);
  }
  deleteMovie(moveId:number){
    this.movies = this.movies.filter((item)=>item.id !== moveId)
  }
}
