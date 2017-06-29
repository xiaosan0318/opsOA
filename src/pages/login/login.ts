import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";

import { User } from "../../domains/user";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: any = { username: 'yezhengmao', name: '',password: '123456'};

  constructor(public navCtrl: NavController, public navParams: NavParams,public auth: AuthServiceProvider,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    this.auth.getTicket(this.user).then(res=>{
        console.log(res["ticket"]);
        if(res["ticket"]){
            this.auth.getUserInfo(res["ticket"]).then(response=>{
              console.log(response);
              if(response.success ===true){
                  this.navCtrl.setRoot('TabsPage');
              }else{
                let alert = this.alertCtrl.create({
                title: '登陆失败',
                message: '登陆失败',
                buttons: [
                  {
                    text: 'Ok',
                    handler: () => {
                    console.log('Ok clicked');
                  }
                  }
                ]
              });
              alert.present();
              }

            });
        }else{
            // Import the AlertController from ionic package
            // Consume it in the constructor as 'alertCtrl'
            let alert = this.alertCtrl.create({
              title: '登陆失败',
              message: res.msg,
              buttons: [
                {
                  text: 'Ok',
                  handler: () => {
                  console.log('Ok clicked');
                }
                }
              ]
            });
            alert.present();
        }
    });
    //this.navCtrl.setRoot('TabsPage');
  }

}
