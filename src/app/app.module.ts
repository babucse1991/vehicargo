import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMaps } from '@ionic-native/google-maps';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OrdersPage } from '../pages/orders/orders';
import { TabsPage } from '../pages/tabs/tabs';
import { OrderDetailsPage } from '../pages/order-details/order-details';
import { WelcomePage } from '../pages/welcome/welcome';
import { TruckLoginPage } from '../pages/truck-login/truck-login';
import { CustomerLoginPage } from '../pages/customer-login/customer-login';
import { QuickProfilePage } from '../pages/quick-profile/quick-profile';
import { MenusPage } from '../pages/menus/menus';
import { ProfilePage } from '../pages/profile/profile';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { TruckFilterPage } from '../pages/truck-filter/truck-filter';
import { MyJobPage } from '../pages/my-job/my-job';
import { TruckInfoPage } from '../pages/truck-info/truck-info';
import { EditTruckInfoPage } from '../pages/edit-truck-info/edit-truck-info';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OrdersPage,
    TabsPage,
    OrderDetailsPage,
    WelcomePage,
    TruckLoginPage,
    CustomerLoginPage,
    QuickProfilePage,
    MenusPage,
    ProfilePage,
    EditProfilePage,
    TruckFilterPage,
    MyJobPage,
    TruckInfoPage,
    EditTruckInfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OrdersPage,
    TabsPage,
    OrderDetailsPage,
    WelcomePage,
    TruckLoginPage,
    CustomerLoginPage,
    QuickProfilePage,
    MenusPage,
    ProfilePage,
    EditProfilePage,
    TruckFilterPage,
    MyJobPage,
    TruckInfoPage,
    EditTruckInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}