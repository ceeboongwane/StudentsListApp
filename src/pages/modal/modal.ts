import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import Array from '../../app/array';

import {  Lebo } from '../../app/class';
 
import { ListPage } from '../list/list'

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  alertCtrl: any;
  Kiso = Array; 
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }




  View(i) {
    var Name = this.Kiso[i].Name
    var Surname = this.Kiso[i].Surname
    var StudentNumber = this.Kiso[i].StudentNumber



    const prompt = this.alertCtrl.create({
      title: 'UPDATE',
      message: "Enter the updated details of the emlpoyee you want to update",
      inputs: [
        {
          name: 'Name',
          placeholder: 'Name',
          value: Name
        },
        {
          name: 'Surname',
          placeholder: 'Surname',
          value: Surname
        },
        {
          name: 'StudentNumber',
          placeholder: 'StudentNumber',
          value: StudentNumber
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
       
        {
          text: 'Update',
          handler: data => {
 
            let obj = new Lebo(data.Name,data.Surname,data.StudentNumber);
            this.Kiso.splice(i,1,obj);
            console.log('Update clicked');
          }
        }
      ]
    });
    prompt.present();
  }








  
}
