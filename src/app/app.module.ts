import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutModule } from "./layouts/default/default.module";
import { StaticLayoutModule } from "./layouts/static/static.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,

        DefaultLayoutModule,
        StaticLayoutModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
