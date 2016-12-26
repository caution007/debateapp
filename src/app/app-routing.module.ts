import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component'
import { MainComponent } from './main/main.component'
import { DebateComponent } from './debate/debate.component'

import { AppGuard } from './app.guard';

const routes: Routes = [
    { path: "", redirectTo: '/login', pathMatch: 'full' },
    { path: "login", component: LoginComponent },
    { path: "main", component: MainComponent, canActivate: [AppGuard] },
    { path: "debate", component: DebateComponent, canActivate: [AppGuard] }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}