import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-on-line',
  templateUrl: 'on-line.html',
})
export class OnLinePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToHomePage(){
    this.navCtrl.push(HomePage);
    
  }
}
