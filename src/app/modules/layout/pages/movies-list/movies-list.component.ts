import { Component, OnInit, ViewChild } from '@angular/core';
import { GetDataFromApiService } from '../../../../core/services/get-data-from-api.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class MoviesListComponent implements OnInit {
  public data: Array<any>;
  wholeArray = [];
 // data: any[];
  movideDetails;
  isLoading: boolean;
  constructor( 
    private getDataFromApi: GetDataFromApiService, 
    config: NgbModalConfig, 
    private modalService: NgbModal,
    private router : Router, 
    private route : ActivatedRoute) { }

  ngOnInit() {    
    this.isLoading = true;
    if(this.wholeArray.length === 0){
      for ( let i = 1; i <= 20; i++ ) {
        this.getMovieList(i);
      }
      // const id = this.route.snapshot.paramMap.get("id");

      // console.log(id);
    }
    this.data = this.wholeArray;
  }  
  getMovieList(page){
    this.getDataFromApi.getDataFromTMDB(page).then((response) => {
      response.json().then((data1) => {  
          this.isLoading = true;
          this.wholeArray.push.apply(this.wholeArray, data1.results);
          this.isLoading = false;
      })
    })
    .catch(err => {
      console.log(err);
    });
  }
  movieDetails(id){
    this.getDataFromApi.myMethod(this.data);
    this.movideDetails = this.wholeArray.find(element => element.id === id);     
  }
  backToListDataF(event){
    this.movideDetails = event;
  }
}
