import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';

import { EmpVisionComponent } from './emp.vision.component';
import { ManVisionComponent } from './man.vision.component';
import { PageNotFoundComponent } from './error.component';

//import { NewLoginComponent } from './newlogin.component';


const appRoutes: Routes = [
    {
        path: 'login',            //Login Screen
        component: LoginComponent
    },
 /*   {
        path: 'newlogin',
        component: NewLoginComponent
    },*/
    {
        path: 'emp-vision',           //Employee Screen
        component: EmpVisionComponent
    },
    {
        path: 'man-vision',          //Manager Screen
        component: ManVisionComponent
    },
    {
        path: '',                 //Default Route
        redirectTo: 'login',
        pathMatch: 'full'
    },
    { 
        path: '**',
        component: PageNotFoundComponent     //Default Screen
    }
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: false })],
    exports: [RouterModule],
    providers:[]
})
export class AppRoutingModule{}