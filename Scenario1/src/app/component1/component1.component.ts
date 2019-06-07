import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  template: `
  <h2>
  Welcome {{name}}
  </h2>
  <input #myInput type="text">
  <button (click)="logMessege(myInput.value)">Log</button>
  `,
  styles: []
})
export class Component1Component implements OnInit {

  public name = "Codevolution";
  constructor() { }

  ngOnInit() {
  }
  logMessege(value){
    console.log(value);
  }

}
