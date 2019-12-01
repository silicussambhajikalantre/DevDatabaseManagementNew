import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  @Input() movideDetailsGet: any;
  constructor() { }

  ngOnInit() {
    
  }
  ngOnChanges() {
    console.log(this.movideDetailsGet);
  }

}
