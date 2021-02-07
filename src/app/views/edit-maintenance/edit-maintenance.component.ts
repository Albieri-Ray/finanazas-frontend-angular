import { Component, OnInit } from '@angular/core';
import {Maintenance} from '../../models/maintenance';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MaintenanceService} from '../../services/maintenance.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NzNotificationService} from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-edit-maintenance',
  templateUrl: './edit-maintenance.component.html',
  styleUrls: ['./edit-maintenance.component.css']
})
export class EditMaintenanceComponent implements OnInit {
  maintenance = new Maintenance();
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private maintenanceService: MaintenanceService, private router: Router,
              private notification: NzNotificationService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getById();
    this.createForm();
  }
  getById(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.maintenanceService.getById(Number(id)).subscribe(
      response => {
        this.form.controls.description.setValue(response.description);
        this.form.controls.price.setValue(response.price);
        this.form.controls.frequency.setValue(response.frequency);
      },
      error => console.log(error)
    );
  }
  createForm(): void{
    this.form = this.formBuilder.group({
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      frequency: ['', [Validators.required]],
    });
  }
  updateMaintenance(): void{
    if (this.form.invalid){
      this.notification.error('Failed', 'complete all the fields', {nzDuration: 2300});
      console.log('This is invalid');
    }else{
      const id = this.route.snapshot.paramMap.get('id');
      this.maintenance = this.form.value;
      this.maintenanceService.update(this.maintenance, Number(id)).subscribe(
        () => this.router.navigate(['list-client']).then(() => location.reload()),
        error => console.log(error));
      console.log(this.maintenance);
    }
  }

}
