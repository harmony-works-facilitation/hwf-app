import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UpdatesComponent } from './updates.component';
import { UpdatesResolver } from '@hwfKentico/resolvers/updates.resolver';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: UpdatesComponent,
        resolve: {
          content: UpdatesResolver,
        }
      },
    ])
  ],
})
export class UpdatesRoutingModule {}
