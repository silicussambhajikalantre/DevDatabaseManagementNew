import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DataVisualizationComponent } from './pages/data-visualization/data-visualization.component';
import { BarChartCheckboxComponent } from './pages/data-visualization/bar-chart-checkbox/bar-chart-checkbox.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LayoutComponent, DataVisualizationComponent, BarChartCheckboxComponent, AlertComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ChartsModule
  ]
})
export class LayoutModule { }
