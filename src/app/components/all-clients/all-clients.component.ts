import { Component } from '@angular/core';
import { DisplayClientsService } from '../../services/display-clients.service';
import { Client } from '../../models/client';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchSortClientsPipe } from '../../pipes/search-sort-clients.pipe';
@Component({
  selector: 'app-all-clients',
  standalone: true,
  imports: [CommonModule,FormsModule,SearchSortClientsPipe],
  templateUrl: './all-clients.component.html',
  styleUrl: './all-clients.component.css'
})
export class AllClientsComponent {
  clients: Client[] = [];
  error:string=""
  searchInput:string=""

  constructor(private displayClientsService:DisplayClientsService){}

  displayClients(){
    this.displayClientsService.fetchClients().subscribe(
      {
        next:(data)=>{
          console.log(data)
          this.error=""
          this.clients=data
        },
        error:(err)=>{
          console.log(err)
          this.error=err.error
        }
      }
    )
  }
}
