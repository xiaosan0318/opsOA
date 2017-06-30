import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { MachineRoomService } from '../../providers/machine-room.services';

/**
 * Generated class for the MachineRoomDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-machine-room-detail',
  templateUrl: 'machine-room-detail.html',
})
export class MachineRoomDetailPage {

  id: any;
  room: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public roomService: MachineRoomService,public loadingCtrl: LoadingController) {
    this.id = navParams.get("id");
    console.log("constructor");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MachineRoomDetailPage');
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '正在努力加载中...'
    });

    loading.present();

    this.roomService.getById(this.id).subscribe(res=> {
      this.room = res.data
      loading.dismiss();
    });
  }

  

  gotoReceiver(){
    this.navCtrl.push('MachineRoomReceiverPage',this.room.receiverInfo)
  }

  goback(){
    this.navCtrl.pop();
  }
}
