import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UpdatesComponent } from './updates.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: UpdatesComponent,
      },
    ])
  ],
})
export class UpdatesRoutingModule {}
