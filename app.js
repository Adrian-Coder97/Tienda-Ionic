const nombreProducto = document.querySelector('#nombre');
const precioProducto = document.querySelector('#precio');
const btnGuardar = document.querySelector('#guardar');
const btnLimpiar = document.querySelector('#limpiar');
const listaProducto = document.querySelector('#lista');

const nuevo = (name, price) => {
    const ionCard = document.createElement('ion-card');
    const nuevoItem = document.createElement('ion-card-content');
    nuevoItem.textContent = name + ': $'+ price;
    ionCard.appendChild(nuevoItem);
    listaProducto.appendChild(ionCard);
}

btnGuardar.addEventListener('click', () => {
    const name = nombreProducto.value;
    const price = precioProducto.value;
    console.log("Nombre = " + name + " Price = " + price);
    nuevo(name, price); 
});