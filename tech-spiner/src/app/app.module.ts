import { NgModule, ComponentRef, Injectable, Component, Injector, Inject, ViewContainerRef, ViewChild, ComponentFactoryResolver, NgModuleFactoryLoader} from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {Routes, RouterModule} from "@angular/router";
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';
import { DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ProgressbarModule } from 'ng2-bootstrap/ng2-bootstrap';
import { TimepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Ng2CompleterModule } from "ng2-completer";

import { UiSwitchModule } from 'ngx-ui-switch/src'
import { NguiDatetimePickerModule } from '@ngui/datetime-picker';
import { MainDeirectiveDirective } from './directive/main-deirective.directive';
import { HighlightDirective } from './directive/highlight.directive';
import { ExponentialStrengthPipe } from './pipe/exponential-strength.pipe';
import { SpringbootComponent } from './springboot/springboot.component';
import { AppComponent } from './app.component';
import { CorsbootService  } from './service/corsboot.service';
import { ConstantService } from './service/constant.service';
import { LoginFormComponent } from './login-form/login-form.component';
import { EqualValidator } from './login-form/password.match.directive';
import { LoadingModule, ANIMATION_TYPES  } from 'ngx-loading';
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService, Ng4LoadingSpinnerComponent  } from 'ng4-loading-spinner';

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
        ExponentialStrengthPipe, LoginFormComponent,
        EqualValidator,

    ],
    imports: [BrowserModule,
        DatepickerModule,
        ReactiveFormsModule,
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
        UiSwitchModule,
        NguiDatetimePickerModule,
        LoadingModule.forRoot({
        animationType: ANIMATION_TYPES.threeBounce,
        backdropBackgroundColour: 'rgba(0,0,0,0.1)',
        primaryColour: '#34495E', 
        secondaryColour: '#7FB3D5', 
        tertiaryColour: '#A569BD'
    }),
        Ng4LoadingSpinnerModule 
    ],
    providers: [CorsbootService ,ConstantService],
    bootstrap: [AppComponent],
    exports: [RouterModule]
})
export class AppModule {
    ngDoBootstrap() {
    }

}




