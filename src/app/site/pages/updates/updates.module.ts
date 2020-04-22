import { NgModule } from '@angular/core';
import { SharedModule } from '@hwfShared/shared.module';
import { UpdatesComponent } from './updates.component';
import { UpdatesRoutingModule } from './updates-routing.module';

@NgModule({
  declarations: [UpdatesComponent],
  imports: [SharedModule, UpdatesRoutingModule],
  providers: [],
})
export class UpdatesModule {}
