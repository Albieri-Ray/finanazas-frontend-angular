import { Component, OnInit } from '@angular/core';
import {Maintenance} from '../../models/maintenance';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountService} from '../../services/account.service';
import {MaintenanceService} from '../../services/maintenance.service';

@Component({
  selector: 'app-account-change-maintenance',
  templateUrl: './account-change-maintenance.component.html',
  styleUrls: ['./account-change-maintenance.component.css']
})
export class AccountChangeMaintenanceComponent implements OnInit {
  maintenanceId = 0;
  maintenances: Maintenance[];
  constructor(private accountService: AccountService, private maintenanceService: MaintenanceService, private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllMaintenance();
  }
  getAllMaintenance(): void{
    this.maintenanceService.getAllMaintenanceByUser().subscribe(
      response => this.maintenances = response,
      error => console.log(error)
    );
  }
  changeMaintenance(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.accountService.updateMaintenance(this.maintenanceId, Number(id)).subscribe();
    this.router.navigate(['list-account']).then();
  }
}
