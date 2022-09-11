/*
Creamos un programa donde:
Opcion 1:
_ cargamos productos
_Si el producto cargado coincide en la "categoria" y el "nombre", permite actualizar el presio y la cantidad. Mostrando con un alert el producto modificado

Opcion 2:
_Realizamos un filtro para ver los productos con el precio minimo que elijamos.

Opcion 3:
_Buscamos un producto por el nombre

*/


/* Creamos la/las Clases a utilizar */
class Producto {
  constructor(nombre, precio, cant, categoria,img,descrip) {
    this.nombre = nombre;
    this.valorUnidad = parseFloat(precio);
    this.stock = cant === 0 || cant === "" ? 1 : parseInt(cant); //dejamos que por defecto ponga 1 si no obtenemos un resultado
    this.categ = categoria === "" || (categoria != "E" && categoria != "L" && categoria != "A")? "O": categoria; //Colocamos la validacion para evitar un valor no deseado
    this.img=img===""?"#":img;
    this.descrip=descrip===""?"Sin descripción del producto":descrip;
    this.activo=this.stock<1?false:true; // campo que sera utilizado en próximos envios para filtrar productos que queden sin stock
  }
  categoria=()=>{ //la funcion permite mostrar el nombre de la categoria dependiendo de la Letra que tenga en dicho campo
    if (this.categ==="E"){
      return "Electrodomesticos"
    } else if (this.categ==="A"){return"Almacen"} else if(this.categ==="L") {return"Libreria"} else {return "Otros"}

  }

  mostrar=()=>{ //mostramos en un alert los campos del producto
   return alert(`Nombre del Producto: ${this.nombre} \n Precio: ${this.valorUnidad} \n Categoria del Producto: ${this.categoria()} \n Stock: ${this.stock}`)
  }

}

const productos = [];
let categProducto;
let nombreProducto;
productos.push(
  new Producto("Kit Daewoo Amoladora Angular 750w + Taladro Percutor 550w", 11500,2,"O","./medias/img_Art_Mas_Vendidos_03.JPG"," Lo que tenés que saber de este producto Apta para un disco de 115 mm de diámetro. \nAlcanza una profundidad de corte de 115 mm.\nTrae interruptor tecla. Su potencia es de 750 W."),
  new Producto("Auriculares Inalambricos", 9900, 10, "E","/medias/img_Art_Mas_Vendidos_01.JPG","Auricular. Bluetooth. El formato perfecto para vos: al serin-ear, aislan el ruido del exterior, mejoran la calidad del audio y son de tamano pequeno para poder insertarse en tu oreja.Son ideales para acompanarte a la hora de hacer ejercicio mientras te sumergis en el mejor sonido envolvente. Base descarga: 800 mAh."),
  new Producto("DICCIONARIO", 1110, 3, "L"),
  new Producto("MOTO",15000,3,"O"),
  new Producto("TV",8000,5,"E"),
  new Producto("CAFE",1500,5,"A")
);

for(const item of productos){

let section_ProdCarrito=document.getElementById("section_ProdCarrito");

let contProdCarrito=document.createElement("div");
 contProdCarrito.className="card row g-0 m-1 cont_Prod_Carrito";

let carrito_Cont_img=document.createElement("div");
carrito_Cont_img.className="col-md-2 col-12 d-flex";

let contImgCarrito=document.createElement("img");
contImgCarrito.className="img-fluid rounded-start carrito__img_art";
contImgCarrito.src=item.img;
contImgCarrito.alt="img_carrito"

 

 let prodSeccion1Carrito=document.createElement("div");
 prodSeccion1Carrito.className="col-md-6 col-12";

let carrito_CardBody=document.createElement("div");
carrito_CardBody.className="card-body";

let carrito_TituloProducto=document.createElement("h5");
carrito_TituloProducto.className="card-title";
carrito_TituloProducto.innerHTML=item.nombre;

let carrito_descripProd=document.createElement("p");
carrito_descripProd.className="card-text"
carrito_descripProd.innerHTML=item.descrip;

let carrito_ValorProd=document.createElement("div");
carrito_ValorProd.className="col-md-2 d-flex carrito__cont_cant_art";
carrito_ValorProd.innerHTML=`<h1>$${item.valorUnidad}</h1>`

let carrito_TexIncremntCant=document.createElement("div");
carrito_TexIncremntCant.className="col-md-2 d-flex carrito__cont_text_art col-12";
carrito_TexIncremntCant.innerHTML="<h4>Cantidad</h4>";

let carrito_IncremntBotones= document.createElement("div");
carrito_IncremntBotones.className="d-flex carrito__cont_cant_art col-12";

let carrito_ContBtnResta= document.createElement("div");
carrito_ContBtnResta.className="carrito__simb_art";

let carrito_btnResta=document.createElement("a");
carrito_btnResta.href="#";
carrito_btnResta.innerHTML="-";

let carrito_ContBtnSuma=document.createElement("div");
carrito_ContBtnSuma.className="carrito__simb_art";

let carrito_btnSuma=document.createElement("a");
carrito_btnSuma.href="#";
carrito_btnSuma.innerHTML="+";


let carrito_valorCant=document.createElement("div");
carrito_valorCant.className="carrito__text_art";
carrito_valorCant.innerHTML="1";

let carrito_subMenuProd=document.createElement("div");
carrito_subMenuProd.className="col-md-8 carrito__art_link d-flex col-12";

let carrito_subMenu_opc1=document.createElement("a");
carrito_subMenu_opc1.className="col-3 col-md-2";
carrito_subMenu_opc1.innerHTML="Eliminar";

let carrito_subMenu_opc2=document.createElement("a");
carrito_subMenu_opc2.className="col-2 col-md-1";
carrito_subMenu_opc2.innerHTML="Ver";

let carrito_subMenu_opc3=document.createElement("a");
carrito_subMenu_opc3.className="col-7 col-md-5";
carrito_subMenu_opc3.innerHTML="Mas Productos del vendedor";



section_ProdCarrito.appendChild(contProdCarrito);
contProdCarrito.appendChild(carrito_Cont_img);
carrito_Cont_img.appendChild(contImgCarrito);
contProdCarrito.appendChild(prodSeccion1Carrito);
prodSeccion1Carrito.appendChild(carrito_CardBody);
carrito_CardBody.appendChild(carrito_TituloProducto);
carrito_CardBody.appendChild(carrito_descripProd);
contProdCarrito.appendChild(carrito_ValorProd);
contProdCarrito.appendChild(carrito_TexIncremntCant);
carrito_TexIncremntCant.appendChild(carrito_IncremntBotones); 
carrito_IncremntBotones.appendChild(carrito_ContBtnResta);
carrito_ContBtnResta.appendChild(carrito_btnResta);

carrito_IncremntBotones.appendChild(carrito_valorCant);

carrito_IncremntBotones.appendChild(carrito_ContBtnSuma);
carrito_ContBtnSuma.appendChild(carrito_btnSuma);

contProdCarrito.appendChild(carrito_subMenuProd);
carrito_subMenuProd.appendChild(carrito_subMenu_opc1);
carrito_subMenuProd.appendChild(carrito_subMenu_opc2);
carrito_subMenuProd.appendChild(carrito_subMenu_opc3);

}


/* document.body.append(section_ProdCarrito);
 */
