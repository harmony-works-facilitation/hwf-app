import { NgModule } from '@angular/core';
import { SharedModule } from '@hwfShared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { KenticoModule } from '@hwfKentico/kentico.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, KenticoModule, HomeRoutingModule],
  providers: [],
})
export class HomeModule {}
