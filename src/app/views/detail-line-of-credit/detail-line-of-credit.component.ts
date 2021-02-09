import { Component, OnInit } from '@angular/core';
import {LineOfCreditService} from '../../services/line-of-credit.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detail-line-of-credit',
  templateUrl: './detail-line-of-credit.component.html',
  styleUrls: ['./detail-line-of-credit.component.css']
})
export class DetailLineOfCreditComponent implements OnInit {
  form: FormGroup;
  constructor(private lineOfCreditService: LineOfCreditService, private router: Router, private route: ActivatedRoute,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    this.getAllLineOfCreditById();
  }
  getAllLineOfCreditById(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.lineOfCreditService.getLineOfCreditById(Number(id)).subscribe(
      response => {
        this.form.controls.rateType.setValue(response.rateType);
        this.form.controls.credit.setValue(response.credit);
        this.form.controls.typeOfCurrency.setValue(response.typeOfCurrency);
        this.form.controls.registerDate.setValue(response.registerDate);
        this.form.controls.period.setValue(response.period);
        this.form.controls.rateValue.setValue(response.rateValue);
      },
      error => console.log(error)
    );
  }
  createForm(): void{
    this.form = this.formBuilder.group({
      rateType: ['', Validators.required],
      credit: ['', Validators.required],
      typeOfCurrency: ['', Validators.required],
      registerDate: ['', Validators.required],
      period: ['', Validators.required],
      rateValue: ['', Validators.required],
    });
  }
}
