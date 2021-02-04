import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NzNotificationService} from 'ng-zorro-antd/notification';
import {ClientService} from '../../services/client.service';
import {Client} from '../../models/client';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private clientService: ClientService, private router: Router,
              private notification: NzNotificationService) { }
  client = new Client();
  form: FormGroup;
  ngOnInit(): void {
    this.createForm();
  }
  createForm(): void{
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      dni: ['', [Validators.required]],
    });
  }
  saveClient(): void {
    if (this.form.invalid){
      this.notification.error('Failed', 'complete all the fields', {nzDuration: 2300});
      console.log('This is invalid');
    }else{
      this.client = this.form.value;
      this.clientService.create(this.client).subscribe();
      this.router.navigate(['list-client']).then();
      console.log(this.client);
    }
  }
}
