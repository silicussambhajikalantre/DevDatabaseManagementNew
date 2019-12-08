import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { DataVisualizationComponent } from './pages/data-visualization/data-visualization.component';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';


const appRoutes: Routes = [
  {
      path: '',
      component: LayoutComponent,
      children: [         
         { path: 'dataVizualization', component: DataVisualizationComponent, canActivate: [AuthGuard] },
         { path: 'movie-list', component: MoviesListComponent, canActivate: [AuthGuard] },
        
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
