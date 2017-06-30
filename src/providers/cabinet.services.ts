import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as Constant from "../domains/constant";


@Injectable()
export class CabinetService {

    //定义查询条件对象
    queryParams :any = {"cabinetName":"","roomName": "","hireStatus": ""};
    
    //是否需要重新加载页面数据，true表示重新加载，false表示不加载
    isFresh = true;

    constructor(private http: Http) {}

    /**
     * 获取机柜列表
     */
    get(): Observable<string[]> {
        let url = Constant.APP_URL + "/getCabinet?cname="+this.queryParams.cabinetName +"&mroom="+ this.queryParams.roomName+"&mhireStatus="+this.queryParams.hireStatus;
        return this.http
                .get(url)
                .map((res: Response) => res.json());
    }

    /**
     * 根据id获取机柜详情
     * @param id 机柜id
     */
    getById(id:string): Observable<any> {
        let url = Constant.APP_URL + "/getCabinetById?id="+id;
        return this.http
                .get(url)
                .map((res: Response) => res.json());
    }


    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
        error.status ? `error.status - error.statusText` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

}