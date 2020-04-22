import { NgModule } from '@angular/core';
import { GalleryComponent } from '@hwfSitePages/gallery/gallery.component';
import { SharedModule } from '@hwfShared/shared.module';
import { KenticoModule } from '@hwfKentico/kentico.module';
import { GalleryRoutingModule } from './gallery-routing.module';

@NgModule({
  declarations: [GalleryComponent],
  imports: [SharedModule, GalleryRoutingModule, KenticoModule],
})
export class GalleryModule {}
