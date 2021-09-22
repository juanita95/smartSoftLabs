import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, HostListener, OnInit, ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  innerWidth: number;
  maxWidth: number = 800;

  constructor(private observer: BreakpointObserver) {}

  ngOnInit(): void{

  }

  ngAfterViewInit() {
    this.observer
      .observe([`(max-width: ${this.maxWidth}px)`])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }


  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.innerWidth = event.srcElement.innerWidth;
  }

  openCloseSideBar(): void{
    if(this.innerWidth>this.maxWidth){
      return;
    }
    this.sidenav.toggle();
  }

}
