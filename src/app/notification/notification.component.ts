import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  notification="this site uses cookies"

  hidden = false;

  toogleHidden(){
    this.hidden = true
  }
}
