import {Routes} from '@angular/router';
import {LoginComponent} from './views/login/login.component';
import {RegisterComponent} from './views/register/register.component';
import {HomeComponent} from './views/home/home.component';
import {ListClientComponent} from './views/list-client/list-client.component';
import {AddClientComponent} from './views/add-client/add-client.component';
import {EditClientComponent} from './views/edit-client/edit-client.component';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'list-client', component: ListClientComponent},
  {path: 'add-client', component: AddClientComponent},
  {path: 'edit-client/:id', component: EditClientComponent}
];
