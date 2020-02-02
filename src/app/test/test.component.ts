import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
//import {  } from 'protractor';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  @Input('parentData') public name;

 @Output() public childEvent =new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("Button clicked!");
    this.childEvent.emit("Hey Moshiur!!!")
   // console.log(this.childEvent.emit);
  }


}
