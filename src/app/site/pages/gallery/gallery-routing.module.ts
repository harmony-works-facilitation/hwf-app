import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GalleryComponent } from './gallery.component';
import { GalleryResolver } from '@hwfKentico/resolvers/gallery.resolver';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: GalleryComponent,
        resolve: {
          content: GalleryResolver,
        }
      },
    ]),
  ],
  exports: [RouterModule],
})
export class GalleryRoutingModule {}
