import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BioHeaderComponent } from './bio-component/bio-header/bio-header.component';
import { BioFooterComponent } from './bio-component/bio-footer/bio-footer.component';
import { BioSidebarComponent } from './bio-component/bio-sidebar/bio-sidebar.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    BioHeaderComponent,
    BioFooterComponent,
    BioSidebarComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule
  ],
  exports:[
    BioHeaderComponent,
    BioFooterComponent,
    BioSidebarComponent
  ]
})
export class BioSharedModule { }
