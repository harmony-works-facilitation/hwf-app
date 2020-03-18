import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ContentType } from '@kentico/kontent-delivery';
import { KenticoKontentDeliveryService } from '@hwfKentico/services/kentico-kontent-delivery.service';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class ContentTypesResolver implements Resolve<Array<ContentType>> {
  constructor(private kenticoKontentDeliveryService: KenticoKontentDeliveryService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<Array<ContentType>> | Promise<Array<ContentType>> | Array<ContentType> {
    return this.kenticoKontentDeliveryService.getTypes().pipe(
      switchMap(response => {
        return of(response.types);
      }),
    );
  }
}
