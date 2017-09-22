import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod, ResponseContentType} from '@angular/http';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import {Subject} from 'rxjs/Subject'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { saveAs } from 'file-saver/FileSaver';
import * as FileSaver  from 'file-saver';

import { Info } from '../model/info';


@Injectable()
export class CorsbootService {

    private _baseUrl = 'http://localhost:9090/failtrade';
    constructor(private http: Http) {}

      public getngcompleterUsers(id: String): Observable<any[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Access-Control-Allow-Origin', '*');
        // let id ='PathAmit';
        return this.http.get(this._baseUrl + '/ngcompleter/' + id, { headers })
            .map((response: Response) => <any[]>response.json())
       //     .do(data => console.log('All' + JSON.stringify(data)))
            .catch(this.handleError);
    }

 
    public downloadFilePost(cust: Info): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Accept', 'application/octet-stream');
        headers.append('Access-Control-Allow-Origin', '*');
        return this.http.post(this._baseUrl + '/excelpdf', cust, { headers, responseType: ResponseContentType.Blob, method: RequestMethod.Post, })
            .map((res: Response) => {
                return res;
            }).catch((error: any) => {
                if (error) {
                    return Observable.throw(new Error(error.status));
                }
            });
    }

    public downloadExcelFilePost(cust: Info) {
        this.http.post(this._baseUrl + '/exceldownload', cust, { responseType: ResponseContentType.Blob })
            .subscribe(
            (response: any) => {
                let blob = response.blob();
                let filename = 'FailTradeRport.excel';
                FileSaver.saveAs(blob, filename);
            });
    }


    public excelupdateUser(cust: Info): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Accept', 'application/octet-stream');
        headers.append('Access-Control-Allow-Origin', '*');
        return this.http.post(this._baseUrl + '/excelpdf', cust, { headers: headers });
    }



    public excelDownloadUsers() {
        let headers = new Headers({ 'Accept': 'application/octet-stream' });
        headers.append('Access-Control-Allow-Origin', '*');
        return this.http.get(this._baseUrl + '/excelpdf', { headers })
            .map((res: Response): Blob => {
                return res.ok ? res.blob() : undefined;
            })
    }


    private saveToFileSystem(response) {
        console.log('FileSaver  call' + JSON.stringify(response));

        let contentDispositionHeader: string = response.headers.get('Content-Disposition');
        let parts: string[] = contentDispositionHeader.split(';');
        let filename = parts[1].split('=')[1];
        let blob = new Blob([response._body], { type: 'application/pdf' });
        saveAs(blob, filename);
    }


    public getUsers(): Observable<Info[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        //  headers.append('Authorization', 'Bearer x9a278mu7xoh4k0jkj08doc5j4b3ac22');
        //  headers.append('Access-Control-Allow-Headers', 'Cont' +ent-Type');
        // headers.append('Access-Control-Allow-Methods', 'GET');
        headers.append('Access-Control-Allow-Origin', '*');
        //    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });                                                           
        return this.http.get(this._baseUrl + '/userget', { headers })
            .map((response: Response) => <Info[]>response.json())
            .do(data => console.log('All' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    public getpathUsers(id: String): Observable<Info[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Access-Control-Allow-Origin', '*');
        // let id ='PathAmit';
        return this.http.get(this._baseUrl + '/userpathget/' + id, { headers })
            .map((response: Response) => <Info[]>response.json())
            .do(data => console.log('All' + JSON.stringify(data)))
            .catch(this.handleError);
    }


    public putUsers(id: String, infoValue: Info): Observable<Info[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Access-Control-Allow-Origin', '*');
        //  let id ='PathAmit';                                                       
        return this.http.put(this._baseUrl + '/userput/' + id, infoValue, { headers })
            .map((response: Response) => <Info[]>response.json())
            .do(data => console.log('All' + JSON.stringify(data)))
            .catch(this.handleError);
    }


    public postUsers(infoValue: Info): Observable<Info[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Access-Control-Allow-Origin', '*');
        return this.http.post(this._baseUrl + '/userpost', infoValue, { headers })
            .map((response: Response) => <Info[]>response.json())
            .do(data => console.log('All' + JSON.stringify(data)))
            .catch(this.handleError);
    }


    public deleteUsers(id: String): Observable<Info[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Access-Control-Allow-Origin', '*');
        return this.http.delete(this._baseUrl + '/userdelete/' + id, { headers })
            .map((response: Response) => <Info[]>response.json())
            .do(data => console.log('All' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: any) {
        var applicationError = error.headers.get('Application-Error');
        var serverError = error.json();
        var modelStateErrors: string = '';
        if (!serverError.type) {
            console.log(serverError);
            for (var key in serverError) {
                if (serverError[key])
                    modelStateErrors += serverError[key] + '\n';
            }
        }
        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
        return Observable.throw(applicationError || modelStateErrors || 'Server error');
    }

}
