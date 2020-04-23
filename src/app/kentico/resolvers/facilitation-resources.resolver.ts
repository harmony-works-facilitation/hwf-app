import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, throwError, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { KenticoKontentDeliveryService } from '@hwfKentico/services/kentico-kontent-delivery.service';
import { ItemResponses } from '@kentico/kontent-delivery';
import { FacilitationResources } from '@hwfKentico/models/facilitation_resources';

@Injectable()
export class FacilitationResourcesResolver implements Resolve<FacilitationResources> {
  constructor(private kenticoKontentDeliveryService: KenticoKontentDeliveryService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<FacilitationResources> | Promise<FacilitationResources> | FacilitationResources {
    return this.kenticoKontentDeliveryService.getFacilitationResources().pipe(
      switchMap((content: ItemResponses.ViewContentItemResponse<FacilitationResources>) => {
        if (content.getIsEmpty()) {
          return throwError('facilitation resources content is empty');
        }
        return of(content.item);
      }),
    );
  }
}
