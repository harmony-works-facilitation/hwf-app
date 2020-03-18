import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WINDOW_PROVIDERS } from './providers/window.provider';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatListModule, MatButtonModule, MatIconModule, MatToolbarModule, MatSidenavModule],
  exports: [CommonModule, MatListModule, MatButtonModule, MatIconModule, MatToolbarModule, MatSidenavModule],
  providers: [WINDOW_PROVIDERS],
})
export class SharedModule {}
