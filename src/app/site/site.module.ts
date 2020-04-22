import { NgModule } from '@angular/core';
import { SiteComponent } from '@hwfSite/site.component';
import { SiteRoutingModule } from '@hwfSite/site-routing.module';
import { SharedModule } from '@hwfShared/shared.module';
import { KenticoModule } from '@hwfKentico/kentico.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    SiteComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule,
    SharedModule,
    SiteRoutingModule,
    KenticoModule,
  ],
})
export class SiteModule {}
