import { Routes } from '@angular/router';
import {LandingComponent} from './pages/landing/landing.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      // { path: '', component: HeroWidget},
      // { path: 'shoplist', component: ShoplistComponent },
      // { path: 'createfacture', component: CreateFactureComponent },
      // { path: 'historique', component: HistoriquefactComponent },
      /*,
        { path: 'uikit', loadChildren: () => import('./app/pages/uikit/uikit.routes') },
        { path: 'documentation', component: Documentation },
        { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') },

        { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') },
        { path: 'createfacture', component: CreateFactureComponent }
        */
    ]
  },
  // { path: 'shoplist', component: ShoplistComponent , data: { title: 'Shop liste' } },
  //
  // { path: 'notfound', component: Notfound },
  // { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
  { path: '**', redirectTo: '/notfound' }
];
