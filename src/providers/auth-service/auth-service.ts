import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from "../../domains/user";
import * as Constant from "../../domains/constant";
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/toPromise";


/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthServiceProvider {

  private currentUserInfo:User = null;

  private baseUrl:string = Constant.APP_URL;

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

  isLogin(){
     return this.currentUserInfo ? true : false; 
  }

  public getCurrentUser(){
    return this.currentUserInfo;
  }
  getTicket(user: User){
    console.log(1231312321);
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let url = this.baseUrl + "/getServiceTicket?username="+user.username+"&password="+user.password;
    return this.http.get(url).toPromise().then(response=> response.json()).catch(this.handleError);
  }

  getUserInfo(token:string){
    let url = this.baseUrl + "/getUserInfo?token="+token;
    return this.http.get(url).toPromise().then(response=> {
      let data = response.json();
      if(data.success === true){
          this.currentUserInfo = data;
      }
      return data;
    }).catch(this.handleError);
  }

  getApproveCount(username: string){
    let url = "/mobileApi/getApproveCount?username="+username;
    return this.http.get(url).toPromise().then(response=> response.json()).catch(this.handleError);
  }


  /**
* Handle HTTP error
*/
    private handleError (error: any) {
      console.log(error);
        let errMsg = (error.message) ? error.message :
        error.status ? `error.status - error.statusText` : 'Server error';
        console.log(error.status);
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }



}
