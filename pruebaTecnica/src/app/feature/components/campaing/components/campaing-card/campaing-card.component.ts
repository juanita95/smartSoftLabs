import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Campaing } from '../../models/campaing.model';
import { CampaingService } from '../../services/campaing.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../../../dialog-box/components/dialog-box/dialog-box.component';

@Component({
  selector: 'app-campaing-card',
  templateUrl: './campaing-card.component.html',
  styleUrls: ['./campaing-card.component.scss']
})
export class CampaingCardComponent implements OnInit {

  @Output() updateDateEvent = new EventEmitter<Campaing>();

  @Input() campaing : Campaing[]= []
  campains= []
  displayedColumns: string[] = ['ImgCamp', 'CampData', 'Datacamp', 'action'];

  constructor(
    private campaingService: CampaingService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.campains = this.campains.concat(this.campaing);
  }

    openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data:obj,
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result){
        return;
      }
      result.event === 'Update'
       ? this.updateRowData(result.data)
       : this.deleteRowData(result.data);
    });
  }


  updateRowData(campaing: Campaing){
    if(!campaing){
      return;
    }
    this.campaingService.updateCampaing(campaing).subscribe(()=>{
      this.updateDateEvent.emit();
    })
  }

  deleteRowData(campaing: Campaing){
    if(!campaing){
      return;
    }
    this.campaingService.deleteCampaing(campaing.id).subscribe(()=>{
      this.updateDateEvent.emit();
    })
  }
}
