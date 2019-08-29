import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.scss']
})
export class Component3Component implements OnInit {

  constructor() { }
  @Output() childE=new EventEmitter();
  onEnter(value: string) { 
    this.childE.emit(value); 
  }
  ngOnInit() {
  }

}
