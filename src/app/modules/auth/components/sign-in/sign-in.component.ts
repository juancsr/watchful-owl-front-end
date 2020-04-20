import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
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
                email: ['', [Validators.required, Validators.email]],
                password: ['', [Validators.required]]
            }
        )
    }

  ngOnInit() {
  }

    /*
     * Realiza el login de la aplicación utilizando el servicio loginService
     * # implementar el uso del servicio de autenticación
     */
    login(event: Event) {
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
