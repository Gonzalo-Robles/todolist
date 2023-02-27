//Declaro las variables (coloco .laClase)

let input = document.querySelector('.input')
let agregar = document.querySelector('.boton-agregar')
let contenedor = document.querySelector ('.container')
 
// creo la clase Item con un campo nueva tarea que es utilizada como argumento en el metodo crearDiv.

class Item {
    constructor (nuevaTarea) {
        this.crearDiv (nuevaTarea)
    }

    crearDiv(nuevaTarea) {
        
        // Creo un elemento input ( como en html pero creado en js) que pertenezca a la class Item
        let inputItem = document.createElement ('input')
        //al elemento creado le doy el atributo que sea tipo texto.
        inputItem.setAttribute('type', 'text')
        // mantego desabilitado hasta que llega el input
        inputItem.disabled = true

        //añado a la lista
        inputItem.classList.add ('item-input')
        inputItem.value = nuevaTarea
        
        // creando el nuevo div
        let nuevoDiv = document.createElement ('div')
        nuevoDiv.classList.add ('item')

        // Se crea el boton para editar la tarea
        let botonEditar = document.createElement('button')
        botonEditar.innerHTML = "<i class='fa-solid fa-lock'></i>"
        botonEditar.classList.add ('boton-editar')

        // Se crea el boton para remover la tarea
        let botonRemover = document.createElement('button')
        botonRemover.innerHTML = "<i class='fa-solid fa-trash-can'></i>"
        botonRemover.classList.add ('boton-remover')

        // por cada div tenemos que crear  la linea de input y los botones de editar y remover
        contenedor.appendChild (nuevoDiv)
        nuevoDiv.appendChild (inputItem)
        nuevoDiv.appendChild (botonEditar)
        nuevoDiv.appendChild (botonRemover)

        // escucho el click del boton y compruebo si quiero editar el campo
        botonEditar.addEventListener('click', ()=>{
            input.disabled = false
            if(inputItem.disabled){
                botonEditar.innerHTML = "<i class='fa-solid fa-lock-open'></i>"
                inputItem.disabled= false
            
            } else {
                botonEditar.innerHTML ="<i class='fa-solid fa-lock'></i>";
                inputItem.disabled= true
            }
        })

        botonRemover.addEventListener('click', function(){
            contenedor.removeChild(nuevoDiv)
        })

    }
}

//chequeo si hay entrada de datos
function chequearInput() {
    if (input.value != "") {
        new Item(input.value);
        input.value = "";
    }
}

//Funciona con click en el icono +
agregar.addEventListener("click", chequearInput);

// Agrego una tarea dando enter
document.addEventListener('keypress', function(evt) {
    // Si el evento NO es una tecla Enter
    if (evt.key !== 'Enter') {
      return;
    }
    chequearInput()
})


