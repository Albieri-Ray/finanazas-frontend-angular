import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Trust} from '../../models/trust';
import {ActivatedRoute, Router} from '@angular/router';
import {NzNotificationService} from 'ng-zorro-antd/notification';
import {TrustService} from '../../services/trust.service';
import {AccountService} from '../../services/account.service';

@Component({
  selector: 'app-add-trust',
  templateUrl: './add-trust.component.html',
  styleUrls: ['./add-trust.component.css']
})
export class AddTrustComponent implements OnInit {
  trust = new Trust();
  form: FormGroup;
  accountId = this.route.snapshot.paramMap.get('accountId');
  constructor(private formBuilder: FormBuilder, private trustService: TrustService, private accountService: AccountService,
              private router: Router, private notification: NzNotificationService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.createForm();
    console.log(this.accountId);
  }
  createForm(): void{
    this.form = this.formBuilder.group({
      products: ['', [Validators.required]],
      priceProduct: ['', [Validators.required]],
    });
  }
  saveTrust(): void{
    if (this.form.invalid){
      this.notification.error('Failed', 'complete all the fields', {nzDuration: 2300});
      console.log('invalid');
    }else {
      this.trust = this.form.value;
      this.trustService.create(this.trust, Number(this.accountId)).subscribe();
      this.router.navigate(['list-account']).then();
    }
  }

}
