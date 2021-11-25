import { IGit } from './../models/IGit.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  titulo = 'Git Hub';

  listaPessoas:IGit[] = [
    {
      nome:"Marcio Vieira Ferreira",
      descricao:"Dev",
      classificacao:"A+",
      idade:26,
      repos:["ionic","spa"],
      imagem:"https://avatars.githubusercontent.com/u/18701313?v=4"
    },
    {
      nome:"Marcio VF",
      descricao:"Dev Full Stack",
      classificacao:"A++",
      idade:26,
      repos:["ionic","spa"],
      imagem:"https://avatars.githubusercontent.com/u/3171503?s=200&v=4"
    }
  ];

  constructor(public alertController: AlertController,public toastController: ToastController) {}

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja <strong>Favoritar</strong> o Usuário ??',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim, favoritar',
          handler: () => {
            this.apresentarToast();
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Favoritado',
      duration: 2000,
      color:'success'
    });
    toast.present();
  }


}
