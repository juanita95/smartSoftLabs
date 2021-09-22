import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Campaing } from '../../../campaing/models/campaing.model';
import { EnumTypeRequestService } from '../../services/enum-type-request.service';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {

  action:string;
  local_data:any;
  title: string;

  constructor(
    private enumService: EnumTypeRequestService,
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Campaing) {
      this.local_data = {...data};
      this.action = this.local_data.action;
  }

  ngOnInit(): void{
    this.getRequest();
  }

  getRequest(): void {
    const request = this.enumService.getTypeRequest();
    this.title=request.find((data)=>data.Id === this.action).Description;
  }

  UpdateDeleteCampaing(): void{
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog():void{
    this.dialogRef.close({event:'Cancel'});
  }

}
