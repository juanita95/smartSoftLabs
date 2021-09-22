import { Injectable } from '@angular/core';
import { StatusRequets } from '../models/status-request.dto';

@Injectable({
  providedIn: 'root'
})
export class EnumTypeRequestService {

  getTypeRequest(): StatusRequets[] {
    const request = [
      {
        Id: 'Add',
        Description: 'Añadir',
      },
      {
        Id: 'Update',
        Description: 'Editar',
      },
      {
        Id: 'Delete',
        Description: 'Eliminar',
      },
    ];
    return request;
  }
}
