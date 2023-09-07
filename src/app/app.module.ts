import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DefaultLayoutModule} from "./layouts/default/default.module";
import {StaticLayoutModule} from "./layouts/static/static.module";
import { UsersComponent } from './modules/users/users.component';

@NgModule({
    declarations: [
        AppComponent,
        UsersComponent,
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
