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

  wholeArray = [];
  data: any[];
  movideDetails;
  constructor( 
    private getDataFromApi: GetDataFromApiService, 
    config: NgbModalConfig, 
    private modalService: NgbModal,
    private router : Router, 
    private route : ActivatedRoute) { }

  ngOnInit() {
    if(this.wholeArray.length === 0){
      for ( let i = 1; i <= 100; i++ ) {
        this.mayBe(i);
      }
    }
    
    this.data = this.wholeArray;
    console.log(this.data);
  }
  movieDetails(id){
     this.movideDetails = this.wholeArray.find(element => element.id === id);
     this.router.navigate(['movie-list/movie-details']);
  }
  mayBe(page){
    this.getDataFromApi.getDataFromTMDB(page).then((response) => {
      response.json().then((data1) => {
  //        console.log(data1);
          this.wholeArray.push.apply(this.wholeArray, data1.results);
      })
    })
    .catch(err => {
      console.log(err);
    });
  }
}
