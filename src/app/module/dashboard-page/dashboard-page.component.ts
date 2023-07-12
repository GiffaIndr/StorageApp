import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent {
  showNavigationArrows = false;
	showNavigationIndicators = false;
	images = ["/assets/img/explor.png","/assets/img/memory-card.png","/assets/img/student-boy.png"];

}
