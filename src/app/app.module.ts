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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AnotacionesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CrearanotacionPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AnotacionesPage,
    CrearanotacionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CrearanotacionProvider
  ]
})
export class AppModule { }
