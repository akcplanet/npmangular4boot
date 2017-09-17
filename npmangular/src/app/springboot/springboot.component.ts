import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Info } from '../model/info';
//import { Logger } from '../log/logger.service';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import * as FileSaver  from 'file-saver';
import { InfoList } from '../constant/infolist';
import { CompleterService, CompleterData } from 'ng2-completer';


import { CorsbootService } from '../service/corsboot.service';
import { ConstantService } from '../service/constant.service';


@Component({
    selector: 'app-springboot',
    templateUrl: './springboot.component.html',
    styleUrls: ['./springboot.component.css']
})
export class SpringbootComponent implements OnInit {

    @Input() infoinput: Info;
    @Input() power: string;
    @Input('master') masterName: string;
    @Output() onVoted = new EventEmitter<boolean>();
    voted = false;
    email: boolean = true;
    fax: boolean = false;
    vote(agreed: boolean) {
        this.onVoted.emit(agreed);
        this.voted = true;
        //agreed ? this.agreed++ : this.disagreed++;
    }

    public searchStr: string;
    public dataService: CompleterData;
    public searchData: Info[] = [];

    constructor(private corsbootService: CorsbootService, private constantService: ConstantService, private completerService: CompleterService) {
        //this.getngcompleterUsers();
        this.dataService = completerService.local(this.getngcompleterUsers(), 'id', 'id');
    }

    private _name = '';

    @Input()
    set name(name: string) {
        this._name = (name && name.trim()) || '<no name set>';
    }

    get name(): string {
        return this._name;
    }


    typeInfo: Info[] = [];

    private pInfo: Info[] = [];

    info: Info;

    infolist: Info[];

    selectedCustomer: Info;
    message$: Observable<string>;

    ngOnInit(): void {
        this.getInfoList();

    }
    public onChange($event): void {
        $event ? this.email : this.email = false;
        console.log($event);

    }
    public onChange2($event): void {

        $event ? this.fax : this.fax = false;
        console.log($event);

    }


    public getngcompleterUsers(): Observable<any[]> {
        let id = 'pathGETAmit';
        return this.corsbootService.getngcompleterUsers(id);

    }
    public getInfoList(): void {
        this.infolist = this.constantService.getInfoList();
        this.infolist = this.infolist.slice(0, 5);
        console.log(this.infolist);
    }
    public getInfolist() {
        this.corsbootService.getUsers().subscribe((infolist: Info[]) => {
            this.infolist = infolist;
            console.log(this.infolist);
        },
            error => { console.log('Failed to load users. ' + error); });
    }

    public getpathInfolist() {
        let id = 'pathGETAmit';
        this.corsbootService.getpathUsers(id).subscribe((infolist: Info[]) => {
            this.infolist = infolist;
            console.log(this.infolist);
        },
            error => { console.log('Failed to load users. ' + error); });
    }

    public putInfolist() {
        let id = 'pathPUTAmit';
        let info: Info;
        info.name = 'amitput';
        info.id = '509';
        info.phone = '9910';
        this.corsbootService.putUsers(id, info).subscribe((infolist: Info[]) => {
            this.infolist = infolist;
            console.log(this.infolist);
        },
            error => { console.log('Failed to load users. ' + error); });
    }

    public postInfolist() {
        let info: Info;
        this.corsbootService.postUsers(info).subscribe((infolist: Info[]) => {
            this.infolist = infolist;
            console.log(this.infolist);
        },
            error => { console.log('Failed to load users. ' + error); });
    }

    public deleteInfolist() {
        let id = 'pathDELETEAmit';
        this.corsbootService.deleteUsers(id).subscribe((infolist: Info[]) => {
            this.infolist = infolist;
            console.log(this.infolist);
        },
            error => { console.log('Failed to load users. ' + error); });
    }

    onSelect(cust: Info): void {
        this.corsbootService.downloadFilePost(cust)
            .subscribe(
            (response: any) => {
                console.log(response);
                this.handleResponse(response);
            });
    }

    private handleResponse(response: any) {
        if (response.status === 200) {
            FileSaver.saveAs(response.blob(), 'FailTradeRport.pdf');
        } else if (response.status === 202) {
            return "Error";
        }
    }


}
