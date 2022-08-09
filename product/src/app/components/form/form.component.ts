import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class ProductFormDialogComponent implements OnInit {
  
  @Output()
  productForm: FormGroup = this.formBuilder.group({
    name: ['', [ Validators.required ]],
    price: ['', [ Validators.required, Validators.min(1) ]],
    picture: ['', [ Validators.required ]]
  })


  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }
}

