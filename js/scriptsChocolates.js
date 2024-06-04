let chocolates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let galeriaChocolates = document.getElementById('galeriaChocolates');

// Código JS para generar que repetir la linea de código dentro del for n veces, solo sirve cuando las imagenes son del mismo tipo
for(img of chocolates){
    galeriaChocolates.innerHTML += `
    <div class="card">
    <img src="images/dulces/productosChocolate/${img}.jpg" alt="" class="card-img-top">
    </div>`
}