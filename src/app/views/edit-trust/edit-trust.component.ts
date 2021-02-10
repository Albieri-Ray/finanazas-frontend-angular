import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Trust} from '../../models/trust';
import {ActivatedRoute, Router} from '@angular/router';
import {NzNotificationService} from 'ng-zorro-antd/notification';
import {TrustService} from '../../services/trust.service';

@Component({
  selector: 'app-edit-trust',
  templateUrl: './edit-trust.component.html',
  styleUrls: ['./edit-trust.component.css']
})
export class EditTrustComponent implements OnInit {
  trust = new Trust();
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private trustService: TrustService, private router: Router,
              private notification: NzNotificationService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getById();
    this.createForm();
  }
  getById(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.trustService.getById(Number(id)).subscribe(
      response => {
        this.form.controls.products.setValue(response.products);
        this.form.controls.priceProduct.setValue(response.priceProduct);
      },
      error => console.log(error)
    );
  }
  createForm(): void{
    this.form = this.formBuilder.group({
      products: ['', [Validators.required]],
      priceProduct: ['', [Validators.required]],
    });
  }
  updateTrust(): void{
    if (this.form.invalid){
      this.notification.error('Failed', 'complete all the fields', {nzDuration: 2300});
      console.log('This is invalid');
    }else{
      const id = this.route.snapshot.paramMap.get('id');
      this.trust = this.form.value;
      this.trustService.update(this.trust, Number(id)).subscribe(
        () => this.router.navigate(['list-account']).then(() => location.reload()),
        error => console.log(error));
      console.log(this.trust);
    }
  }
}
