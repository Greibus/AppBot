import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {}

  alerta(){
    let confirm = this.alertCtrl.create({
      title: 'Esta seguro que desea confirmar?',
      message: 'Si no esta seguro, puede volver a crear el camino',
      buttons: [
        {
          text: 'Recharzar',
          handler: () => {
            console.log('Por favor vuelva a hacer su camino');
          }
        },
        {
          text: 'Confirmar',
          handler: () => {
            console.log('Confirmar');
          }
        }
      ]
    });
    confirm.present();
  }

  game(num){
    if( num == 1){

    } else if (num == 2){

    }else if (num == 3){

    }else if (num == 4){

    }else if (num == 5){
      
    }
  }
}