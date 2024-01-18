import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  self = [ 
    { food: 'Banana', lastAte: 'Yesterday'},   
    { food: 'Apple', lastAte: 'Today'}, 
    { food: 'Mango', lastAte: '2 Weeks Ago'}, 
    { food: 'Tomato', lastAte: 'A while Ago'}, 
    { food: 'Grapes', lastAte: 'Yesterday'} 
    ];
}
