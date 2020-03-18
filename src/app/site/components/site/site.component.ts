import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';
import { ActivatedRoute } from '@angular/router';
import { ContentType, ContentTypeSystemAttributes } from '@kentico/kontent-delivery';
import { Subscription } from 'rxjs';

@Component({
  selector: 'hwf-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss'],
})
export class SiteComponent implements OnInit, OnDestroy {
  public color = 'primary';

  public sidebarOpened = false;

  @ViewChild(MatIcon)
  public navigationIcon: MatIcon;

  @ViewChild(MatSidenav)
  public sidebar: MatSidenav;

  private contentTypesSubscription: Subscription;

  public allContentTypeSystemAttributes: Array<ContentTypeSystemAttributes>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ contentTypes }: { contentTypes: Array<ContentType> }) => {
      this.allContentTypeSystemAttributes = contentTypes.map((contentType: ContentType) => contentType.system);
    });
  }

  ngOnDestroy(): void {
    this.contentTypesSubscription.unsubscribe();
  }

  toggleSidebar(e: MouseEvent): void {
    e.preventDefault();
    this.sidebar.toggle();
  }

  navigate(e: MouseEvent, contentTypeSystemAttributes: ContentTypeSystemAttributes): void {
    console.log(e, contentTypeSystemAttributes);
  }
}
