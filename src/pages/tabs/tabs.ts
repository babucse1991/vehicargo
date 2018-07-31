import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenusPage } from '../menus/menus';
import { HomePage } from '../home/home';
import { OrdersPage } from '../orders/orders';
// import { WelcomePage } from '../welcome/welcome';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = OrdersPage;
  tab3Root: any = MenusPage;


  ngOnInit() {

    // this.tab1Root = WelcomePage;    
    

  }

  constructor(public navCtrl: NavController) {
  }
  
  
}
