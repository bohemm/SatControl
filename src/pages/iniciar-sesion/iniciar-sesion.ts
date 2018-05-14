import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';



@IonicPage()
@Component({
  selector: 'page-iniciar-sesion',
  templateUrl: 'iniciar-sesion.html',
})
export class IniciarSesionPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public autenticacionService: AutenticacionService,
              public alertCtrl: AlertController) {
  }

  iniciarSesion(formulario: NgForm){

    this.autenticacionService.login(
              formulario.value.email,
              formulario.value.password)
              .subscribe(info => console.log('Usuario conectado'))
              // .error(error =>{
              //   let alerta = this.alertCtrl.create({
              //     title: 'Ocurrió un error',
              //     message: 'Ocurrió un error iniciando la sesión. ' + error,
              //     buttons: ['ok']
              //   })
              //   alerta.present();
              // })
  }

  // registrarUsuario(formulario: NgForm){
  //   this.autenticacionService.registrarUsuario(
  //               formulario.value.correo,
  //                 formulario.value.clave)
  //                 .then(info => console.log(info))
  //                 .catch(error =>{
  //                   let alerta = this.alertCtrl.create({
  //                     title: 'Ocurrió un error',
  //                     message: 'Ocurrió un error registrando al usuario. ' + error,
  //                     buttons: ['ok']
  //                   })
  //                   alerta.present();
  //                 })
  // }

}
