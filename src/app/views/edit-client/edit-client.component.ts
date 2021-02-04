import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClientService} from '../../services/client.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NzNotificationService} from 'ng-zorro-antd/notification';
import {Client} from '../../models/client';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  client = new Client();
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private clientService: ClientService, private router: Router,
              private notification: NzNotificationService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getById();
    this.createForm();
  }
  getById(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.clientService.getById(Number(id)).subscribe(
      response => {
        this.form.controls.firstName.setValue(response.firstName);
        this.form.controls.lastName.setValue(response.lastName);
        this.form.controls.phone.setValue(response.phone);
        this.form.controls.dni.setValue(response.dni);
      },
      error => console.log(error)
    );
  }
  createForm(): void{
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      dni: ['', [Validators.required]],
    });
  }
  updateClient(): void{
    if (this.form.invalid){
      this.notification.error('Failed', 'complete all the fields', {nzDuration: 2300});
      console.log('This is invalid');
    }else{
      const id = this.route.snapshot.paramMap.get('id');
      this.client = this.form.value;
      this.clientService.update(this.client, Number(id)).subscribe(
        () => this.router.navigate(['list-client']).then(() => location.reload()),
        error => console.log(error));
      console.log(this.client);
    }
  }
}
