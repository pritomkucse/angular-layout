import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StaticLayoutComponent} from "./static.component";
import {LoginComponent} from "../../modules/login/login.component";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    declarations: [
        StaticLayoutComponent,
        LoginComponent, //register login component will use this layout
    ],
    imports: [
        FormsModule,
        CommonModule,
        BrowserModule,
        RouterModule,
        SharedModule,//we will access header and footer via shared module
    ]
})
export class StaticLayoutModule { }
