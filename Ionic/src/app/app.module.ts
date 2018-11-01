import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {UserService} from "../services/user.service";
import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";
import { HttpClient, HttpClientModule} from "@angular/common/http";
import { BillDetailsModal } from "../modals/billDetailsModal/billDetailsModal";
import {UserListModal} from "../modals/userListModal/userListModal";
import {TransactionService} from "../services/transaction.service";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    BillDetailsModal,
    UserListModal
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    BillDetailsModal,
    UserListModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService,
    HttpClient,
    TransactionService
  ]
})
export class AppModule {}
