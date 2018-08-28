import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';

import { HomePage } from '../home/home';
import { ListPage } from '../list/list';

import Array from '../../app/array';
import { Lebo } from '../../app/class';



/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {

  Name;
  Surname;
  StudentNumber;



  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
  }


  ADD(Name,Surname,StudentNumber){

    let object = new Lebo(Name,Surname,StudentNumber);
    if(object!=null){
      Array.push(object);
    


  }
  }

  View(){

    this.navCtrl.push(ListPage)

    if(this.Name != undefined && this.Surname != undefined && this.StudentNumber != undefined){


      const alert = this.alertCtrl.create({
        title: 'Hello friend!!',
        subTitle: 'Please eneter your name and surname.',
        buttons: ['OK']
      });
      alert.present();
      

    }


    
  
  
  }




}
