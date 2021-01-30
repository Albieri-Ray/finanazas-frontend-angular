import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {NzNotificationService} from 'ng-zorro-antd/notification';
import {Login} from '../../models/login';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router,
              private notification: NzNotificationService) { }
  login = new Login();
  form: FormGroup;
  ngOnInit(): void {
    this.createForm();
  }
  createForm(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  loginUser(): void{
    if (this.form.invalid){
      this.notification.error('Failed', 'User incorrect', {nzDuration: 2300});
    }else{
      this.login = this.form.value;
      this.userService.login(this.login).subscribe(
        (response: any) => this.saveToken(response.token),
        () => this.notification.error('Failed', 'Login Failed', {nzDuration: 2300})
      );
    }
  }
  saveToken(token: any): void{
    const decoded = jwtDecode(token);
    localStorage.setItem('token', JSON.stringify(token));
    // @ts-ignore
    localStorage.setItem('userId', JSON.stringify(decoded.sub));
    this.router.navigate(['home']).then();
  }
}
