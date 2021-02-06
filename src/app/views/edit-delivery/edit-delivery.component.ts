import { Component, OnInit } from '@angular/core';
import {Delivery} from '../../models/delivery';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DeliveryService} from '../../services/delivery.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NzNotificationService} from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-edit-delivery',
  templateUrl: './edit-delivery.component.html',
  styleUrls: ['./edit-delivery.component.css']
})
export class EditDeliveryComponent implements OnInit {

  delivery = new Delivery();
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private deliveryService: DeliveryService, private router: Router,
              private notification: NzNotificationService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getById();
    this.createForm();
  }
  getById(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.deliveryService.getById(Number(id)).subscribe(
      response => {
        this.form.controls.name.setValue(response.name);
        this.form.controls.description.setValue(response.description);
        this.form.controls.priceProduct.setValue(response.priceProduct);
        this.form.controls.priceDelivery.setValue(response.priceDelivery);
        this.form.controls.frequency.setValue(response.frequency);
        this.form.controls.homeAddress.setValue(response.homeAddress);
      },
      error => console.log(error)
    );
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
  updateDelivery(): void{
    if (this.form.invalid){
      this.notification.error('Failed', 'complete all th fields', {nzDuration: 2300});
      console.log('this is invalid');
    } else{
      const id = this.route.snapshot.paramMap.get('id');
      this.delivery = this.form.value;
      this.deliveryService.update(this.delivery, Number(id)).subscribe(
        () => this.router.navigate(['list-delivery']).then(() => location.reload()),
        error => console.log(error));
      console.log(this.delivery);
    }
  }
}
