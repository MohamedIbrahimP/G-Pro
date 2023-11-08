import { Component } from '@angular/core';

@Component({
  selector: 'app-a-side',
  templateUrl: './a-side.component.html',
  styleUrls: ['./a-side.component.css']
})
export class ASideComponent {
toggle:boolean=false;
dropDown(){
this.toggle=!this.toggle
}






}
