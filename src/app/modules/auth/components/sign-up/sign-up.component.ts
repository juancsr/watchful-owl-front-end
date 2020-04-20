import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
    form: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
      //private authService: AuthService,
      private router: Router
  ) { 
      this.buildForm();
  }

    /*
     * Asigna valores por defecto a los campos del formulario y le agrega validaciones
     * */
    private buildForm() {
        this.form = this.formBuilder.group(
            {
                firstname: ['', [Validators.required]],
                lastname: ['', [Validators.required]],
                email: ['', [Validators.required, Validators.email]],
                password: ['', [Validators.required]]
            }
        )
    }

  ngOnInit() {
  }

    /*
     * Realiza el registro de un usuario en la aplicación utilizando el servicio registerService
     * # implementar el uso del servicio de autenticación
     */
    register(event: Event) {
        event.preventDefault();
        if (this.form.valid) {
            const value = this.form.value;
            console.log(value)
            this.router.navigate(['/home']);
        } else {
            console.log('Formulario invalido')
        }
    }

}
