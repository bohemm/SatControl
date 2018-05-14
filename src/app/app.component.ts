import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { OnLinePage } from '../pages/on-line/on-line';
import { IniciarSesionPage } from '../pages/iniciar-sesion/iniciar-sesion';
import firebase from 'firebase';
import { AutenticacionService } from '../servicios/autenticacion.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  homePage = HomePage;
  onLinePage = OnLinePage;
  iniciarSesionPage = IniciarSesionPage;
  @ViewChild('contenido') contenido:NavController;
  usuarioEstaConectado=false;

  constructor(platform: Platform,
              public menuCtrl: MenuController, 
              statusBar: StatusBar,
              public autenticacionService: AutenticacionService,
              splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    firebase.initializeApp({
      apiKey: "AIzaSyDxa-_muIwgBx8DkcYDMIA9fAEIpA8xYm8",
      authDomain: "restaurantes-a7e5d.firebaseapp.com"
    });

    firebase.auth().onAuthStateChanged(
      usuario => {
        if(usuario != null){
          this.usuarioEstaConectado = true;
          this.contenido.setRoot(this.homePage);
        }else{
          this.usuarioEstaConectado = false;
          this.contenido.setRoot(this.iniciarSesionPage);
        }

      }


    )

  }

  llamarPagina(pagina){
    this.contenido.setRoot(pagina);
    this.menuCtrl.close();
  }

  terminarSesion(){
    this.autenticacionService.terminarSesion();
    this.menuCtrl.close();

  }
}

