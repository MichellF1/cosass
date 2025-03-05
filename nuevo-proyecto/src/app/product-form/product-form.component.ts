import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  newProduct = { name: '', price: 0, quantity: 0 };
  products: any[] = [];

  addProduct() {
    if (this.newProduct.name && this.newProduct.price > 0 && this.newProduct.quantity > 0) {
      this.products.push({ ...this.newProduct });
      this.newProduct = { name: '', price: 0, quantity: 0 }; // Reiniciar el formulario
    }
  }

  removeProduct(index: number) {
    this.products.splice(index, 1);
  }

  getTotal() {
    return this.products.reduce((sum, product) => sum + product.quantity * product.price, 0);
  }
}
