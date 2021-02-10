import { Component, OnInit } from '@angular/core';
import {Trust} from '../../models/trust';
import {TrustService} from '../../services/trust.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Account} from '../../models/account';

@Component({
  selector: 'app-list-trust',
  templateUrl: './list-trust.component.html',
  styleUrls: ['./list-trust.component.css']
})
export class ListTrustComponent implements OnInit {
  trusts: Trust[];
  trustId: number;
  accounts: Account[];
  accountId = this.route.snapshot.paramMap.get('accountId');
  visibleDeleteModal = false;
  constructor(private trustService: TrustService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllTrustByAccount();
  }
  getAllTrustByAccount(): void{
    this.trustService.getAllTrustByAccount(Number(this.accountId)).subscribe(
      response => {
        if (response == null){
          console.log('empty');
          this.trusts = null;
        }else{
          this.trusts = response;
        }
      },
      error => console.log(error)
    );
  }
  showModal(trustId: number): void{
    this.trustId = trustId;
    this.visibleDeleteModal = true;
  }
  cancelModal(): void{
    this.visibleDeleteModal = false;
  }
  deleteTrust(): void{
    this.trustService.delete(this.trustId).subscribe(() => location.reload());
  }
  goToTrustAdd(): void{
    this.router.navigate([`${this.accountId}/add-trust`]).then();
  }
}
