import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { map } from 'rxjs';

@Component({
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `<div style="text=align":center>
   <h3> Decimal Pipe <h3>
   <p> {{decimaNum1 | number}} </p>
   <p> {{decimalNum2 | number}} </p>
   </div>
   `
})
export class AppComponent {
  title='luise Yambao';

  presentDate = new Date(); 
  time$: Observable<Date>;

  constructor() {
    this.time$ = interval(1000).pipe(map(() => new Date()));
  }

  price : number = 20000;
  Fruits = ["Apple","Orange","Grapes","Mango","Kiwi","Pomegranate"];
  
  Num1: number = 823;
  Num2: number = 8111;
  Num3: number = 33;

  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;
  decimalNum3: number = 83.21;
  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};

  a: number = 0.259;
  b: number = 1.3495;
  c: number = 3.23195;
  ngOnInit() {}
}
