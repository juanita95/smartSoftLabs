import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../../../dialog-box/components/dialog-box/dialog-box.component';
import { Campaing } from '../../models/campaing.model';
import { CampaingService } from '../../services/campaing.service';

@Component({
  selector: 'app-campaing',
  templateUrl: './campaing.component.html',
  styleUrls: ['./campaing.component.scss']
})
export class CampaingComponent implements OnInit {

  campaings : Campaing[] = [];

  constructor(
    private campaingService: CampaingService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadCampaings();
  }

  loadCampaings():void{
    this.campaingService.getCampaings().subscribe((campaings)=>{
      this.campaings = campaings;
    })
  }

  updateCampaing(): void{
    this.loadCampaings();
  }

  openDialog(action,obj): void {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }
    });
  }

   addRowData(campaing: Campaing): void{
     if(!campaing){
       return;
     }
    this.campaingService.addCampaing(campaing).subscribe(()=>{
      this.loadCampaings();
    })

  }

}
