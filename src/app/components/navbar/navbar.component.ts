import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  currentDay:any=''
  currentMonth:any=''
  currentYear:any=''

  ngOnInit(){
    const currentDate = new Date();
    this.currentDay = currentDate.getDate();
    this.currentMonth = currentDate.toLocaleString('en-US', { month: 'short' });
    this.currentYear = currentDate.getUTCFullYear();
    
    
  
  
  
  }

}
