import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DataVisualizationComponent } from './pages/data-visualization/data-visualization.component';
import { BarChartCheckboxComponent } from './pages/data-visualization/bar-chart-checkbox/bar-chart-checkbox.component';
import { AlertComponent } from './components/alert/alert.component';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { DataTableModule } from 'ng-angular8-datatable';
import { MovieDetailsComponent } from './pages/movies-list/movie-details/movie-details.component';
import { DataMappingComponent } from './pages/data-mapping/data-mapping.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoaderComponent } from '../../core/shared/loader/loader.component';
import { MostPopularMoviesComponent } from './pages/data-visualization/most-popular-movies/most-popular-movies.component';

@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    LayoutComponent, 
    DataVisualizationComponent, 
    BarChartCheckboxComponent, 
    AlertComponent, 
    MoviesListComponent, 
    LoaderComponent,
    MovieDetailsComponent, 
    DataMappingComponent, MostPopularMoviesComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    LayoutRoutingModule,
    ChartsModule,
    DataTableModule,
  ],
  providers: [DatePipe]
})
export class LayoutModule { }
