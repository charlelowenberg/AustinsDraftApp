import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent{
  isIn = false;   // store state
    toggleState() { // click handler
        let bool = this.isIn;
        this.isIn = bool === false ? true : false;
    }

    navbarOpen = false;

    toggleNavbar() {
      this.navbarOpen = !this.navbarOpen;
    }
  onSubmit(){



  }



}
