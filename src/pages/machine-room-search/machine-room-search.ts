import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController} from 'ionic-angular';

import { MachineRoomService } from '../../providers/machine-room.services';

/**
 * Generated class for the MachineRoomSearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-machine-room-search',
  templateUrl: 'machine-room-search.html',
})
export class MachineRoomSearchPage {

  roomName: any;
  businessType :any = {"YES":true,"NO":false};

  tabBarElement: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController, public roomService: MachineRoomService ) {
    // this.tabRef.tabsLayout = "title-hide";
    this.tabBarElement = document.querySelector('ion-tabs > div.tabbar.show-tabbar');
    this.roomName = this.roomService.queryParams.roomName;
    let _businessType = this.roomService.queryParams.businessType;
    this.businessType.YES = _businessType == "1" ? true : (_businessType == "" ? true : false);
    this.businessType.NO = _businessType == "2" ? true : (_businessType == "" ? true : false);
  }

  query(){
    this.roomService.queryParams.roomName = this.roomName ? this.roomName : "";
    let type = "";
    if(this.businessType.YES !== this.businessType.NO){
        if(this.businessType.YES === true){
            type = "1";
        }else{
            type = "2";
        }
    }
    this.roomService.queryParams.businessType = type;
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MachineRoomSearchPage');
  }

  
  ionViewWillEnter(){
      console.log("onPageWillEnter");
        this.tabBarElement.style.display = 'none';

    }

    ionViewWillLeave(){
        console.log("onPageWillLeave");
        this.tabBarElement.style.display = 'flex';

    }

    goback(){
      this.navCtrl.pop();
    }
}
