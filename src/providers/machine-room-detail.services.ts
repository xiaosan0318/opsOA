import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as Constant from "../domains/constant";


@Injectable()
export class MachineRoomDetailService {

    constructor(private http: Http) {}

    get(id:string): Observable<any> {
        let url = Constant.APP_URL + "/getMachineRoomById?id="+id;
        return this.http.get(url)
        .map((res: Response) => res.json());
    }


    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
        error.status ? `error.status - error.statusText` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}