import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.sample-component',
  templateUrl: './sample-component.component.html',
  styleUrls: ['./sample-component.component.css']
})
export class SampleComponentComponent implements OnInit {
  title = 'Sample Component Title';
  isDisabled = false;
  twoWay= 'TEST';
  styleName = 'custom';
  styleName2 = 'custom1';
  showMessage = true;

  arrNames = ['Matthew', 'Psalter', 'Ian', 'Jaenor', 'Rhein'];

  constructor() { 
    this.title = 'New Sample Component Title';
  }

  ngOnInit(): void {
    this.title = 'Super New Sample Component Title';
  }

  onClick()
  {
    this.title = "The real me";
  }

  changeStyleNameColor() : string
  {
    let color = 'red';
    if(this.styleName === 'custom'){
      color = 'grey'
    }
    return color;
  }
}
