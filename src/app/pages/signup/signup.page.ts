import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validator,UntypedFormBuilder, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  formularioregistro: FormGroup;

  constructor(public fb:FormBuilder, public alertController: AlertController) {
    this.formularioregistro=this.fb.group({
      'nombre':new FormControl("",Validators.required),
      'password':new FormControl("",Validators.required),
      'confirm':new FormControl("",Validators.required)
    });
   }

  ngOnInit() {
  }
  async guardar(){

    var f = this.formularioregistro.value;

    if(this.formularioregistro.invalid){
      const alert = await this.alertController.create({
        message:'llena todo',
        buttons:['aceptar']
      });
      await alert.present();
      return;
    }
    var usuario={
      nombre: f.nombre,
      password: f.password
    }
    
    localStorage.setItem('usuario',JSON.stringify(usuario));
  }
}
