import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  imgSrc: string = ''

  @Input()
  productName: string = 'Tenis Vans Old School'

  @Input()
  productPrice: number = 300

  constructor(
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  buy() {
    this.snackBar.open(`${this.productName} comprado!`, 'Ok', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }
}