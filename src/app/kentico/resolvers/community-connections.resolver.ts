import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, throwError, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { KenticoKontentDeliveryService } from '@hwfKentico/services/kentico-kontent-delivery.service';
import { ItemResponses } from '@kentico/kontent-delivery';
import { CommunityConnections } from '@hwfKentico/models/community_connections';

@Injectable()
export class CommunityConnectionsResolver implements Resolve<CommunityConnections> {
  constructor(private kenticoKontentDeliveryService: KenticoKontentDeliveryService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<CommunityConnections> | Promise<CommunityConnections> | CommunityConnections {
    return this.kenticoKontentDeliveryService.getCommunityConnections().pipe(
      switchMap((content: ItemResponses.ViewContentItemResponse<CommunityConnections>) => {
        if (content.getIsEmpty()) {
          return throwError('community connections content is empty');
        }
        return of(content.item);
      }),
    );
  }
}
