import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "../modules/users/users.component";

// This route is prefixed by /users
const routes: Routes = [
    {
        path: '', component: UsersComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LazyUsersRoutingModule {}