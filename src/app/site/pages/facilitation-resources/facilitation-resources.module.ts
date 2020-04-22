import { NgModule } from '@angular/core';
import { SharedModule } from '@hwfShared/shared.module';
import { KenticoModule } from '@hwfKentico/kentico.module';
import { FacilitationResourcesComponent } from './facilitation-resources.component';
import { FacilitationResourcesRoutingModule } from './facilitation-resources-routing.module';

@NgModule({
  declarations: [FacilitationResourcesComponent],
  imports: [SharedModule, FacilitationResourcesRoutingModule, KenticoModule],
})
export class FacilitationResourcesModule {}
