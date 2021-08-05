import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo:string = 'CRUD ARTICULOS';
  
  mensaje:string = '';

 art= {nombre: 'PELOTA', categoria: 'DEPORTE', precio:350 ,stock:100 };

  articulos = [
    {nombre: 'PELOTA', categoria: 'DEPORTE', precio:350 ,stock:100 },
    {nombre: 'BICICLETA', categoria: 'DEPORTE', precio:45000,stock:50 },
    {nombre: 'COMPUTADORA', categoria: 'HOGAR', precio:60000,stock:20 }
  ];

  modelo1:any = {};
  modelo2:any = {};
 

  insertar():void{
    this.articulos.push(this.modelo1);
    this.mensaje = 'ARTICULO REGISTRADO';
    this.modelo1 = {};
  }

  eliminar(i):void {
    var respuesta = confirm('Estas seguro querer eliminarlo?');
    if(respuesta) {
      this.articulos.splice(i, 1);
      this.mensaje = 'ARTICULO ELIMINADO';
    }
  }

  valor;
  buscar(i):void {
    
    this.modelo2.nombre = this.articulos[i].nombre;
    this.modelo2.categoria = this.articulos[i].categoria;
    this.modelo2.precio = this.articulos[i].precio;
    this.modelo2.stock = this.articulos[i].stock;
    this.modelo1=this.modelo2;
    this.valor = i;
  }

  editar():void {
    let i = this.valor;
    for(let j = 0; j < this.articulos.length; j++){
      if(i == j) {
        this.articulos[i] = this.modelo1;
        this.mensaje = 'ARTICULO ACTUALIZADO';
        this.modelo2 = {};
        this.modelo1 = {};
      }
    }
  }

  cerrarAlerta():void {
    this.mensaje = '';
  }

}
