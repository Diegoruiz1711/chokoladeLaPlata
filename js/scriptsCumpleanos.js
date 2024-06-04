let cumples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34];
let galeriaCumpleanos = document.getElementById('galeriaCumpleanos');

// Código JS para generar que repetir la linea de código dentro del for n veces, solo sirve cuando las imagenes son del mismo tipo
for (img of cumples) {
    galeriaCumpleanos.innerHTML +=
    `<div class="card">
    <img src="images/tortas/cumples/${img}.jpg" alt="" class="card-img-top">
    </div>`
}