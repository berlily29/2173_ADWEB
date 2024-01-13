import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  //data interpolations
  title = 'Activity 3 Luise Yambao';
  companyName = "Channel A Media";
  line='black'
  subscribecolor='red'
  mode='Not Subscribed';
  imageLogo='assets/ChannelALogo.jpg';
  serviceOne='ADVERTISING';
  serviceTwo='MEDIA PRODUCTION'
  serviceThree='ENTERTAINMENT'
  logoClass='logo';


  //event binding
  subscribeFunction($event:any) {
    this.mode='You are now Subscribed';
    this.subscribecolor='green';
  }
}
