let hora_del_te = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48];
let galeriaHT = document.getElementById('galeriaHT');

// Código JS para generar que repetir la linea de código dentro del for n veces, solo sirve cuando las imagenes son del mismo
for(imagen of hora_del_te){
    galeriaHT.innerHTML += `
    <div class="card">
    <img src="images/hora_del_te/${imagen}.jpg" alt="" class="card-img-top">
    </div>`
}
