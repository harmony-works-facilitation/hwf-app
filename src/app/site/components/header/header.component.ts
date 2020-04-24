import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Event as RouterEvent, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'hwf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private routerSubscription: Subscription;

  public currentActiveNav: string = '';

  public isCollapsed: boolean = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.routerSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: RouterEvent) => {
  
      if ( event instanceof NavigationEnd) {
        switch(event.url) {
          case '/site/(pages:home)':
            this.currentActiveNav = 'home';
            break;
          case '/site/(pages:about_us)':
            this.currentActiveNav = 'about_us';
            break;
          case '/site/(pages:community_connections)':
            this.currentActiveNav = 'community_connections';
            break;
          case '/site/(pages:facilitation_resources)':
            this.currentActiveNav = 'facilitation_resources';
            break;
          case '/site/(pages:gallery)':
            this.currentActiveNav = 'gallery';
            break;
          case '/site/(pages:updates)':
            this.currentActiveNav = 'updates';
            break;
          default:
            break;
        }
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

  public navigate(e: Event, page: string): void {
    e.preventDefault();
    this.router.navigateByUrl(`/site/(pages:${page})`);
    this.isCollapsed = !this.isCollapsed;
  }
}
