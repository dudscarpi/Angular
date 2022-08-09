import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductFormDialogComponent } from './components/form/form.component';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showFiller = false;

  products: Product[] = []

  constructor(
    private dialog: MatDialog
  ) {}

  openForm() {
    const dialogRef = this.dialog.open(ProductFormDialogComponent)
    dialogRef.afterClosed().subscribe(
      value => {
        if (value) {
          this.products.push(value)
        }
      }
    )
  }
}

