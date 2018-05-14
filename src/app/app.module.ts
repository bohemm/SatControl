import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OnLinePage } from '../pages/on-line/on-line';
import { IniciarSesionPage } from '../pages/iniciar-sesion/iniciar-sesion';
//import firebase from 'firebase';
import { AutenticacionService } from '../servicios/autenticacion.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OnLinePage,
    IniciarSesionPage
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
    OnLinePage,
    IniciarSesionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AutenticacionService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
