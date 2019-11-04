
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';

import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/products.service';

import { Camera } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/File/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';

import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';


@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule, 
        IonicStorageModule.forRoot()
    ],
    providers: [
        StatusBar,
        SplashScreen,
        ProductsService,
        Camera,
        File,
        FilePath,
        ScreenOrientation,
        InAppBrowser,
        WebView,
        Facebook,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
