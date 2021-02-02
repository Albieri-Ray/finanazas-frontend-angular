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
  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
    this.getAllClientsByUser();
  }
  getAllClientsByUser(): void{
    this.clientService.getAllClientsByUser().subscribe(
      (response: any) => this.clients = response.content,
      error => console.log(error)
    );
  }
}
