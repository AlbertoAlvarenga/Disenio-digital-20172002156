//? Evento que se ejecuta cuando el DOM ha sido cargado
document.addEventListener('DOMContentLoaded', async () => {

    const listaProductos = document.querySelector('#listaProductos')

    const productos = await getProductos()

    let body = ""

    for (let { image, title, price, category } of productos) {
        body += `
        <article class="card">
               <img 
               width="100"
               src="${image}" 
               alt="${title}">
   
               <h3>${title.length > 20 ? title.substring(0, 20) + "..." : title}</h3>
               <span>${category}</span>
               <span>L${price}</span>
   
               <button class="boton" type="button" >Mas información</button>
   
           </article>
       `
    }

    listaProductos.innerHTML = body

})

const getProductos = async () => {

    const response = await fetch('https://fakestoreapi.com/products')

    const productos = await response.json()

    return productos

}