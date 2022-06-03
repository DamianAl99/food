import { TypeofExpr } from '@angular/compiler';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { productosDTO } from 'src/app/models/productosDTO';
import { Precios } from '../../Services/Precios';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
})
export class ServiciosComponent implements OnInit {
  public editarURLWhatsApp: string;
  public totalComida: number;
  public precios: object;
  public pedidos: productosDTO[];
  constructor() {
    this.precios = Precios;
    this.editarURLWhatsApp =
      'https://api.whatsapp.com/send?phone=595972435586&text=TEXTO';
  }

  ngOnInit(): void {}

  /*agrega la cantidad con los btns*/
  sumar(id: number): any {
    this.precios[id - 1].cantidad = this.precios[id - 1].cantidad + 1;
  }
  restar(id: number): any {
    if (this.precios[id - 1].cantidad <= 0) {
      this.precios[id - 1].cantidad = 0;
    } else {
      this.precios[id - 1].cantidad = this.precios[id - 1].cantidad - 1;
    }
  }
  /*---------------------------------*/

  AgregarCarrito(argPedido: productosDTO) {
    this.VerificarCantidad(argPedido);
    if (!this.VerificarSiYaHayAlgo()) {
      let newPedido = this.AgregarNewPedidos(argPedido);
      localStorage.setItem('Pedidos', JSON.stringify([newPedido]));
      return;
    }
    this.AgregarPedidosAlArray(argPedido);
  }
  VerificarSiYaHayAlgo(): boolean {
    this.pedidos = this.GetListaDePedidos();
    return this.pedidos != null && [this.pedidos].length > 0 ? true : false;
  }
  GetListaDePedidos(): productosDTO[] {
    if (localStorage.getItem('Pedidos') != null) {
      return JSON.parse(localStorage.getItem('Pedidos'));
    }
    return null;
  }
  VerificarCantidad(pedido: productosDTO) {
    if (pedido.cantidad == 0) {
      alert('Agrega la cantidad');
      return;
    }
  }
  AgregarPedidosAlArray(argPedido: productosDTO) {
    let existeProducto = this.pedidos.findIndex(x => x.id === argPedido.id);
    for (var i = 0; i < this.pedidos.length; i++) {
      if ((this.pedidos[i].id == argPedido.id)) {
        console.log("existe",argPedido)
        this.pedidos[i] = this.AgregarNewPedidos(argPedido, this.pedidos[i].precio, this.pedidos[i].cantidad);
        break;
      }
      if((existeProducto == -1)){
        console.log("no existe",argPedido)
        let newProducts = this.AgregarNewPedidos(argPedido);
        this.pedidos.push(newProducts);
        break;
      }
    };
    localStorage.setItem('Pedidos', JSON.stringify(this.pedidos));
    return;
  }
  AgregarNewPedidos(
    argPedido: productosDTO,
    precioAnterior: number = 0,
    cantidadAnterior: number = 0
  ) {
    return {
      id: argPedido.id,
      cantidad: cantidadAnterior + argPedido.cantidad,
      precio: precioAnterior + argPedido.cantidad * argPedido.precio,
      nombre: argPedido.nombre,
      img: argPedido.img,
    };
  }

}
