import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController} from 'ionic-angular';
import { MachineRoomService } from '../../providers/machine-room.services';

/**
 * Generated class for the MachineRoomPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-machine-room',
  templateUrl: 'machine-room.html',
})
export class MachineRoomPage {

  rooms: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public roomService: MachineRoomService,public loadingCtrl : LoadingController) {
    console.log("constructor");
  }


  ionViewWillEnter() {
    console.log('ionViewWillEnter MachineRoomPage');
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '正在努力加载中...'
    });

    loading.present();


    this.roomService.get().subscribe(res=> {
      this.rooms=res;
      loading.dismiss();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MachineRoomPage');
    // this.roomService.get().subscribe(res=> this.rooms=res);
  }

  gotoRoomDetail(room:any){
    this.navCtrl.push('MachineRoomDetailPage',{id: room.id});
  }

  goback(){
    this.navCtrl.pop();
  }

  gotoSearch(){    
    this.navCtrl.push('MachineRoomSearchPage')
  }
}
