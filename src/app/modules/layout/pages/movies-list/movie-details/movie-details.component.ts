import { Component, OnInit, Input } from '@angular/core';
import { GetDataFromApiService } from '../../../../../core/services/get-data-from-api.service';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  public data: Array<any>;
  @Input() movideDetailsGet: any;
  constructor(private getDataFromApi: GetDataFromApiService) {

    
  }

  ngOnInit() {
    this.getDataFromApi.myMethod$.subscribe((data) => {
     
        this.data = data;
    });

  }


}
