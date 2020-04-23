import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeResolver } from '@hwfKentico/resolvers/home.resolver';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        resolve: {
          content: HomeResolver
        }
      },
    ])
  ],
})
export class HomeRoutingModule {}
