import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  standalone: true,
})
export class CounterComponent {
  counter = 0;

  increment(){
    this.counter++;
  }

  decrement(){
    if(this.counter > 0){
      this.counter--;
    }
  }

  reset(){
    this.counter = 0
  }
}
