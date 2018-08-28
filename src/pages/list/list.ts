import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { ModalPage } from '../modal/modal';

import { FormPage } from '../form/form';

import Array from '../../app/array';

import {  Lebo } from '../../app/class';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  Kiso = Array;

  // Name = Array[0];
  // Surname = Array[1];
  // StudentNumber = Array[2];




  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }


  ADD(){

    this.navCtrl.push(FormPage);

  }

  Delete(i){

    Array.splice(i,1);
    console.log('Delete clicked');
  }

  More(i){

    this.navCtrl.push(ModalPage);
  
    
  
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

var  modalArray = [];

export default modalArray;












