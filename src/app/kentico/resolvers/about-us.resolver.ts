import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, throwError, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { KenticoKontentDeliveryService } from '@hwfKentico/services/kentico-kontent-delivery.service';
import { ItemResponses } from '@kentico/kontent-delivery';
import { AboutUs } from '@hwfKentico/models/about_us';

@Injectable()
export class AboutUsResolver implements Resolve<AboutUs> {
  constructor(private kenticoKontentDeliveryService: KenticoKontentDeliveryService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<AboutUs> | Promise<AboutUs> | AboutUs {
    return this.kenticoKontentDeliveryService.getAboutUs().pipe(
      switchMap((content: ItemResponses.ViewContentItemResponse<AboutUs>) => {
        if (content.getIsEmpty()) {
          return throwError('about us content is empty');
        }
        return of(content.item);
      }),
    );
  }
}
