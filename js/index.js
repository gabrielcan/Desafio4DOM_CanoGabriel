
class Producto {
  constructor(id,nombre, precio, cant, categoria,img,descrip) {
    this.id=id;
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
}

class ElementoCarrito {
  constructor(producto, cantidad) {
      this.producto = producto;
      this.cantidad = cantidad;
  }
}

const mostrar=()=>{
 
productos.forEach(producto=>{

  section_ProdCarrito=document.getElementById("section_ProdCarrito");
  
  contProdCarrito=document.createElement("div");
   contProdCarrito.className="card row g-0 m-1 cont_Prod_Carrito";
  
  carrito_Cont_img=document.createElement("div");
  carrito_Cont_img.className="col-md-2 col-12 d-flex";
  
  contImgCarrito=document.createElement("img");
  contImgCarrito.className="img-fluid rounded-start carrito__img_art";
  contImgCarrito.src=producto.img;
  contImgCarrito.alt="img_carrito"
  
  prodSeccion1Carrito=document.createElement("div");
  prodSeccion1Carrito.className="col-md-6 col-12";
  
  carrito_CardBody=document.createElement("div");
  carrito_CardBody.className="card-body";
  
  carrito_TituloProducto=document.createElement("h5");
  carrito_TituloProducto.className="card-title";
  carrito_TituloProducto.innerHTML=producto.nombre;
  
  carrito_descripProd=document.createElement("p");
  carrito_descripProd.className="card-text"
  carrito_descripProd.innerHTML=producto.descrip;
  
  carrito_ContBtnAgregar=document.createElement("div");
  carrito_ContBtnAgregar.className="col-md-4 col-12 d-flex justify-content-center align-self-center";

  carrito_btnAgregar=document.createElement("button");
  carrito_btnAgregar.className="btn btn-primary";
  carrito_btnAgregar.value="Agregar";
  carrito_btnAgregar.innerHTML="AGREGAR";
  carrito_btnAgregar.onclick=()=>{

    let elementoCarrito=new ElementoCarrito(producto,1)
    elementosCarrito.push(elementoCarrito)

/*     console.log(elementosCarrito) */
    dibujarCarrito(); //agrego el producto al array cuando presiono el boton "agregar"

  }





  section_ProdCarrito.appendChild(contProdCarrito);
  contProdCarrito.append(carrito_Cont_img,prodSeccion1Carrito,carrito_ContBtnAgregar);
  carrito_ContBtnAgregar.append(carrito_btnAgregar);
  carrito_Cont_img.appendChild(contImgCarrito);
  
  prodSeccion1Carrito.appendChild(carrito_CardBody);
  carrito_CardBody.append(carrito_TituloProducto,carrito_descripProd);
} )
  }

  const agregarProductos=()=>{
    productos.push(
      new Producto(1,"Kit Daewoo Amoladora Angular 750w + Taladro Percutor 550w", 11500,2,"O","./medias/img_Art_Mas_Vendidos_03.JPG"," Lo que tenés que saber de este producto Apta para un disco de 115 mm de diámetro. \nAlcanza una profundidad de corte de 115 mm.\nTrae interruptor tecla. Su potencia es de 750 W."),
      new Producto(2,"Auriculares Inalambricos", 9900, 10, "E","./medias/img_Art_Mas_Vendidos_01.JPG","Auricular. Bluetooth. El formato perfecto para vos: al serin-ear, aislan el ruido del exterior, mejoran la calidad del audio y son de tamano pequeno para poder insertarse en tu oreja.Son ideales para acompanarte a la hora de hacer ejercicio mientras te sumergis en el mejor sonido envolvente. Base descarga: 800 mAh."),
      new Producto(3,"Libro De Comerciante A Empresario", 1110, 3, "L","./medias/IMG_Articulo5.jpg","En este libro el autor te enseña el camino y te da muchos consejos necesarios para producir el cambio que siempre soñaste. Esta novedosa metodología te enseñará a evolucionar cada paso y a conocer el proceso paso a paso, así podrás moverte de forma ascendente en el mundo de los negocios."),
      new Producto(4,"Zanella Hot 90 Shot Tucumán",15000,3,"O","./medias/IMG_Articulo6.jpg","MOTOZUNI S.A. NO COBRA FORMULARIOS.Jueves 8 y Viernes 9 de Septiembre DESCUENTO sobre el precio publicado. Consultar promoción.Créditos SOLO con DNI. Sin demoras, entrega en el acto. Primera cuota del crédito DNI en el mes de OCTUBRE. TE LLEVAMOS LA MOTO EN EL DÍA"),
      new Producto(5,"Smart Tv Tcl L40s66e 40 Full Hd Android Tv",80000,5,"E","./medias/IMG_Articulo7.jpg","Este modelo en concreto, el de 58 pulgadas, solemos verlo por un precio de casi 1.000 euros, por lo que ahora, con la oferta de El Corte Inglés, podemos llevárnoslo con un precio reducido del 37%, lo que sería un descuento de 360 euros que lo deja a tan solo 599 euros. Un precio muy interesante si estamos buscando un televisor potente, con buena angular de pantalla y un buen precio."),
      new Producto(6,"Café Tostado En Granos Gimoka Italia",1500,5,"A","./medias/IMG_Articulo8.jpg","CAFÉ EN GRANOS ARMONIOSO (ex Cremoso) DE TUESTE NATURAL GIMOKA ITALIA x 500gr")
    );
  }

  const dibujarCarrito=()=> {

    let sumaCarrito = 0;
    contenedorCarritoCompras.innerHTML = "";

    elementosCarrito.forEach(
        (elemento) => {
          console.log(elemento)
            let renglonesCarrito= document.createElement("tr");
            
            renglonesCarrito.innerHTML = `
                <td>${elemento.producto.id}</td>
                <td>${elemento.producto.nombre}</td>
                <td><input id="cantidad-producto-${elemento.producto.id}" type="number" value="${elemento.cantidad}" min="1" max="1000" step="1" style="width: 50px;"/></td>
                <td>$ ${elemento.producto.valorUnidad}</td>
                <td>$ ${estandarDolaresAmericanos.format(elemento.producto.valorUnidad*elemento.cantidad)}</td>
         
            `;

            contenedorCarritoCompras.append(renglonesCarrito);

            sumaCarrito+=elemento.cantidad*elemento.producto.valorUnidad;

            //agregamos evento a carrito
            let cantidadProductos = document.getElementById(`cantidad-producto-${elemento.producto.id}`);
            
            cantidadProductos.addEventListener("change", (e) => {
                let nuevaCantidad = e.target.value;
                elemento.cantidad = nuevaCantidad;
                dibujarCarrito();
            });

        }
    );

    //contenedorCarritoCompras.innerHTML = renglonesCarrito;
    
    if(elementosCarrito.length == 0) {
        contenedorFooterCarrito.innerHTML = `
            <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
        `;
    } else {
        contenedorFooterCarrito.innerHTML = `
            <th scope="row" colspan="5">Total de la compra: $${estandarDolaresAmericanos.format(sumaCarrito)}</th>
        `;
    }

}

/* declaramos la/las variables */

const productos = [];
const elementosCarrito=[];
const contenedorCarritoCompras = document.querySelector("#items")

const contenedorFooterCarrito = document.querySelector("#footer");

const estandarDolaresAmericanos = Intl.NumberFormat('en-US');
let categProducto;
let nombreProducto;
let section_ProdCarrito;
let contProdCarrito;
let carrito_Cont_img;
let contImgCarrito;
let prodSeccion1Carrito;
let carrito_CardBody;
let carrito_TituloProducto;
let carrito_descripProd;
let carrito_ContBtnAgregar; 
let carrito_btnAgregar;
let acumulador=1;




/* respetando el orden de ejecución ejecutamos las funciones */
agregarProductos();
mostrar();
dibujarCarrito();