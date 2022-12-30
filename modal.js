const modalContenedor = document.querySelector('.modal-contenedor');
const abrirCarrito = document.getElementById('cesta-carrito');
const cerrarCarrito = document.getElementById('btn-cerrar-carrito');
const modalCarrito = document.querySelector('.modal-carrito');
const confirmarCompra = document.querySelector('.confirmarcompra-contenedor')
const abrirCheck = document.getElementById('confirmarcompra')
const cerrarCheck = document.getElementById('btn-cerrar-usuario');
const cerrarCheckEnviando = document.getElementById('enviarFormulario');

abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

modalContenedor.addEventListener('click', () => {
    cerrarCarrito.click()
});

modalCarrito.addEventListener('click', (e) => {
    e.stopPropagation();
    if (e.target.classList.contains('boton-eliminar')) {
        eliminarProductoEnCarrito(e.target.value);
    }
})

abrirCheck.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active');
    confirmarCompra.classList.toggle('confirmar-active')
})

cerrarCheck.addEventListener('click', () => {
    confirmarCompra.classList.toggle('confirmar-active')
})

cerrarCheckEnviando.addEventListener('click', () => {
    confirmarCompra.classList.toggle('confirmar-active')
})

