import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ESharedModule } from 'src/app/e-shared/e-shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { EDefaultComponent } from './e-default.component';
import { SellByCategoryComponent } from 'src/app/e-modules/sell-by-category/sell-by-category.component';
import { PickupComponent } from 'src/app/e-modules/pickup/pickup.component';



@NgModule({
  declarations: [
    EDefaultComponent,
    SellByCategoryComponent,
    PickupComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    ESharedModule,
    MatSidenavModule,
  ]
})
export class EDefaultModule { }
