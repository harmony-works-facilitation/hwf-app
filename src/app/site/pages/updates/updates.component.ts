import { Component, OnInit } from '@angular/core';
import { Updates } from '@hwfKentico/models/updates';
import { ActivatedRoute } from '@angular/router';
import { LorumPicsumService } from '@hwfShared/services/lorum-picsum.service';

@Component({
  selector: 'hwf-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.scss']
})
export class UpdatesComponent implements OnInit {

  private content?: Updates;

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

    this.pageName = this.content?.pageName.value ?? 'Updates';

    this.bannerSlogan = this.content?.bannerSlogan.value;

    this.bannerImageUrl = this.content?.banner.value[0]?.url ?? this.lorumPicsumService.getRandomImage();
  }

  ngOnDestroy(): void {
    this.content = undefined;
  }
}
