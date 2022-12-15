import { Component } from '@angular/core';
import { ActionSheetController, AlertController, IonItem, LoadingController, ToastController } from '@ionic/angular';
import { Itens } from 'src/app/model/item.model';

import { DatabaseService  } from '../../service/database.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  status = false;
  image = "https://cdn.pixabay.com/photo/2016/05/16/17/59/strawberries-1396330__340.jpg";
  products: Itens[] = [];

  constructor(
    private dataBase: DatabaseService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadCtrl: LoadingController,
    private actionSheetCtrl: ActionSheetController
    ) {}

    ngOnInit(){
      this.load();
      this.dataBase.getFoto().subscribe(results => this.products = results);
    }

  async deletar(id: number){
    try{
      this.dataBase.delFoto(id);
    }finally{
      this.toast("Iten Excluido!","danger");
      location.reload();
    }

  }

  async toast(message: string, color: string){
    const toastMessage = this.toastCtrl.create({
      mode: 'ios',
      message,
      duration: 2000,
      color: color,
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

  async alertando(){
    const alertar = this.alertCtrl.create({
      header: 'Cadastrar Produtos',
      inputs: [
        {
          name: 'item',
          type: 'text',
          placeholder: 'Informe o Ítem'
        },
        {
          name: 'quantidade',
          type: 'text',
          placeholder: 'Informe a Quantidade:'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {

          },
        },
        {
          text: 'Cadastrar',
          role: 'confirm',
          handler: (form) => {

            let formulario = {product: form.item, quant: form.quantidade, status: false}
            try{
              this.dataBase.postFoto(formulario);
            }finally{
              this.toast("Item Cadastrado","success");
              //location.reload();
            }

          },
        },
      ]
    });
    (await alertar).present();
  }

  async presentActionSheet(item: any) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Example header',
      subHeader: 'Example subheader',
      buttons: [
        {
          text: item.status ? 'Desmarcar' : 'Marcar',
          icon: item.status ? 'radio-button-off' : 'checkmark-circle',
          handler: () => {
            item.status = !item.status;
          }
        },

        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();

    //const result = await actionSheet.onDidDismiss();
    //this.result = JSON.stringify(result, null, 2);
  }
}
