import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, throwError, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { KenticoKontentDeliveryService } from '@hwfKentico/services/kentico-kontent-delivery.service';
import { ItemResponses } from '@kentico/kontent-delivery';
import { Updates } from '@hwfKentico/models/updates';

@Injectable()
export class UpdatesResolver implements Resolve<Updates> {
  constructor(private kenticoKontentDeliveryService: KenticoKontentDeliveryService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<Updates> | Promise<Updates> | Updates {
    return this.kenticoKontentDeliveryService.getUpdates().pipe(
      switchMap((content: ItemResponses.ViewContentItemResponse<Updates>) => {
        if (content.getIsEmpty()) {
          return throwError('updates content is empty');
        }
        return of(content.item);
      }),
    );
  }
}
