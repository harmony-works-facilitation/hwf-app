import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KenticoKontentDeliveryService } from '@hwfKentico/services/kentico-kontent-delivery.service';
import { HomeResolver } from '@hwfKentico/resolvers/home.resolver';
import { ContentTypesResolver } from '@hwfKentico/resolvers/content-types.resolver';
import { AboutUsResolver } from './resolvers/about-us.resolver';
import { CommunityConnectionsResolver } from './resolvers/community-connections.resolver';
import { FacilitationResourcesResolver } from './resolvers/facilitation-resources.resolver';
import { UpdatesResolver } from './resolvers/updates.resolver';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    KenticoKontentDeliveryService,
    ContentTypesResolver,
    HomeResolver,
    AboutUsResolver,
    CommunityConnectionsResolver,
    FacilitationResourcesResolver,
    UpdatesResolver
  ],
  exports: [],
})
export class KenticoModule {}
