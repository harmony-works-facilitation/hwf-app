import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Home } from '@hwfKentico/models/home';
import { LorumPicsumService } from '@hwfShared/services/lorum-picsum.service';

@Component({
  selector: 'hwf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private content?: Home;

  public pageName?: string;

  public bannerSlogan?: string;

  public bannerImageUrl?: string;

  constructor(
    private route: ActivatedRoute,
    private lorumPicsumService: LorumPicsumService,
  ) {

  }

  ngOnInit(): void {
    this.content = this.route.snapshot.data.content;

    this.pageName = this.content?.pageName.value ?? 'Home';

    this.bannerSlogan = this.content?.bannerSlogan.value;

    this.bannerImageUrl = this.content?.banner.value[0]?.url ?? this.lorumPicsumService.getRandomImage();
  }

  ngOnDestroy(): void {
    this.content = undefined;
  }
}
