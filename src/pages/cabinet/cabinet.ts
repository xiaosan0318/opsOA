import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { CabinetService } from '../../providers/cabinet.services';
/**
 * Generated class for the CabinetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cabinet',
  templateUrl: 'cabinet.html',
})
export class CabinetPage {

  cabinets:any;

  //构造函数，只在创建这个页面的时候会调用，从其他页面返回到这个页面时不会再调用。
  constructor(public navCtrl: NavController, public navParams: NavParams,public cabinetService: CabinetService,public loadingCtrl : LoadingController) {
    //当第一次进入机柜列表页面时需要加载数据，isFresh为true。
    this.cabinetService.isFresh = true;
    console.log("constructor CabinetPage");
  }


  ionViewWillEnter(){
    console.log('ionViewWillLoad CabinetPage');
    //当从上一个页面返回到该页面时，isFresh被改为false，不需要再重复获取数据
    if(this.cabinetService.isFresh == false) return;

    //进入该页面加载数据时显示loading框
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '正在努力加载中...'
    });

    loading.present();

    //调用机柜service获取机柜列表数据
    this.cabinetService.get().subscribe((res:any)=> {
      this.cabinets=res.data;
      //获取到数据后隐藏loading框
      loading.dismiss();
    });

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CabinetPage');
  }

  
  //点击机柜进入机柜详情页面
  gotoCabinetDetail(id){
      this.navCtrl.push('CabinetDetailPage',{id: id});
  }

  //返回到上一页面
  goback(){
    this.navCtrl.pop();
  }

  //进入查询页面
  gotoSearch(){    
    this.navCtrl.push('CabinetSearchPage')
  }

}
