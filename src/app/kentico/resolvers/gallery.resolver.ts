import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, throwError, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { KenticoKontentDeliveryService } from '@hwfKentico/services/kentico-kontent-delivery.service';
import { ItemResponses } from '@kentico/kontent-delivery';
import { Gallery } from '@hwfKentico/models/gallery';

@Injectable()
export class GalleryResolver implements Resolve<Gallery> {
  constructor(private kenticoKontentDeliveryService: KenticoKontentDeliveryService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<Gallery> | Promise<Gallery> | Gallery {
    return this.kenticoKontentDeliveryService.getGallery().pipe(
      switchMap((content: ItemResponses.ViewContentItemResponse<Gallery>) => {
        if (content.getIsEmpty()) {
          return throwError('gallery content is empty');
        }
        return of(content.item);
      }),
    );
  }
}
