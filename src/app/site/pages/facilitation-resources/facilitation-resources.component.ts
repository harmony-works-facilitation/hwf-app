import { Component, OnInit } from '@angular/core';
import { FacilitationResources } from '@hwfKentico/models/facilitation_resources';
import { ActivatedRoute } from '@angular/router';
import { LorumPicsumService } from '@hwfShared/services/lorum-picsum.service';

@Component({
  selector: 'hwf-facilitation-resources',
  templateUrl: './facilitation-resources.component.html',
  styleUrls: ['./facilitation-resources.component.scss']
})
export class FacilitationResourcesComponent implements OnInit {

  private content?: FacilitationResources;

  public pageName?: string;

  public bannerSlogan?: string;

  public bannerImageUrl?: string;

  public pageContent?: string;

  constructor(
    private route: ActivatedRoute,
    private lorumPicsumService: LorumPicsumService,
  ) {

  }

  ngOnInit(): void {
    this.content = this.route.snapshot.data.content;

    this.pageName = this.content?.pageName.value ?? 'Facilitation Resources';

    this.bannerSlogan = this.content?.bannerSlogan.value;

    this.bannerImageUrl = this.content?.bannerImage.value[0]?.url ?? this.lorumPicsumService.getRandomImage();
  }

}
