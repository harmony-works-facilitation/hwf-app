import { Component, OnInit } from '@angular/core';
import { AboutUs } from '@hwfKentico/models/about_us';
import { ActivatedRoute } from '@angular/router';
import { LorumPicsumService } from '@hwfShared/services/lorum-picsum.service';

@Component({
  selector: 'hwf-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  private content?: AboutUs;

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

    this.pageName = this.content?.pageName.value ?? 'About Us';

    this.bannerSlogan = this.content?.bannerSlogan.value;

    this.bannerImageUrl = this.content?.bannerImage.value[0]?.url ?? this.lorumPicsumService.getRandomImage();
  }
}
