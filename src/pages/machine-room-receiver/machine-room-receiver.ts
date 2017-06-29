import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MachineRoomReceiverPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-machine-room-receiver',
  templateUrl: 'machine-room-receiver.html',
})
export class MachineRoomReceiverPage {

  receiver:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.data);
    this.receiver = this.navParams.data
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MachineRoomReceiverPage');
  }

  goback(){
    this.navCtrl.pop();
  }

}
