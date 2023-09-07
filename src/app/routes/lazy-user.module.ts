import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersComponent} from "../modules/users/users.component";
import {LazyUsersRoutingModule} from "./lazy-users-routing.module";

@NgModule({
    declarations: [
        UsersComponent,
    ],
    imports: [
        CommonModule,
        LazyUsersRoutingModule,
    ]
})
export class LazyUserModule { }