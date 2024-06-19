import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RhInterfaceComponent } from './rh-interface/rh-interface.component';
import { DAFInterfaceComponent } from './daf-interface/daf-interface.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'rh', component: RhInterfaceComponent },
  { path: 'daf', component: DAFInterfaceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
