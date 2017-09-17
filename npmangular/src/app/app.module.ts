import { NgModule, ComponentRef, Injectable, Component, Injector, Inject, ViewContainerRef, ViewChild, ComponentFactoryResolver, NgModuleFactoryLoader} from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {Routes, RouterModule} from "@angular/router";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';
import { DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ProgressbarModule } from 'ng2-bootstrap/ng2-bootstrap';
import { TimepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Ng2CompleterModule } from "ng2-completer";

import { UiSwitchModule } from 'ngx-ui-switch/src'

import { MainDeirectiveDirective } from './directive/main-deirective.directive';
import { HighlightDirective } from './directive/highlight.directive';
import { ExponentialStrengthPipe } from './pipe/exponential-strength.pipe';
import { SpringbootComponent } from './springboot/springboot.component';
import { AppComponent } from './app.component';
import { CorsbootService  } from './service/corsboot.service';
import { ConstantService } from './service/constant.service';

const routes: Routes = [
    { path: 'product', component: SpringbootComponent },
    { path: 'failtrade', component: SpringbootComponent },
    { path: 'springboot', component: SpringbootComponent }
];


@NgModule({
    declarations: [
        AppComponent,
        SpringbootComponent, 
        MainDeirectiveDirective, 
        HighlightDirective, 
        ExponentialStrengthPipe
    ],
    imports: [BrowserModule,
        DatepickerModule,
        FormsModule,
        Ng2BootstrapModule,
        ModalModule,
        ProgressbarModule,
        PaginationModule,
        TimepickerModule,
        HttpModule,
        HttpClientModule,
        Ng2CompleterModule,
        RouterModule.forRoot(routes,
            { enableTracing: true }
        ),
        NgbModule.forRoot(),
        UiSwitchModule
    ],
    providers: [CorsbootService ,ConstantService],
    bootstrap: [AppComponent],
    exports: [RouterModule]
})
export class AppModule {
    ngDoBootstrap() {
    }

}




