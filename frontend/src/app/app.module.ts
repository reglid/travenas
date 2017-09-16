import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {StartComponent} from './start/start.component';
import {AppRoutingModule} from "./app-routing.module";
import {AuthService} from "./common/services/auth/auth.service";
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {CheckinComponent} from './checkin/checkin.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {TravelComponent} from './travel/travel.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ChatService} from "./common/services/chat/chat.service";
import { PlanComponent } from './plan/plan.component';
import {ConnectionsService} from "./plan/connections/connections.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    LoginComponent,
    LogoutComponent,
    StartComponent,
    CheckinComponent,
    CheckoutComponent,
    TravelComponent,
    PlanComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    ChatService,
    ConnectionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
