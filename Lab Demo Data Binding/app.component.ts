import { Component } from '@angular/core';
import { NgControlStatus } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This String is interpolated';
  clientName = 'Luise Yambao'
  appliedCSS = 'red';
  notAppliedCSS = false;
  myColor ='green';

  clickCount=0;
  clickMe() {
    this.clickCount++;
  }

  showData($event: any) {
    console.log('Button is clicked!');
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }
}


