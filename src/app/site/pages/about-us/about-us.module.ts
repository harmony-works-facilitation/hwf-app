import { NgModule } from '@angular/core';
import { SharedModule } from '@hwfShared/shared.module';
import { KenticoModule } from '@hwfKentico/kentico.module';
import { AboutUsComponent } from './about-us.component';
import { AboutUsRoutingModule } from './about-us-routing.module';

@NgModule({
  declarations: [AboutUsComponent],
  imports: [SharedModule, AboutUsRoutingModule, KenticoModule],
})
export class AboutUsModule {}
