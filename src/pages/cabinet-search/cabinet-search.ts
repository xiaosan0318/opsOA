import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { CabinetService } from '../../providers/cabinet.services';

/**
 * Generated class for the CabinetSearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cabinet-search',
  templateUrl: 'cabinet-search.html',
})
export class CabinetSearchPage {

  //机柜名称
  cabinetName: any;

  //机房名称
  roomName: any;

  //租用状态数据
  hireStatus :any = [
      {"type": "0", "name": "包租", isChecked: false},
			{"type": "1", "name": "租用中", isChecked: false},
			{"type": "2", "name": "已退租", isChecked: false},
		  {"type": "3", "name": "合租", isChecked: false}
      ]
      
  //tabs    
  tabBarElement: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,public cabinetService: CabinetService) {
    //隐藏tabs
    this.tabBarElement = document.querySelector('ion-tabs > div.tabbar.show-tabbar');
    this.roomName = this.cabinetService.queryParams.roomName;
    this.cabinetName = this.cabinetService.queryParams.cabinetName;
    this.initCheckedHireStatus();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CabinetSearchPage');
  }

  ionViewWillEnter(){
      console.log("onViewWillEnter CabinetSearchPage");
      this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave(){
      console.log("onViewWillLeave");
      this.tabBarElement.style.display = 'flex';
  }

  //查询按钮方法
  query(){
    this.cabinetService.queryParams.roomName = this.roomName ? this.roomName : "";
    this.cabinetService.queryParams.cabinetName = this.cabinetName ? this.cabinetName : "";
    this.cabinetService.queryParams.hireStatus = this.getCheckedHireStatus();
    this.cabinetService.isFresh = true;
    this.viewCtrl.dismiss();
  }

  //点击查询时获取选中的租用状态
  private getCheckedHireStatus(){
    let statusArray = new Array();
    for(let i=0; i < this.hireStatus.length; i++){
      let _hireStatus = this.hireStatus[i];
      if(_hireStatus.isChecked){
          statusArray.push(_hireStatus.type);
      }
    }
    return statusArray.join(",");
  }

  //初始化租用状态是否高亮选中
  private initCheckedHireStatus(){
    let checkedStatus = this.cabinetService.queryParams.hireStatus;
    if(checkedStatus){
      checkedStatus = checkedStatus.split(",");
      for(let i = 0; i < this.hireStatus.length; i++){
        for(let j = 0; j < checkedStatus.length; j++){
          if(checkedStatus[j] == this.hireStatus[i].type){
            this.hireStatus[i].isChecked = true;
          }
        }
        
      }
    }
  }

  //返回按钮方法
  goback(){
    //返回到机柜列表页面时不需重新获取列表数据，将isFresh改为false
    this.cabinetService.isFresh = false;
    this.navCtrl.pop();
  }

}
