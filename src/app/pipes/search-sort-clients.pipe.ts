import { Pipe, PipeTransform } from '@angular/core';
import { Client } from '../models/client';

@Pipe({
  name: 'searchSortClients',
  standalone: true
})
export class SearchSortClientsPipe implements PipeTransform {

  transform(clients:Client[],searchInput:string): Client[] {

    const filteredClients=clients.filter((client)=>client.name.toLowerCase().includes(searchInput))
    return filteredClients.sort((client1,client2)=>client1.name.localeCompare(client2.name))
  }

}
