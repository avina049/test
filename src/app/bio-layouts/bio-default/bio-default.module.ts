import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BioDefaultComponent } from 'src/app/bio-layouts/bio-default/bio-default.component';
import { BioAddComponent } from 'src/app/bio-modules/bio-add/bio-add.component';
import { BioViewComponent } from 'src/app/bio-modules/bio-view/bio-view.component';
import { RouterModule } from '@angular/router';
import { BioSharedModule } from 'src/app/bio-shared/bio-shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BioTransportComponent } from 'src/app/bio-modules/bio-transport/bio-transport.component';
import { BioPopupComponent } from 'src/app/bio-modules/bio-popup/bio-popup.component';
import { BioShowComponent } from 'src/app/bio-modules/bio-show/bio-show.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BioDefaultComponent,
    BioAddComponent,
    BioViewComponent,
    BioTransportComponent,
    BioPopupComponent,
    BioShowComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BioSharedModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BioDefaultModule { }
