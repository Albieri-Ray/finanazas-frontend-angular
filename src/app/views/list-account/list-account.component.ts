import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service';
import {Client} from '../../models/client';
import {AccountService} from '../../services/account.service';
import {Account} from '../../models/account';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})
export class ListAccountComponent implements OnInit {
  clients: Client[];
  clientId: number;
  accounts: Account[];
  constructor(private accountService: AccountService , private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
    this.getAllClient();
  }
  getAllClient(): void{
    this.clientService.getAllClientActive().subscribe(
      response => this.clients = response,
      error => console.log(error)
    );
  }
  getAllAccountsByClient(clientId: number): void{
    this.accountService.getAllAccountsByClient(clientId).subscribe(
      response => {
        if (response == null)
        {
          this.accounts = null;
          console.log('empty');
        }else {
          this.accounts = response;
        }
      },
      error => console.log(error)
    );
  }
  changeClient(id: number): void{
    this.getAllAccountsByClient(id);
    console.log(id);
  }
  goToShowLineOfCredit(id: number): void{
    this.router.navigate([`detail-line-of-credit/${id}`]).then();
  }
  goToEditLineOfCredit(lineOfCreditId: number): void{
    this.router.navigate([`edit-line-of-credit/${lineOfCreditId}`]).then();
  }
  goToEditMaintenance(accountId: number): void{
    this.router.navigate([`account-change-maintenance/${accountId}`]).then();
  }
  goToTrustList(accountId: number): void{
    this.router.navigate([`${accountId}/list-trust`]).then();
  }
}
