import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { WINDOW_PROVIDERS } from './providers/window.provider';

@NgModule({
  declarations: [],
  imports: [CommonModule, NgbModule],
  exports: [CommonModule, NgbModule],
  providers: [WINDOW_PROVIDERS],
})
export class SharedModule {}
