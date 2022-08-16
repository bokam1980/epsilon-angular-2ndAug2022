import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./common/components/home/home.component";
import { PageNotFoundComponent } from "./common/components/page-not-found/page-not-found.component";

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    // {
    //     path: 'login',
    //     loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    // },
    // {
    //     path: 'register',
    //     loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    // },
    {
        path: '**',
        component: PageNotFoundComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}