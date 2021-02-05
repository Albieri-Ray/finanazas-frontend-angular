import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {NzNotificationService} from 'ng-zorro-antd/notification';
import {DeliveryService} from '../../services/delivery.service';
import {Delivery} from '../../models/delivery';

@Component({
  selector: 'app-add-delivery',
  templateUrl: './add-delivery.component.html',
  styleUrls: ['./add-delivery.component.css']
})
export class AddDeliveryComponent implements OnInit {

  delivery = new Delivery();
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private deliveryService: DeliveryService, private router: Router,
              private notification: NzNotificationService, private route: ActivatedRoute) { }

  ngOnInit(): void {
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
      const id = this.route.snapshot.paramMap.get('id');
      this.delivery = this.form.value;
      this.deliveryService.create(this.delivery, Number(id)).subscribe();
      this.router.navigate(['list-delivery']).then();
      console.log(this.delivery);
    }
  }

}
