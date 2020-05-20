import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EHeaderComponent } from './e-component/e-header/e-header.component';
import { EFooterComponent } from './e-component/e-footer/e-footer.component';
import { ESidebarComponent } from './e-component/e-sidebar/e-sidebar.component';
import { MatDividerModule} from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    EHeaderComponent,
    EFooterComponent,
    ESidebarComponent,

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
  exports: [
    EHeaderComponent,
    EFooterComponent,
    ESidebarComponent

  ]
})
export class ESharedModule { }
