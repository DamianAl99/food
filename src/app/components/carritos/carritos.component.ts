import { Component, OnInit } from '@angular/core';
import { productosDTO } from 'src/app/models/productosDTO';

@Component({
  selector: 'app-carritos',
  templateUrl: './carritos.component.html',
  styleUrls: ['./carritos.component.css']
})
export class CarritosComponent implements OnInit {
  private editarURLWhatsApp: string;
  private totalComida: number;
  private productoCarrito:any;
  public ProductosLocalStorage: productosDTO[];
  
  constructor() { 
    this.editarURLWhatsApp =
      'https://api.whatsapp.com/send?phone=595972435586&text=TEXTO';
  }

  ngOnInit(): void {
    this.ProductosLocalStorage = this.ExtraerDatosDelLocalStorage();
    console.log(this.ProductosLocalStorage)
  }
  ExtraerDatosDelLocalStorage(): productosDTO[] {
    return JSON.parse(localStorage.getItem("Pedidos"));
  }

  /*envia el pedido*/
  EnviarWhatsapp() {
    
    let text =
      'Hola!%20le%20saludamos%20de%20Jaumina%20Food,%20el pedido%20elegido%20es:%20';
    let Prodcutos = this.ExtraerDatosDelLocalStorage()
    for(var i=0;i<Prodcutos.length; i++){
      text += `*Producto:%20${Prodcutos[i].nombre},%20`;
      text += `Cantidad:%20${Prodcutos[i].cantidad},%20`;
      text += `Total:%20${Prodcutos[i].precio}`+"%0A";
    }
    window.location.href = this.editarURLWhatsApp.replace("TEXTO", text);
  }
  /*---------------------------------*/
  Eliminar(productosDTO: productosDTO){
    let Prodcutos = this.ExtraerDatosDelLocalStorage();
    Prodcutos.map((x,i)=>{
      if(x.id==productosDTO.id){
        Prodcutos.splice(i, 1);
      }
    })
    localStorage.clear();
    localStorage.setItem("Pedidos", JSON.stringify(Prodcutos));
    this.ngOnInit();
  }
}
