import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AnotacionesPage } from '../pages/anotaciones/anotaciones';
import { CrearanotacionPage } from '../pages/crearanotacion/crearanotacion';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CrearanotacionPageModule } from '../pages/crearanotacion/crearanotacion.module';
import { CrearanotacionProvider } from '../providers/crearanotacion/crearanotacion';
import { Anotaciones } from '../models/Anotaciones';
import { HttpClientModule } from '@angular/common/http';
import { ConsultaranotacionProvider } from '../providers/consultaranotacion/consultaranotacion';
import { ResultadosanotacionPage } from '../pages/resultadosanotacion/resultadosanotacion';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AnotacionesPage,
    ResultadosanotacionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CrearanotacionPageModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AnotacionesPage,
    CrearanotacionPage,
    ResultadosanotacionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Anotaciones,
    HttpClientModule,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CrearanotacionProvider,
    ConsultaranotacionProvider
  ]
})
export class AppModule { }
