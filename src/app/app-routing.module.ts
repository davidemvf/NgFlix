import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router'

import { HomeComponent } from './home/home.component';
import { SerieTvComponent } from './serie-tv/serie-tv.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'serieTv', component: SerieTvComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}