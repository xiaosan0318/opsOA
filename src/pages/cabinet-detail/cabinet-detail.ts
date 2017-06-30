import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { CabinetService } from '../../providers/cabinet.services';

/**
 * Generated class for the CabinetDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cabinet-detail',
  templateUrl: 'cabinet-detail.html',
})
export class CabinetDetailPage {

  id:any;
  cabinet: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public cabinetService: CabinetService,public loadingCtrl : LoadingController) {
    //获取传入详情页面的参数id
    this.id = navParams.get("id");
    console.log("constructor cabinet-detail");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CabinetDetailPage');
  }

  ionViewWillEnter(){
    console.log('ionViewWillLoad CabinetDetailPage');
    //进入页面显示loading加载数据
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '正在努力加载中...'
    });

    loading.present();

    //调用机柜service获取机柜详情
    this.cabinetService.getById(this.id).subscribe(res=> {
      this.cabinet = res.data
      //获取到详情后隐藏loading框
      loading.dismiss();
    });
  
  }

  //返回
  goback(){
    //返回到机柜列表页面时不需重新获取列表数据，将isFresh改为false
    this.cabinetService.isFresh = false;
    this.navCtrl.pop();
  }


}
