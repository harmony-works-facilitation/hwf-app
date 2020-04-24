import { Component, OnInit } from '@angular/core';
import { CommunityConnections } from '@hwfKentico/models/community_connections';
import { ActivatedRoute } from '@angular/router';
import { LorumPicsumService } from '@hwfShared/services/lorum-picsum.service';

@Component({
  selector: 'hwf-community-connections',
  templateUrl: './community-connections.component.html',
  styleUrls: ['./community-connections.component.scss']
})
export class CommunityConnectionsComponent implements OnInit {

  private content?: CommunityConnections;

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

    this.pageName = this.content?.pageName.value ?? 'Community Connections';

    this.bannerSlogan = this.content?.bannerSlogan.value;

    this.bannerImageUrl = this.content?.bannerImage.value[0]?.url ?? this.lorumPicsumService.getRandomImage();
  }

}
