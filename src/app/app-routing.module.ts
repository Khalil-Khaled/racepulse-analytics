import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { PredictionsComponent } from './components/predictions/predictions.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'analytics',
    pathMatch: 'full',
  },
  {
    path: 'analytics',
    component: AnalyticsComponent,
  },
  {
    path: 'predictions',
    component: PredictionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
