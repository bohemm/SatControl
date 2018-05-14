import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OnLinePage } from '../on-line/on-line';
//import { IniciarSesionPage } from '../iniciar-sesion/iniciar-sesion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToPage(){
    this.navCtrl.push(OnLinePage);
  }
}
