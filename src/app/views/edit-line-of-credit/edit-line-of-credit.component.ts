import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LineOfCredit} from '../../models/line-of-credit';
import {ActivatedRoute, Router} from '@angular/router';
import {NzNotificationService} from 'ng-zorro-antd/notification';
import {LineOfCreditService} from '../../services/line-of-credit.service';

@Component({
  selector: 'app-edit-line-of-credit',
  templateUrl: './edit-line-of-credit.component.html',
  styleUrls: ['./edit-line-of-credit.component.css']
})
export class EditLineOfCreditComponent implements OnInit {
  lineOfCredit = new LineOfCredit();
  form: FormGroup;
  periodOptions = ['Semanal', 'Quincenal', 'Mensual', 'Bimestral', 'Trimestral', 'Cuatrimestral', 'Anual'];
  constructor(private formBuilder: FormBuilder, private lineOfCreditService: LineOfCreditService, private router: Router,
              private notification: NzNotificationService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getById();
    this.createForm();
  }
  getById(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.lineOfCreditService.getById(Number(id)).subscribe(
      response => {
        this.form.controls.rateType.setValue(response.rateType);
        this.form.controls.credit.setValue(response.credit);
        this.form.controls.typeOfCurrency.setValue(response.typeOfCurrency);
        this.form.controls.period.setValue(response.period);
        this.form.controls.rateValue.setValue(response.rateValue);
      },
      error => console.log(error)
    );
  }
  createForm(): void{
    this.form = this.formBuilder.group({
      rateType: ['', [Validators.required]],
      credit: ['', [Validators.required]],
      typeOfCurrency: ['', [Validators.required]],
      period: ['', [Validators.required]],
      rateValue: ['', [Validators.required]],
    });
  }
  updateMaintenance(): void{
    if (this.form.invalid){
      this.notification.error('Failed', 'complete all the fields', {nzDuration: 2300});
      console.log('This is invalid');
    }else{
      const id = this.route.snapshot.paramMap.get('id');
      this.lineOfCredit = this.form.value;
      this.lineOfCreditService.update(this.lineOfCredit, Number(id)).subscribe(
        () => this.router.navigate(['list-account']).then(() => location.reload()),
        error => console.log(error));
      console.log(this.lineOfCredit);
    }
  }

}
