import { Component } from '@angular/core';
import { NavController,AlertController, IonicPage } from 'ionic-angular';

import { User } from "../../domains/user";

import { AuthServiceProvider } from "../../providers/auth-service/auth-service";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user:User;

  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public auth:AuthServiceProvider) {
      this.user = this.auth.getCurrentUser();
      console.log(123);
      console.log(this.user);
      
  }

  gotoView(type:string){
    if(type =='jifang'){
        this.navCtrl.push('MachineRoomPage');
    }
    
  }





}
