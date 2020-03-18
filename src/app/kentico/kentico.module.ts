import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KenticoKontentDeliveryService } from '@hwfKentico/services/kentico-kontent-delivery.service';
import { HomeResolver } from '@hwfKentico/resolvers/home.resolver';
import { ContentTypesResolver } from '@hwfKentico/resolvers/content-types.resolver';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [KenticoKontentDeliveryService, ContentTypesResolver, HomeResolver],
  exports: [],
})
export class KenticoModule {}
