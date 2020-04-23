import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TypeResolver, DeliveryClient, ItemResponses, TypeResponses } from '@kentico/kontent-delivery';
import { Home } from '../models/home';
import { Observable } from 'rxjs';
import { AboutUs } from '../models/about_us';
import { CommunityConnections } from '../models/community_connections';
import { FacilitationResources } from '../models/facilitation_resources';
import { Gallery } from '../models/gallery';
import { Updates } from '../models/updates';

@Injectable({
  providedIn: 'root',
})
export class KenticoKontentDeliveryService {
  private deliveryClient: DeliveryClient;

  constructor() {
    this.deliveryClient = new DeliveryClient({
      projectId: environment.kenticoKontentProjectId,
      typeResolvers: [
        new TypeResolver('home', (rawData) => new Home),
        new TypeResolver('about_us', (rawData) => new AboutUs),
        new TypeResolver('community_connections', (rawData) => new CommunityConnections),
        new TypeResolver('facilitation_resources', (rawData) => new FacilitationResources),
        new TypeResolver('gallery', (rawData) => new Gallery),
        new TypeResolver('updates', (rawData) => new Updates),
      ], // To be extended when models become available
    });
  }

  public getTypes(): Observable<TypeResponses.ListContentTypesResponse> {
    return this.deliveryClient.types().toObservable();
  }

  public getHome(): Observable<ItemResponses.ViewContentItemResponse<Home>> {
    return this.deliveryClient.item<Home>('home').toObservable();
  }

  public getAboutUs() {
    return this.deliveryClient.item<AboutUs>('about_us').toObservable();
  }

  public getCommunityConnections() {
    return this.deliveryClient.item<CommunityConnections>('community_connections').toObservable();
  }

  public getFacilitationResources() {
    return this.deliveryClient.item<FacilitationResources>('facilitation_resources').toObservable();
  }

  public getGallery() {
    return this.deliveryClient.item<Gallery>('gallery').toObservable();
  }

  public getUpdates() {
    return this.deliveryClient.item<Updates>('updates').toObservable();
  }
}
