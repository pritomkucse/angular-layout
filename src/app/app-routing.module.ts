import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./modules/home/home.component";
import {DefaultLayoutComponent} from "./layouts/default/default.component";
import {LoginComponent} from "./modules/login/login.component";
import {StaticLayoutComponent} from "./layouts/static/static.component";

const routes: Routes = [
    {
        path: '',
        component: DefaultLayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent,
            }, {
                path: 'users',
                //component: UsersComponent,
                loadChildren: () => import('./routes/lazy-user.module').then(m => m.LazyUserModule)
            }
        ]
    }, {
        path: '',
        component: StaticLayoutComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent,
            }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
