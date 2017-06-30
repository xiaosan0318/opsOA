import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { MachineService } from '../../providers/machine.services';

/**
 * Generated class for the MachinePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-machine',
  templateUrl: 'machine.html',
})
export class MachinePage {

  machines: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public machineService:MachineService,public loadingCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MachinePage');
  }

  ionViewWillEnter(){
   
   //当从上一个页面返回到该页面时，isFresh被改为false，不需要再重复获取数据
    if(this.machineService.isFresh == false) return;

    //进入该页面加载数据时显示loading框
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '正在努力加载中...'
    });

    loading.present();

    //调用机柜service获取机柜列表数据
    this.machineService.get().subscribe((res:any)=> {
      this.machines=res.data;
      console.log(res);
      //获取到数据后隐藏loading框
      loading.dismiss();
    });

  }

  //返回到上一页面
  goback(){
    this.navCtrl.pop();
  }

  //进入查询页面
  gotoSearch(){    
    this.navCtrl.push('MachineSearchPage')
  }

}
