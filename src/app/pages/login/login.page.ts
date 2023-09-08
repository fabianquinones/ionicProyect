import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  formulariologin: FormGroup;

  constructor(public fb: FormBuilder, public alertController:AlertController,public NavController: NavController) {
    this.formulariologin=this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)

    })
   }

  ngOnInit() {
  }

  async ingresar() {
    var f = this.formulariologin.value;
  
    // Obtener el objeto usuario del almacenamiento local
    var usuarioString = localStorage.getItem('usuario');
    //redirijir a la cosa
    
  
    if (usuarioString) { // Verificar si existe un usuario en el almacenamiento local
      var usuario = JSON.parse(usuarioString);
  
      if (usuario && usuario.nombre && usuario.password) { // Verificar que el objeto usuario y sus propiedades existan
        if (usuario.nombre === f.nombre && usuario.password === f.password) {
          console.log('Ingresado');
          this.NavController.navigateRoot('landing')
        } else {
          const alert = await this.alertController.create({
            header: 'Datos incorrectos',
            message: 'Los datos que ingresaste son incorrectos.',
            buttons: ['Aceptar']
          });
  
          await alert.present();
        }
      } else {
        // Manejo de caso en el que el objeto usuario no tiene las propiedades esperadas
        console.log('El objeto usuario no tiene las propiedades esperadas.');
      }
    } else {
      // Manejo de caso en el que no existe un objeto usuario en el almacenamiento local
      console.log('No hay usuario en el almacenamiento local.');
    }
  }
}
