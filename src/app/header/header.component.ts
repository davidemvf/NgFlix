import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  active :string = "home";

  constructor() { }

  ngOnInit(): void {
    
    console.log(this.active);
    
  }
  
  isActive(arg: string ) {
    if (arg === this.active) {
        return true;
    }
  }

  makeActive(arg: string) {
    this.active = arg;
    console.log(this.active);
    
  }

  

}
