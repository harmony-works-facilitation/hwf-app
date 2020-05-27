import { Component, OnInit } from '@angular/core';
import { Gallery } from '@hwfKentico/models/gallery';
import { ActivatedRoute } from '@angular/router';
import { LorumPicsumService } from '@hwfShared/services/lorum-picsum.service';

@Component({
  selector: 'hwf-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  private content?: Gallery;

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

    this.pageName = this.content?.pageName.value ?? 'Gallery';

    this.bannerSlogan = this.content?.bannerSlogan.value;

    this.bannerImageUrl = this.content?.bannerImage.value[0]?.url ?? this.lorumPicsumService.getRandomImage();
  }

}
