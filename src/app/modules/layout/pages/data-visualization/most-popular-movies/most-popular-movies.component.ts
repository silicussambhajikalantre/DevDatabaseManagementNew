import { Component, OnInit } from '@angular/core';
import { GetDataFromApiService } from '../../../../../core/services/get-data-from-api.service';
import { DatePipe } from '@angular/common';
import { Label } from 'ng2-charts';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-most-popular-movies',
  templateUrl: './most-popular-movies.component.html',
  styleUrls: ['./most-popular-movies.component.scss']
})
export class MostPopularMoviesComponent implements OnInit {
  mostPopularMovies = [];
  pageNo: number;
  isLoading = false;
  barData = [];
  movieName = [];
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.

    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [    
    { data: [], label: 'Series B', }
  ];
  


  constructor(private getDataFromApi: GetDataFromApiService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.isLoading = true;
    var endDate = new Date();
    var previous7Day = endDate.getDate() - 7;
    var startDate = new Date();
    console.log(startDate);
    console.log(endDate);
    startDate.setDate(previous7Day)
    this.pageNo = 1;
    this.getDataFromApi.getMostPopularMovies(this.datePipe.transform(startDate, 'yyyy-MM-dd'), this.datePipe.transform(endDate, 'yyyy-MM-dd'), this.pageNo).subscribe(res=>{
     // let pageTotal = res;
      //console.log(pageTotal.total_pages);
      this.mostPopularMovies = res.results
      
      this.mostPopularMovies.sort((a, b) => parseFloat(a.popularity) + parseFloat(b.popularity));
      for(let i = 0; i <=6; i++){
        this.barData.push(this.mostPopularMovies[i].popularity);
        this.movieName.push(this.mostPopularMovies[i].title);
      }
      this.setChart(this.barData, this.movieName);
      this.isLoading = false;
    });


  }
  setChart(barData, movieName){
    this.barChartLabels = [...movieName];
    this.barChartData  = [
      { data: [...barData], label: 'Movies' },
      
    ];
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
