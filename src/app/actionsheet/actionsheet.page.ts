import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-actionsheet',
  templateUrl: './actionsheet.page.html',
  styleUrls: ['./actionsheet.page.scss'],
})
export class ActionsheetPage implements OnInit {

  constructor(private acsheet: ActionSheetController) { }

  ngOnInit() {
  }

  /* Método do actionsheet */
  async actionSheet(){
    const action = await this.acsheet.create({
      header: 'Meu Actiosheet',
      buttons: [
        {
          text: 'Cancelar',
          role: 'destructive',
          icon: 'trash'
        },
        {
          text: 'Cadastrar',
          icon: 'homeA'        
        }
      ]
    });
    await action.present();
  }

}
