import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

const ActionsType = {
  Add : 'Añadir',
  Update : 'Editar',
  Delete : 'Eliminar',
}

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {

  title: string;
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
      this.local_data = {...data.campaing};
  }

  ngOnInit(): void{
    this.getRequest();
  }

  getRequest(): void {
    this.title = ActionsType[this.data.action];
  }

  UpdateDeleteCampaing(): void{
    this.dialogRef.close({event:this.data.action, data:this.data});
  }

  closeDialog():void{
    this.dialogRef.close({event:'Cancel'});
  }

}
