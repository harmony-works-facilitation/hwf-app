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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {

    // console.log('route', this.route);
    // console.log('router', this.router);

    this.routerSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: RouterEvent) => {
  
      if ( event instanceof NavigationEnd) {
        switch(event.url) {
          case '/site/(pages:home)':
            this.currentActiveNav = 'home';
            break;
          case '/site/(pages:community-connections)':
            this.currentActiveNav = 'community-connections';
            break;
          case '/site/(pages:facilitation-resources)':
            this.currentActiveNav = 'facilitation-resources';
            break;
          case '/site/(pages:gallery)':
            this.currentActiveNav = 'gallery';
            break;
          case '/site/(pages:updates)':
            this.currentActiveNav = 'updates';
            break;
          case '/site/(pages:about-us)':
            this.currentActiveNav = 'about-us';
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
  }
}
