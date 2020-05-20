import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { BioAddComponent } from './bio-modules/bio-add/bio-add.component';
import { BioDefaultComponent } from './bio-layouts/bio-default/bio-default.component';
import { BioViewComponent } from './bio-modules/bio-view/bio-view.component';
import { BioShowComponent } from './bio-modules/bio-show/bio-show.component';
import { DefaultComponent } from './layouts/default/default.component';
import { RequestComponent } from './modules/request/request.component';
import { PostsComponent } from './modules/posts/posts.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ViewdetailsComponent } from './modules/viewdetails/viewdetails.component';
import { ViewrequestComponent } from './modules/viewrequest/viewrequest.component';


// const routes: Routes = [
  
//   { path: 'bio-view', component: BioViewComponent },
//   // { path: '', redirectTo: 'customer-dashboard', pathMatch: 'full' },
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
//   {path: 'logout', component: LogoutComponent},
//   {path: 'customer-dashboard', component: CustomerDashboardComponent},
//   { path: 'bio-show', component: BioShowComponent },
//   {path: 'Bio-Dash', component: BioDefaultComponent,
//   children: [{
//     path: 'bio-add', component: BioAddComponent
//   },]
// },
// ];

// const routes: Routes = [
//   { path: '', component: CustomerDashboardComponent },

//   {
//  path: 'Bio-Dash', component: BioDefaultComponent,
//   children: [
//   { path: 'bio-add', component: BioAddComponent },
//   { path: 'bio-view', component: BioViewComponent },
//   { path: 'bio-show', component: BioShowComponent }
//   ],

//   }];
//   {path:'Plastic-Dash', component:DefaultComponent,
//   children:[
//     { path: 'plastic-dashboard', component: DashboardComponent},
//     { path:'posts', component: PostsComponent },
//     { path:'request', component: RequestComponent},
//   ],
//  }

// const routes: Routes = [{
//   path: '', component: BioDefaultComponent,
//   children: [{
//     path: '', component: BioAddComponent
//   },
//   { path: 'bio-view', component: BioViewComponent },
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
//   {path: 'logout', component: LogoutComponent},
//   // {path: 'customer-dashboard', component: CustomerDashboardComponent},
//   { path: 'bio-show', component: BioShowComponent }]
// },
// {
//   path:'Plastic-Dash', component:DefaultComponent,
//   children:[
//     { path: '', component: DashboardComponent},
//     { path:'posts', component: PostsComponent },
//     { path:'request', component: RequestComponent},

  
//   ],

// }];

  
import { WalletComponent } from './modules/wallet/wallet.component';
import { BioPopupComponent } from './bio-modules/bio-popup/bio-popup.component';
import { BioTransportComponent } from './bio-modules/bio-transport/bio-transport.component';
import { EDefaultModule } from './e-layouts/e-default/e-default.module';
import { EDefaultComponent } from './e-layouts/e-default/e-default.component';
import { SellByCategoryComponent } from './e-modules/sell-by-category/sell-by-category.component';
import { PickupComponent } from './e-modules/pickup/pickup.component';


const routes: Routes = [
  
  
  // { path: '', redirectTo: 'customer-dashboard', pathMatch: 'full' },
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'logout', component: LogoutComponent},
  {path: 'customer-dashboard', component: CustomerDashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'bio-dash', component: BioDefaultComponent},
  {path: '', component: CustomerDashboardComponent},
  
  {path: 'bio-dash', component: BioDefaultComponent, 
  children: [{ path: 'bio-add', component: BioAddComponent }, 
  { path: 'bio-view', component: BioViewComponent },
  { path: 'bio-show', component: BioShowComponent }, {path:'bio-popup',component:BioPopupComponent},
  {path:'bio-add',component:BioAddComponent},
  {path:'bio-transport',component:BioTransportComponent},
  {path: "",component: DashboardComponent},


{path: 'posts',component: PostsComponent}, 
{path: 'request',component: RequestComponent}]
},
  {path: 'Plastic-Dash', component: DefaultComponent,
  children: [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'request', component: RequestComponent},
  {path: 'pickUp', component: PostsComponent},
  {path: 'wallet', component: WalletComponent},
{path: 'wallet', component: WalletComponent},
{path: 'viewDetails', component: ViewdetailsComponent},
{path: 'viewRequest', component: ViewrequestComponent}
],
  },


{path: 'Electronic-Dash', component:EDefaultComponent,
children: [{ path: 'SellByCategory', component:SellByCategoryComponent },
{path:'pickup', component:PickupComponent
}]
}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
