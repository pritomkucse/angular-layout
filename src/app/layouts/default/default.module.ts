import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "../../modules/home/home.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {DefaultLayoutComponent} from "./default.component";

@NgModule({
    declarations: [
        DefaultLayoutComponent,
        HomeComponent, //register home component will use this layout
    ],
    imports: [
        FormsModule,
        CommonModule,
        BrowserModule,
        RouterModule,
        SharedModule,//we will access header and footer via shared module
    ]
})
export class DefaultLayoutModule { }
