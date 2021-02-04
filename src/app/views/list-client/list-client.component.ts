import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service';
import {Router} from '@angular/router';
import {Client} from '../../models/client';


@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {
  clients: Client[];
  pageNumber = 0;
  clientId: number;
  visibleChangeStateModal = false;
  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
    this.getAllClientsByUser();
  }
  getAllClientsByUser(): void{
    this.clientService.getAllClientsByUser(this.pageNumber).subscribe(
      (response: any) => this.clients = response.content,
      error => console.log(error)
    );
  }
  previousPage(): void{
    if (this.pageNumber > 0){
      this.pageNumber--;
      this.clientService.getAllClientsByUser(this.pageNumber).subscribe(
        (response: any) => this.clients = response.content, (error) => console.log(error));
    }
  }
  nextPage(): void {
    this.pageNumber++;
    this.clientService.getAllClientsByUser(this.pageNumber).subscribe(
      (response: any) => response ? this.clients = response.content : this.pageNumber--, (error) => console.log(error));
  }
  showChangeStateModal(clientId: number): void{
    this.clientId = clientId;
    this.visibleChangeStateModal = true;
  }
  cancelChangeStateModal(): void{
    this.visibleChangeStateModal = false;
  }
  updateChangeState(): void{
    // @ts-ignore
    this.clientService.changeState(this.clientId).subscribe(() => location.reload(),
      error => console.log(error));
  }
  goToEditClient(id: number): void{
    this.router.navigate([`edit-client/${id}`]).then();
  }
}
