import {Component, OnInit} from '@angular/core';
import {Delivery} from '../../models/delivery';
import {DeliveryService} from '../../services/delivery.service';
import {Router} from '@angular/router';
import {ClientService} from '../../services/client.service';
import {Client} from '../../models/client';

@Component({
  selector: 'app-list-delivery',
  templateUrl: './list-delivery.component.html',
  styleUrls: ['./list-delivery.component.css']
})
export class ListDeliveryComponent implements OnInit{
  clients: Client[];
  clientId = 0;
  deliveries: Delivery[];

  constructor(private deliverService: DeliveryService, private router: Router, private clientService: ClientService) {
  }

  ngOnInit(): void {
    this.getAllClients();
  }
  getAllClients(): void {
    this.clientService.getAllClientActive().subscribe(
      response => this.clients = response,
      error => console.log(error));
  }
  getAllDeliveriesByClient(clientId: number): void{
    this.deliverService.getAllByDeliveriesByClient(clientId).subscribe(
      (response: any) => {
        if (response == null)
        {
          console.log('empty');
          this.deliveries = null;
        }else {
          this.deliveries = response.content;
        }},
      error => console.log(error)
    );
  }
  changeClient(id: number): void{
    this.getAllDeliveriesByClient(id);
    console.log(id);
  }

  goToEditDelivery(deliveryId: number): void{
    this.router.navigate([`edit-delivery/${deliveryId}`]).then();
  }
}
