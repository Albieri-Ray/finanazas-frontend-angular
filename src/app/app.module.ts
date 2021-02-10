import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './views/login/login.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import { RegisterComponent } from './views/register/register.component';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzNotificationModule} from 'ng-zorro-antd/notification';
import { MenuComponent } from './views/menu/menu.component';
import { HomeComponent } from './views/home/home.component';
import { ListClientComponent } from './views/list-client/list-client.component';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzTableModule} from 'ng-zorro-antd/table';
import { AddClientComponent } from './views/add-client/add-client.component';
import {NzModalModule} from 'ng-zorro-antd/modal';
import { EditClientComponent } from './views/edit-client/edit-client.component';
import { ListDeliveryComponent } from './views/list-delivery/list-delivery.component';
import {NzSelectModule} from 'ng-zorro-antd/select';
import { AddDeliveryComponent } from './views/add-delivery/add-delivery.component';
import { EditDeliveryComponent } from './views/edit-delivery/edit-delivery.component';
import { ListVoucherComponent } from './views/list-voucher/list-voucher.component';
import { ListMaintenanceComponent } from './views/list-maintenance/list-maintenance.component';
import { AddMaintenanceComponent } from './views/add-maintenance/add-maintenance.component';
import { EditMaintenanceComponent } from './views/edit-maintenance/edit-maintenance.component';
import { ListAccountComponent } from './views/list-account/list-account.component';
import { DetailLineOfCreditComponent } from './views/detail-line-of-credit/detail-line-of-credit.component';
import { AddAccountComponent } from './views/add-account/add-account.component';
import { EditLineOfCreditComponent } from './views/edit-line-of-credit/edit-line-of-credit.component';
import { AccountChangeMaintenanceComponent } from './views/account-change-maintenance/account-change-maintenance.component';
import { ListTrustComponent } from './views/list-trust/list-trust.component';
import { AddTrustComponent } from './views/add-trust/add-trust.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    HomeComponent,
    ListClientComponent,
    AddClientComponent,
    EditClientComponent,
    ListDeliveryComponent,
    AddDeliveryComponent,
    EditDeliveryComponent,
    ListVoucherComponent,
    ListMaintenanceComponent,
    AddMaintenanceComponent,
    EditMaintenanceComponent,
    ListAccountComponent,
    DetailLineOfCreditComponent,
    AddAccountComponent,
    EditLineOfCreditComponent,
    AccountChangeMaintenanceComponent,
    ListTrustComponent,
    AddTrustComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    NzLayoutModule,
    NzGridModule,
    NzButtonModule,
    NzCardModule,
    NzInputModule,
    ReactiveFormsModule,
    FormsModule,
    NzFormModule,
    NzNotificationModule,
    NzMenuModule,
    NzIconModule,
    NzTableModule,
    NzModalModule,
    NzSelectModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
