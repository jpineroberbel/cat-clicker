// Usamos clases y las vistas son estáticas (en HTML)

class gato
{
    constructor(nombre, imagen)
    {
        this.nombre = nombre;
        this.imagen = imagen;
        this.contadorClicks=0;
    }

}


var gatos = [];
window.onload = ()=>
{
    let gatico = new gato("Misifu","g1.jpg")
    let gatico2 = new gato("Leon","g2.jpg")
    gatos.push( gatico );
    gatos.push( gatico2 );
    
    let li;
    gatos.forEach( (gato,i) => {
        li = document.createElement("li");
        li.textContent = gato.nombre;
        li.numGato = i;
        document.getElementById("lista").appendChild(li);       
    });
}
function pulsadoNombre(e)
{
    let gato = gatos[e.target.numGato];
    document.getElementById("imagen").gato = gato;
    document.getElementById("imagen").src = gato.imagen;
    document.getElementById("nombre").textContent = gato.nombre;
    document.getElementById("numClicks").textContent = gato.contadorClicks;
    
}

function incrementaContador(e)
{
    e.target.gato.contadorClicks ++;
    document.getElementById("numClicks").textContent = e.target.gato.contadorClicks;

}
