import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { HttpInterceptorService } from './login/http-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BioDefaultModule } from './bio-layouts/bio-default/bio-default.module';
import { RequestComponent } from './modules/request/request.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
 import { SharedModule } from 'src/app/shared/shared.module';
import { DefaultModule } from './layouts/default/default.module';
import { WalletComponent } from './modules/wallet/wallet.component';
import {ReactiveFormsModule} from '@angular/forms';
import { BioNumberValidationDirective } from './bio-number-validation.directive';
import { EDefaultModule } from './e-layouts/e-default/e-default.module';
import { ViewdetailsComponent } from './modules/viewdetails/viewdetails.component';
import { ViewrequestComponent } from './modules/viewrequest/viewrequest.component';
import { Raiserequest } from './raiserequest';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    CustomerDashboardComponent,
  
    WalletComponent,
    BioNumberValidationDirective,
    ViewdetailsComponent,
    ViewrequestComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BioDefaultModule,
    BrowserAnimationsModule,
    DefaultModule,
    ReactiveFormsModule,
    EDefaultModule,
    DefaultModule
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
