import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';


import { Info } from '../model/info';
import { InfoList } from '../constant/infolist';

@Injectable()
export class ConstantService {

    constructor() { }


    getInfoList(): Info[] {
        return InfoList;
    } 

}
