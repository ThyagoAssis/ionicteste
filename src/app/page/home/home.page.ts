import { Component } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  image = "https://cdn.pixabay.com/photo/2016/05/16/17/59/strawberries-1396330__340.jpg";
  products = [
    {
      product: 'Macarrão', quant: '2k'
    },
    {
      product: 'Feijão', quant: '2k'
    },
    {
      product: 'Batata', quant: '2k'
    },
    {
      product: 'Cenoura', quant: '2k'
    }
  ]
  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadCtrl: LoadingController
    ) {}

    ngOnInit(){
      this.load();
    }

  async deletar(){
   
    const alert = this.alertCtrl.create({
      mode: 'ios',
      message: 'Item Excluido',
      buttons: ['OK'],
    });
    (await alert).present();
  }

  async toast(){
    const toastMessage = this.toastCtrl.create({
      mode: 'ios',
      header: 'Alteração de Produtos',
      duration: 2000,
    });

    (await toastMessage).present();
  }

  async load(){
    const loadingct = this.loadCtrl.create({
      mode:'ios',
      message: 'Aguarde Carregando',
      duration: 2000
    });
    (await loadingct).present();
  }



}
