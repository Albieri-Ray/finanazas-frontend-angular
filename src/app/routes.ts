import {Routes} from '@angular/router';
import {LoginComponent} from './views/login/login.component';
import {RegisterComponent} from './views/register/register.component';
import {HomeComponent} from './views/home/home.component';
import {ListClientComponent} from './views/list-client/list-client.component';
import {AddClientComponent} from './views/add-client/add-client.component';
import {EditClientComponent} from './views/edit-client/edit-client.component';
import {ListDeliveryComponent} from './views/list-delivery/list-delivery.component';
import {AddDeliveryComponent} from './views/add-delivery/add-delivery.component';
import {EditDeliveryComponent} from './views/edit-delivery/edit-delivery.component';
import {ListVoucherComponent} from './views/list-voucher/list-voucher.component';
import {ListMaintenanceComponent} from './views/list-maintenance/list-maintenance.component';
import {AddMaintenanceComponent} from './views/add-maintenance/add-maintenance.component';
import {EditMaintenanceComponent} from './views/edit-maintenance/edit-maintenance.component';
import {ListAccountComponent} from './views/list-account/list-account.component';
import {DetailLineOfCreditComponent} from './views/detail-line-of-credit/detail-line-of-credit.component';
import {AddAccountComponent} from './views/add-account/add-account.component';
import {EditLineOfCreditComponent} from './views/edit-line-of-credit/edit-line-of-credit.component';
import {AccountChangeMaintenanceComponent} from './views/account-change-maintenance/account-change-maintenance.component';
import {ListTrustComponent} from './views/list-trust/list-trust.component';
import {AddTrustComponent} from './views/add-trust/add-trust.component';
import {EditTrustComponent} from './views/edit-trust/edit-trust.component';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'list-client', component: ListClientComponent},
  {path: 'add-client', component: AddClientComponent},
  {path: 'edit-client/:id', component: EditClientComponent},
  {path: 'list-delivery', component: ListDeliveryComponent},
  {path: 'add-delivery', component: AddDeliveryComponent},
  {path: 'edit-delivery/:id', component: EditDeliveryComponent},
  {path: ':deliveryId/list-voucher', component: ListVoucherComponent},
  {path: 'list-maintenance', component: ListMaintenanceComponent},
  {path: 'add-maintenance', component: AddMaintenanceComponent},
  {path: 'edit-maintenance/:id', component: EditMaintenanceComponent},
  {path: 'list-account', component: ListAccountComponent},
  {path: 'detail-line-of-credit/:id', component: DetailLineOfCreditComponent},
  {path: 'add-account', component: AddAccountComponent},
  {path: 'edit-line-of-credit/:id', component: EditLineOfCreditComponent},
  {path: 'account-change-maintenance/:id', component: AccountChangeMaintenanceComponent},
  {path: ':accountId/list-trust', component: ListTrustComponent},
  {path: ':accountId/add-trust', component: AddTrustComponent},
  {path: 'edit-trust/:id', component: EditTrustComponent}
];
