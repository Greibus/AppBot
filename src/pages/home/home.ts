import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // Si variable es 1 va para el main
  // Si variable es 2 va para el proc1
  // Si variable es 3 va para el proc2
  variable;

  //Lista la cual se va a enviar, 
  listamain: Array<any> = []

  //Lista para el proc1
  listaproc1: Array<any> = []

  //Lista para el proc2
  listaproc2: Array<any> = []
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {}

  // ESTA FUNCION ES CUANDO YA ESTA LAS LISTAS LLENAS Y VA A JUGAR,
  // PARA MANDAR INFORMACIOn
  enviar(){
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
            //LOGICA PARA ENVIAR, FALTA
            console.log('Confirmar');
          }
        }
      ]
    });
    confirm.present();
  }

  // ELIMINA LAS INSTRUCCIONES DE LAS LISTAS
  eliminar(){
    while (this.listamain == null){
      this.listamain.pop();
    }
    while (this.listaproc1 == null){
      this.listaproc1.pop();
    }
    while (this.listaproc2 == null){
      this.listaproc2.pop();
    }
  }
  
  //DEPENDIENDO DE QUE BOTON TOQUE, SI EL DE MAIN O PROC1 O PROC2
  // A VARIABLE(GLOBAL) SE LE ASIGNA UN VALOR PARA SABER EN QUE LISTA METERLO
  controlvariable(num){
    if (num == 1){
      this.variable = 1;
    } else if (num == 2) {
      this.variable = 2;
    } else if (num == 3){
      this.variable = 3;
    }
  }
  // AQUI VA AGREGANDO A LAS LISTAS DEPENDIENDO DE VARIABLE PARA ELIGIR LA LISTA
  // Y DE NUM PARA ELEGIR EL COMANDO, Ejem: F = Forward 
  game(num){
    if (this.variable == 1){
      switch(num){
        case 1:
        this.listamain.push("F");

        case 2:
        this.listamain.push("J");

        case 3:
        this.listamain.push("L");

        case 4:
        this.listamain.push("R");

        case 5:
        this.listamain.push("LI");

        case 6:
        this.listamain.push(this.listaproc1.toString());

        case 7:
        this.listamain.push(this.listaproc2.toString());

      } 
    } else if (this.variable == 2){
        switch(num){
          case 1:
          this.listaproc1.push("F");

          case 2:
          this.listaproc1.push("J");

          case 3:
          this.listaproc1.push("L");

          case 4:
          this.listaproc1.push("R");

          case 5:
          this.listaproc1.push("LI");
        }
    } else if (this.variable == 3) {
        switch(num){
          case 1:
          this.listamain.push("F");

          case 2:
          this.listamain.push("J");

          case 3:
          this.listamain.push("L");

          case 4:
          this.listamain.push("R");

          case 5:
          this.listamain.push("LI");
      }
    }
  }
}