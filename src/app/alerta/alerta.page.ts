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

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Atenção',
      subHeader: 'Menssagem Importante',
      message: 'Meu alerta',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
