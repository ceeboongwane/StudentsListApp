import { Component } from '@angular/core';
import { NavController, AlertController  } from 'ionic-angular';

import { FormPage } from '../form/form';


import Array from '../../app/array';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  Start(){

    this.navCtrl.push(ListPage);

    const alert = this.alertCtrl.create({
      title: 'Empty list!',
      subTitle: 'Please enter the class names.',
      buttons: ['OK']
      
    });
    alert.present();
  }
    


  }



