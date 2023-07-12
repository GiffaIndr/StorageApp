import { Component } from '@angular/core';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.scss']
})
export class AlbumPageComponent {
  showNavigationArrows = false;
	showNavigationIndicators = false;
	images = ["/assets/img/desk2.jpg","/assets/img/5856.jpg"];

  visibleNotificationDialog = false;
  
  visibleAddDialog = false;
  
  showAddDialog(){
    this.visibleAddDialog = true;
  
  }

  onCloseAddDialog(stat: boolean){
    this.visibleAddDialog = stat;
  }

 
}
