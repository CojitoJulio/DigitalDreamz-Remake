const devices = [
    {
        name: "Samsung Galaxy S23 Ultra",
        id: "0",
        image: "img/catalogo/s23ultra.png",
        colorOptions: ["white", "black", "gray", "coral", "green", "lavender"],
        prices: [1249990, 1449990, 1599990],
        storageOptions: [256, 512, 1024]
    },
    {
        name: "Samsung Galaxy S23 Plus",
        id: "1",
        image: "img/catalogo/s23plus.png",
        colorOptions: ["white", "black", "gray", "coral", "green", "skyblue"],
        prices: [999990, 1199990],
        storageOptions: [256, 512]
    },
    {
        name: "Samsung Galaxy S23",
        id: "2",
        image: "img/catalogo/s23.png",
        colorOptions: ["white", "black", "gray", "coral", "green", "skyblue"],
        prices: [799990, 899990, 1099990],
        storageOptions: [128, 256, 512]
    },
    {
        name: "Xiaomi 13 Pro",
        id: "3",
        image: "img/catalogo/xiaomi13pro.png",
        colorOptions: ["white", "black", "green", "skyblue"],
        prices: [1299990, 1399990, 1499990],
        storageOptions: [128, 256, 512]
    },
    {
        name: "Google Pixel 7 Pro",
        id: "4",
        image: "img/catalogo/pixel7pro.png",
        colorOptions: ["white", "black", "gold", "green"],
        prices: [699990, 799990, 899990],
        storageOptions: [128, 256, 512]
    },
    {
        name: "Xiaomi 12T",
        id: "5",
        image: "img/catalogo/xiaomi12t.png",
        colorOptions: ["black", "skyblue", "gray"],
        prices: [399990, 479990],
        storageOptions: [128, 256]
    },
    {
        name: "OnePlus 11",
        id: "6",
        image: "img/catalogo/oneplus11pro.png",
        colorOptions: ["black", "green"],
        prices: [599990, 659990],
        storageOptions: [128, 256]
    },
    {
        name: "Samsung Galaxy Fold 4",
        id: "7",
        image: "img/catalogo/fold4.png",
        colorOptions: ["black", "cian", "gold"],
        prices: [1299990, 1359990, 1459990],
        storageOptions: [256, 512, 1024]
    }
];

// -----------------------------------------------  Crear Tarjetas de telefonos

function calculatePrice(device, pricetotal) {

  const productsList = document.querySelector('.catalogo'); 
  let idalmacena = 0;

    productsList.addEventListener('click', e => {

      if (e.target.getAttribute("id")){
        if(e.target.parentElement.getAttribute("id") == "phone" + device.id ){
          
          switch(e.target.getAttribute("id")) {
            case "almace0":
              pricetotal = device.prices[0];
              idalmacena = 0;
              break;
            case "almace1":
              pricetotal = device.prices[1];
              idalmacena = 1;
              break;
            case "almace2":
              pricetotal = device.prices[2];
              idalmacena = 2;
              break;
            case "almace3":
              pricetotal = device.prices[3];
              idalmacena = 3;
              break;
            default:
              console.log("No se ha seleccionado almacenamiento");
          }
        };
      }

    let valorDevice = document.querySelector("#phonep" + device.id);

    valorDevice.innerText = `$${pricetotal}`

    });

};

function createStorageSelector(device) {
    let selectorHTML = `<div class="almace-tile-group">`;
  
    for (let i = 0; i < device.storageOptions.length; i++) {
      const storage = device.storageOptions[i];

      if (i == 0) {
        selectorHTML += `
        <div class="tamanios" id="phone${device.id}">
            <input class="almacenai" data-price="${device.prices[i]}" type="radio" name="almacenamiento${device.id}" id="almace${i}" checked>
            <div class="radio-almacena">${storage} GB</div>
        </div>
      `;
      }else{
        selectorHTML += `
        <div class="tamanios" id="phone${device.id}">
            <input class="almacenai" data-price="${device.prices[i]}" type="radio" name="almacenamiento${device.id}" id="almace${i}" >
            <div class="radio-almacena">${storage} GB</div>
        </div>
      `;
      }
    }
    selectorHTML += `</div>`;
  
    return selectorHTML;
};

function createColorSelector(device) {
    let selectorHTML = `<div class="radio-tile-group">`;
  
    for (let i = 0; i < device.colorOptions.length; i++) {
      const color = device.colorOptions[i];

      if (i == 0) {
        selectorHTML += `
        <div class="colores">
            <input type="radio" name="colorr${device.id}" id="color${i}" checked>
            <div class="radio-color" style="background-color: ${color};"></div>
          </div>
      `;
      }else{
        selectorHTML += `
        <div class="colores">
            <input type="radio" name="colorr${device.id}" id="color${i}">
            <div class="radio-color" style="background-color: ${color};"></div>
          </div>
      `;
      }
    }
    selectorHTML += `</div class="radio-tile-group">`;
  
    return selectorHTML;
};

const devicesContainer = document.getElementById("catalogo");

for (let i = 0; i < devices.length; i++) {

    const device = devices[i];
    let pricetotal = device.prices[0]

    const containerProduct = document.createElement('div')
    containerProduct.classList.add('catalog-product')

    containerProduct.innerHTML = `
    <div class="card" style="width: 20rem;" id="ca4">
    <img src="${device.image}" class="card-img-top" alt="${device.name}">
    <div class="card-body">
      <h5 class="card-title" title="${device.id}">${device.name}</h5>

      <div class="colores-container">
        ${createColorSelector(device)}
      </div>

      <div class="almacenamiento">
        ${createStorageSelector(device)}
      </div>

      <span class="card-price" id="phonep${device.id}">$${pricetotal}</span>

      <!-- Agregar al carrito -->
      <button type="button" class="btn btn-primary add-cart" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <svg   xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
      </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel" style="color: #252525;">Se añadio a carrito</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    calculatePrice(device, pricetotal);
    devicesContainer.append(containerProduct);
}

// ----------------------------- Carrito

const cartProduct = document.querySelector('.carrito-items');
const cartProductList = document.querySelector('.catalogo');
let allProducts = [];
const valorTotal = document.querySelector('.carrito-total').querySelector('p');
const countProducts = document.querySelector('.count-cart');  //----

cartProductList.addEventListener('click', e => {

  if (e.target.classList.contains('add-cart')) {
    let product = e.target.parentElement

    // Valor
    const valor = parseInt(product.querySelector('span').textContent.slice(1))

    // Almacenamiento
    let elemento = product.querySelector('[data-price="'+ valor + '"]')

    if (elemento.dataset.price == valor){
      var espacio = elemento.parentElement.querySelector(".radio-almacena").textContent;
    }

    // Color
    const inputs = product.querySelectorAll('.colores input[type="radio"]');

    let color;

    inputs.forEach(input => {
      if (input.checked) {
        color = input.nextElementSibling.style.backgroundColor;
      }
    });
    
    const idproduct = product.querySelector('h5').title;

    const infoProduct = {
        quantity: 1,
        title: product.querySelector('h5').textContent,
        price: valor,
        capacity: espacio,
        color: color,
        image: product.parentElement.querySelector('img').src,
        id: idproduct + color.substring(0,3) + espacio.substring(0, espacio.length - 4)
    }

    const exits = allProducts.some(product => product.id === infoProduct.id)

    if (exits){
      const products = allProducts.map(product => {
        if(product.id === infoProduct.id){
          product.quantity++;
          return product
        }else{
          return product
        }
      })
      allProducts = [...products];
    }else{
      allProducts = [...allProducts, infoProduct];
    }

    showCart();
  }

})

cartProduct.addEventListener('click', (e) => {

  if(e.target.classList.contains('trash')){
      const product = e.target.parentElement;
      const id = product.title
      
      allProducts = allProducts.filter(
        product => product.id !== id
        );
      showCart();
  }
  if(e.target.classList.contains('mas')){
      const idprod = e.target.parentElement.title;

      allProducts.map(product => {
        if(product.id === idprod){
          product.quantity++;
          return product
        }else{
          return product
        }
      })
      showCart();
  }
  if(e.target.classList.contains('menos')){
      const idprod = e.target.parentElement.title;

      allProducts.map(product => {
        if(product.id === idprod){
          product.quantity--;
          return product
        }
      })

      allProducts.map(product => {
        const productx = e.target.parentElement;
        const id = productx.title
        if(product.quantity == 0){
          allProducts = allProducts.filter(
            product => product.id !== id
            );
          return product
        }
      }) 
      showCart();
  }
})

// Mostrar Carrito

const showCart = () => {

  // Limpiar
  cartProduct.innerHTML = '';

  let total = 0;
  let totalOfProducts = 0;

  allProducts.forEach(product => {

    const containerCartProduct = document.createElement('div');
    containerCartProduct.classList.add('item')

    let value = product.price;

    containerCartProduct.innerHTML = `
    <div class="carrito-foto"><img src="${product.image}" alt="${product.title}"></div>
    <div class="carrito-descripcion">
      <div class="carrito-nombre">
        <h2>${product.title}</h2>
      </div>
      <div class="carrito-detalles">
        <div class="carrito-color">
          <p>${product.color}</p>
        </div>
        <div class="carrito-almacenamiento">
          <p>${product.capacity}</p>
        </div>
      </div>
      <div class="carrito-seleccion">
        <div class="carrito-cantidad">
          <ul class="botones-cantidad" title="${product.id}">
            <button class="menos">-</button>
            <div id="cantidad"><h2>${product.quantity}</h2></div>
            <button class="mas">+</button>
          </ul>
        </div>
        <button id="trash" title="${product.id}"><i class="fa-regular fa-trash-can fa-lg trash" style="color: #d10000;"></i></button>
      </div>
      <div class="carrito-precio">
        <p>$${value}</p>
      </div>
    </div>
    `
    cartProduct.append(containerCartProduct);

    total = total + (product.quantity * product.price);
    totalOfProducts = totalOfProducts + product.quantity;
  });

  valorTotal.innerText = `$${total}`;
  countProducts.innerText = totalOfProducts;
}

showCart();