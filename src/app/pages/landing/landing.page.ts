import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 
}
export class nombre{
  
  nombreT: string='';

  constructor(){
    this.nombreT = localStorage.getItem('nombreUsuario')  ?? 'admin';
  };
  
  
}