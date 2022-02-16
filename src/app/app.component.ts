import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-app';
  count:number = 0;
  buttonPress(){
  this.count++;
  }

  hideLabel:boolean = true;
  counter:number = 0;
  hideImg(){
  if(this.hideLabel)
    {
      this.hideLabel = false;
    }
    else{
      this.hideLabel = true;
    }
  //this.hideLabel = false;
  }
}


