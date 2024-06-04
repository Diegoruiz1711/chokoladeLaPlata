let madre =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
let galeriaMadre = document.getElementById('galeriaMadre');

// Código JS para generar que repetir la linea de código dentro del for n veces, solo sirve cuando las imagenes son del mismo
for(imagen of madre){
    galeriaMadre.innerHTML += `
    <div class="card">
    <img src="images/especiales/dia_de_la_madre/${imagen}.png" alt="" class="card-img-top">
    </div>`
}
