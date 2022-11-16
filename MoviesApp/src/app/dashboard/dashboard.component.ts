import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  latestMovie: any;
  popularMovies!: Movie;
  nowPlayingMovies!: Movie;
  topratedMovies!: Movie;
  upcomingMovies!: Movie;

  constructor(private dataservie: DataService) { }

  ngOnInit(): void {
    this.getLatesMovie();
    // this.getPopularMovies();
    // this.getNowPLayingMovies();
    // this.getTopRatedMovies();
    // this.getTopRatedMovies();
  }

  getLatesMovie() {
    this.dataservie.getLatestMovies().subscribe(res => {
      this.latestMovie = res;
      console.log(this.latestMovie);
    }, err => {
      console.log('Not able to get the latest movie', err);
    })
  }

  // getPopularMovies() {
  //   this.dataservie.getPopularMovies().subscribe(res => {
  //     this.popularMovies = res;
  //     console.log(this.popularMovies);
  //   }, err => {
  //     console.log('Not able to get the popular Movies', err);
  //   })
  // }

  // getNowPLayingMovies() {
  //   this.dataservie.getNowPLayingMovies().subscribe(res => {
  //     this.nowPlayingMovies = res;
  //     console.log(this.getNowPLayingMovies);
  //   }, err => {
  //     console.log('Not able to get the NowPLayingMovies', err);
  //   })
  // }

  // getTopRatedMovies() {
  //   this.dataservie.getNowPLayingMovies().subscribe(res => {
  //     this.topratedMovies = res;
  //     console.log(this.getTopRatedMovies);
  //   }, err => {
  //     console.log('Not able to get the NowPLayingMovies', err);
  //   })
  // }

}
