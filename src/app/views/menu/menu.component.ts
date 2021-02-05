import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  logout(): void{
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.router.navigate([`login`]).then();
  }
}

