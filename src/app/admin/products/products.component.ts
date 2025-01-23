import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'], // Use styleUrls, not styleUrl
})
export class ProductsComponent {
  mostrarFormulario: boolean = false;
  datos: any[] = [];

  // Manejador del botón para mostrar/ocultar formulario
  mostrarFormularioHandler() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

  // Función para enviar el formulario
  enviarFormulario(formData: any) {
    // Asegurarse de que los campos estén definidos, de lo contrario, usar 'No proporcionado'
    const nuevoDato = {
      nombre: formData.nombre || 'No proporcionado',
      correo: formData.email || 'No proporcionado',
      telefono: formData.telefono || 'No proporcionado',
      direccion: formData.direccion || 'No proporcionado',
      rol: formData.rol || 'No proporcionado'
    };

    // Agregar el nuevo dato al arreglo de datos
    this.datos.push(nuevoDato);

    // Limpiar el formulario
    formData.nombre = '';
    formData.email = '';
    formData.telefono = '';
    formData.direccion = '';
    formData.rol = '';

    // Ocultar el formulario después de enviar
    this.mostrarFormulario = false;
  }
}
