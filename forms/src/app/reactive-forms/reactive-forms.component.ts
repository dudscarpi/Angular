import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

/* formUsuario: FormGroup = new FormGroup({
  nome: new FormControl('', [ Validators.required ]),
  username: new FormControl('', [ Validators.required ]),
  email: new FormControl('', [ Validators.required ]),
  senha: new FormControl('', [ Validators.required, Validators.minLength(8) ]),
  genero: new FormControl('', [ Validators.required ]),
  termos: new FormControl(true, [ Validators.requiredTrue ])
}) */

formUsuario: FormGroup = this.fb.group({
  nome: this.fb.control('',[ Validators.required ]),
  username: this.fb.control('',[ Validators.required ]),
  senha: this.fb.control('',[ Validators.required, Validators.minLength(8) ]),
  email: this.fb.control('',[ Validators.required ]),
  genero: this.fb.control('',[ Validators.required ]),
  termos: this.fb.control(true,[ Validators.requiredTrue ]),
  telefones: this.fb.array([
    this.fb.control('',[ Validators.requiredTrue ]),
    this.fb.control('',[ Validators.requiredTrue ])
  ])
})
tels: FormArray = this.formUsuario.get('telefones') as FormArray

  constructor(
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
  }

  enviar(): void{
    console.log(this.formUsuario.value)
    console.log(this.formUsuario.controls)
  }

  adicionarCampoTelefone(): void{
    if (this.tels.controls.length < 5)
    this.tels.controls.push(this.fb.control('',[ Validators.requiredTrue ]))
  }
}
