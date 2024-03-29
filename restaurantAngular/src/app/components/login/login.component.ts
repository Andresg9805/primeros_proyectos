import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { Contacto } from 'src/app/models/contacto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  contactoForm: FormGroup;
  regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
  regexNumero = /^[0-9]+$/;
  regexLetra = /^[a-zA-Z\s]+$/;


  constructor(private fb: FormBuilder) {
    this.contactoForm = this.fb.group({
      correo: ['', [Validators.required, Validators.pattern(this.regexCorreo)]],
      nombre: ['', [Validators.required,Validators.pattern(this.regexLetra)]],
      direccion: ['', [Validators.required, Validators.minLength(5)]],
      edad: ['', [Validators.required, Validators.pattern(this.regexNumero)]],
      ciudad: ['', [Validators.required,Validators.pattern(this.regexLetra)]],
      mensaje: ['', [Validators.required]]
    })
  }
  ngOnInit(): void {
  }
  guardarContacto() {
    // console.log(this.contactoForm);
    const contactoUsuario: Contacto = {
      correo: this.contactoForm.get('correo')?.value,
      nombre: this.contactoForm.get('nombre')?.value,
      direccion: this.contactoForm.get('direccion')?.value,
      ciudad: this.contactoForm.get('ciudad')?.value,
      mensaje: this.contactoForm.get('mensaje')?.value,
      edad: this.contactoForm.get('edad')?.value
    }
    console.log(contactoUsuario);
  }

}
