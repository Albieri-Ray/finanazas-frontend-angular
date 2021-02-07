import { Component, OnInit } from '@angular/core';
import {Maintenance} from '../../models/maintenance';
import {MaintenanceService} from '../../services/maintenance.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-maintenance',
  templateUrl: './list-maintenance.component.html',
  styleUrls: ['./list-maintenance.component.css']
})
export class ListMaintenanceComponent implements OnInit {
  maintenances: Maintenance[];
  maintenanceId: number;
  visibleDeleteModal = false;
  constructor(private maintenanceService: MaintenanceService, private router: Router) { }

  ngOnInit(): void {
    this.getAllMaintenanceByUser();
  }
  getAllMaintenanceByUser(): void{
    this.maintenanceService.getAllMaintenanceByUser().subscribe(
      response => this.maintenances = response,
      error => console.log(error)
    );
  }
  saveVoucher(): void{
    const userId = JSON.parse(localStorage.getItem('userId'));
    this.maintenanceService.create(userId).subscribe(() => location.reload());
  }
  showModal(maintenanceId: number): void{
    this.maintenanceId = maintenanceId;
    this.visibleDeleteModal = true;
  }
  cancelModal(): void{
    this.visibleDeleteModal = false;
  }
  deleteVoucher(): void{
    this.maintenanceService.delete(this.maintenanceId).subscribe(() => location.reload());
  }
  goToEditMaintenance(maintenanceId: number): void{
    this.router.navigate([`edit-maintenance/${maintenanceId}`]).then();
  }
}
