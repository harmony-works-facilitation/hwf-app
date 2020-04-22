import { NgModule } from '@angular/core';
import { SharedModule } from '@hwfShared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, HomeRoutingModule],
  providers: [],
})
export class HomeModule {}
