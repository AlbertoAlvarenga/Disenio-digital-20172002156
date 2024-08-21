function buscarProducto() {
    const searchQuery = document.getElementById('busquedaAdmin').value.toLowerCase();
    const productos = document.querySelectorAll('.card');

    productos.forEach((producto) => {
        const nombreProducto = producto.querySelector('.card-title').textContent.toLowerCase();
        if (nombreProducto.includes(searchQuery)) {
            producto.style.display = 'block';
        } else {
            producto.style.display = 'none';
        }
    });
}

function actualizarProducto(id) {
    alert('Actualizar producto con ID: ' + id);
    // Aquí podrías redirigir a una página de actualización o abrir un formulario de actualización
}

function eliminarProducto(id) {
    if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
        alert('Producto con ID: ' + id + ' ha sido eliminado.');
        // Aquí eliminarías el producto de la lista, posiblemente haciendo una llamada a un backend
    }
}
