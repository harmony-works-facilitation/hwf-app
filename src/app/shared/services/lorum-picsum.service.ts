import { Injectable } from '@angular/core';
import qs from 'qs';

@Injectable({
  providedIn: 'root',
})
export class LorumPicsumService {
  static LORUM_PICSUM_BASE_URL = `https://picsum.photos`;

  constructor() {}

  public getRandomImage(
      blur: boolean = false,
      grayscale: boolean = false,
      width: number = 2560,
      height: number = 320,
    ): string {
    const queryParameters = qs.stringify({
      ...(blur && { blur }),
      ...(grayscale && { blur }),
    }, {
        addQueryPrefix: true
    });

    return `${LorumPicsumService.LORUM_PICSUM_BASE_URL}/${width}/${height}${queryParameters}`;
  }
}
