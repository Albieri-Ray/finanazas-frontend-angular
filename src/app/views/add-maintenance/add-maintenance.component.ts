import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NzNotificationService} from 'ng-zorro-antd/notification';
import {MaintenanceService} from '../../services/maintenance.service';
import {Maintenance} from '../../models/maintenance';

@Component({
  selector: 'app-add-maintenance',
  templateUrl: './add-maintenance.component.html',
  styleUrls: ['./add-maintenance.component.css']
})
export class AddMaintenanceComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private maintenanceService: MaintenanceService, private router: Router,
              private notification: NzNotificationService) { }
  maintenance = new Maintenance();
  form: FormGroup;
  ngOnInit(): void {
    this.createForm();
  }
  createForm(): void{
    this.form = this.formBuilder.group({
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      frequency: ['', [Validators.required]],
    });
  }
  saveMaintenance(): void{
    if (this.form.invalid){
      this.notification.error('Failed', 'complete all the fields', {nzDuration: 2300});
      console.log('This is invalid');
    }else{
      this.maintenance = this.form.value;
      this.maintenanceService.create(this.maintenance).subscribe();
      this.router.navigate(['list-maintenance']).then();
      console.log(this.maintenance);
    }
  }
}
