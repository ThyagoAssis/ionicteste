import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Itens } from '../../model/item.model'
import { DatabaseService } from 'src/app/service/database.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  image = "https://cdn.pixabay.com/photo/2016/05/16/17/59/strawberries-1396330__340.jpg";
  routerId = null;
  product: any = {};

  constructor(
    private activedRouter: ActivatedRoute,
    private bancoDados: DatabaseService
  ) { }

  ngOnInit() {
    this.routerId = this.activedRouter.snapshot.params['id'];

    if (this.routerId) {
      this.bancoDados.getFotoOne(this.routerId).subscribe(results => this.product = results);
    }
  }

  onSubmit(product: any){
    this.bancoDados.updateFoto(product.value, this.routerId);
  }

}
