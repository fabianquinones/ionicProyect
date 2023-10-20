import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  public profile: { nombre: string, password: string } = JSON.parse(localStorage.getItem('usuario'));
  public name = (this.profile && this.profile.nombre) ? this.profile.nombre : "";

  constructor(public navController:NavController, private router: Router ) { }

  ngOnInit() {
    console.log(localStorage.getItem('usuario'))
    if (localStorage.getItem ('usuario') ==null){
      this.navController.navigateRoot('')
    }

  }
  async salir(){
    localStorage.removeItem("usuario")
    this.navController.navigateRoot("login")
  
  }
  cambiodepagina($event: any){
    let direccion = $event.detail.value;
    this.router.navigate(['/landing/'+direccion]);
  }

}
