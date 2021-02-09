import { Component, OnInit } from '@angular/core';
import {Client} from '../../models/client';
import {Maintenance} from '../../models/maintenance';
import {ClientService} from '../../services/client.service';
import {MaintenanceService} from '../../services/maintenance.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzNotificationService} from 'ng-zorro-antd/notification';
import {LineOfCredit} from '../../models/line-of-credit';
import {LineOfCreditService} from '../../services/line-of-credit.service';
import {Router} from '@angular/router';
import {AccountService} from '../../services/account.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  clients: Client[];
  clientId = 0;
  maintenanceId = 0;
  maintenances: Maintenance[];
  form: FormGroup;
  lineOfCredit = new LineOfCredit();
  periodOptions = ['Semanal', 'Quincenal', 'Mensual', 'Bimestral', 'Trimestral', 'Cuatrimestral', 'Anual'];
  constructor(private clientService: ClientService, private maintenanceService: MaintenanceService, private formBuilder: FormBuilder,
              private notification: NzNotificationService, private lineOfCreditService: LineOfCreditService, private router: Router,
              private accountService: AccountService) { }

  ngOnInit(): void {
    this.getAllClientsByUser();
    this.getAllMaintenances();
    this.createForm();
  }
  getAllClientsByUser(): void{
    this.clientService.getAllClientActive().subscribe(
      response => this.clients = response,
      error => console.log(error)
    );
  }
  getAllMaintenances(): void{
    this.maintenanceService.getAllMaintenanceByUser().subscribe(
      response => this.maintenances = response,
      error => console.log(error)
    );
  }
  createForm(): void{
    this.form = this.formBuilder.group({
      rateType: ['', Validators.required],
      credit: ['', Validators.required],
      typeOfCurrency: ['', Validators.required],
      period: ['', Validators.required],
      rateValue: ['', Validators.required],
    });
  }
  saveLineOfCredit(): void{
    if (this.form.invalid){
      this.notification.error('Failed', 'complete all the fields', {nzDuration: 2300});
      console.log('This is invalid');
    }else {
      this.lineOfCredit = this.form.value;
      this.lineOfCreditService.create(this.lineOfCredit).subscribe(
        response => this.saveAccount(response.id),
        error => console.log(error)
      );
    }
  }
  saveAccount(lineaOfCreditId: number): void{
    this.accountService.create(lineaOfCreditId, this.maintenanceId, this.clientId).subscribe();
    this.router.navigate(['list-account']).then();
  }
}
