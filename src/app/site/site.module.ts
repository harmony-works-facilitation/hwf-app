import { NgModule } from '@angular/core';
import { HomeComponent } from '@hwfSiteComponents/home/home.component';
import { AboutUsComponent } from '@hwfSiteComponents/about-us/about-us.component';
import { CommunityConnectionsComponent } from '@hwfSiteComponents/community-connections/community-connections.component';
import { FacilitationResourcesComponent } from '@hwfSiteComponents/facilitation-resources/facilitation-resources.component';
import { GalleryComponent } from '@hwfSiteComponents/gallery/gallery.component';
import { UpdatesComponent } from '@hwfSiteComponents/updates/updates.component';
import { SiteComponent } from '@hwfSiteComponents/site/site.component';
import { SiteRoutingModule } from '@hwfSite/site-routing.module';
import { SharedModule } from '@hwfShared/shared.module';
import { KenticoModule } from '@hwfKentico/kentico.module';

@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    CommunityConnectionsComponent,
    FacilitationResourcesComponent,
    GalleryComponent,
    UpdatesComponent,
    SiteComponent,
  ],
  imports: [SharedModule, KenticoModule, SiteRoutingModule],
})
export class SiteModule {}
