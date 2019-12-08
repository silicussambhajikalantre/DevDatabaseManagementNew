import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GetDataFromApiService } from '../../../../../core/services/get-data-from-api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  public data: Array<any>;
  @Input() movideDetailsGet: any;
  @Output() backToListData: EventEmitter<any> = new EventEmitter<any>();;
  movieDetails: any;
  isLoading: boolean = false;
  constructor(private getDataFromApi: GetDataFromApiService) {

    
  }

  ngOnInit() {
    this.isLoading = true;
    //this.getDataFromApi.myMethod$.subscribe((data) => {
      this.getDataFromApi.getSingleMovieDetail(this.movideDetailsGet.id).then((response) => {
        response.json().then((data) => {  
            this.movieDetails = data;
            console.log(this.movieDetails);
            this.isLoading = false;
        })
      })
      .catch(err => {
        console.log(err);
      });
        
        //this.data = data;
   // });
  }
  backToList(){
    this.backToListData.emit(false);
  }


}
