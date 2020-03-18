import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, throwError, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { KenticoKontentDeliveryService } from '@hwfKentico/services/kentico-kontent-delivery.service';
import { Home } from '@hwfKentico/models/home';
import { ItemResponses } from '@kentico/kontent-delivery';

@Injectable()
export class HomeResolver implements Resolve<Home> {
  constructor(private kenticoKontentDeliveryService: KenticoKontentDeliveryService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<Home> | Promise<Home> | Home {
    return this.kenticoKontentDeliveryService.getHome().pipe(
      switchMap((content: ItemResponses.ViewContentItemResponse<Home>) => {
        if (content.getIsEmpty()) {
          return throwError('home content is empty');
        }
        return of(content.item);
      }),
    );
  }
}
