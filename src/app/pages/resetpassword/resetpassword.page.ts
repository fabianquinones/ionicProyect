import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
})
export class ResetpasswordPage implements OnInit {

  formularioreset: FormGroup;

  constructor(public fb: FormBuilder, public alertController:AlertController,public NavController: NavController) {
    this.formularioreset=this.fb.group({
      'nombre': new FormControl("",Validators.required),

    })
   }

  ngOnInit() {
  }
  async ingresar() {
    var f = this.formularioreset.value;
  
    // Obtener el objeto usuario del almacenamiento local
    var usuarioString = localStorage.getItem('usuario');
    //redirijir a la cosa
    
  
    if (usuarioString) { // Verificar si existe un usuario en el almacenamiento local
      var usuario = JSON.parse(usuarioString);
  
      if (usuario && usuario.nombre) { // Verificar que el objeto usuario y sus propiedades existan
        if (usuario.nombre === f.nombre ) {
          console.log('Ingresado');
          this.NavController.navigateRoot('login')
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
