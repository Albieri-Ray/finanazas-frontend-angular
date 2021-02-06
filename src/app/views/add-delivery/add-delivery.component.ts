import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NzNotificationService} from 'ng-zorro-antd/notification';
import {DeliveryService} from '../../services/delivery.service';
import {Delivery} from '../../models/delivery';
import {Client} from '../../models/client';
import {ClientService} from '../../services/client.service';

@Component({
  selector: 'app-add-delivery',
  templateUrl: './add-delivery.component.html',
  styleUrls: ['./add-delivery.component.css']
})
export class AddDeliveryComponent implements OnInit {
  clients: Client[];
  clientId = 0;
  delivery = new Delivery();
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private deliveryService: DeliveryService, private clientService: ClientService,
              private router: Router, private notification: NzNotificationService) { }

  ngOnInit(): void {
    this.getAllClientsByUser();
    this.createForm();
  }
  createForm(): void{
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      priceProduct: ['', [Validators.required]],
      priceDelivery: ['', [Validators.required]],
      frequency: ['', [Validators.required]],
      homeAddress: ['', [Validators.required]],
    });
  }
  saveDelivery(): void{
    if (this.form.invalid){
      this.notification.error('Failed', 'complete all the fields', {nzDuration: 2300});
      console.log('This is invalid');
    }else{
      this.delivery = this.form.value;
      this.deliveryService.create(this.delivery, this.clientId).subscribe();
      this.router.navigate(['list-delivery']).then();
    }
  }
  getAllClientsByUser(): void{
    this.clientService.getAllClientActive().subscribe(
      response => this.clients = response,
      error => console.log(error)
    );
  }
}
