import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage implements OnInit {
  buttonsAlert = ['OK'];
  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  /* Alerta padrão */
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Atenção',
      subHeader: 'Menssagem Importante',
      message: 'Meu alerta',
      buttons: ['OK'],
    });

    await alert.present();
  }

  /* Alerta com input */
  async alertInput(){
    const alertaInput = await this.alertController.create({
      header: 'Alerta com Inputs',
      message: 'Muito show os inputs',
      /* Cria os inputs */
      inputs: [
        {
          name:'nome',
          type:'text',
          placeholder: 'Informe seu nome:'
        },
        {
          name:'idade',
          type: 'number',
          placeholder: 'Informe a Idade'
        }
      ],
      /* Cria os botões */
      buttons:[
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {console.log('Alert cancelado!')}
        },
        {
          text: 'Ok',
          handler: (form) => {
            let pessoa = {
              nome: form.nome,
              idade: form.idade
            };
            console.log(pessoa);
          }
        }
      ]

    });

    await alertaInput.present();
  }

}
