import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {VolComponent} from './pages/vol/vol.component';
import {LandingComponent} from './pages/landing/landing.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  { path: '**', redirectTo: '/notfound' }
];
