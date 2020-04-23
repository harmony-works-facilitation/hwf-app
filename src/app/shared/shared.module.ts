import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { WINDOW_PROVIDERS } from './providers/window.provider';
import { LorumPicsumService } from './services/lorum-picsum.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, NgbModule],
  exports: [CommonModule, NgbModule],
  providers: [WINDOW_PROVIDERS, LorumPicsumService],
})
export class SharedModule {}
