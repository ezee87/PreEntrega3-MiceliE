const pintarProductos = () => {
    const contenedor = document.getElementById("producto-contenedor");

    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML += `

        <div class="col md-4 my-1">
          <div class="card" style="width: 18rem;">
            <img src="${producto.img}" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
              <p class="card-text">${producto.precio}</p>
              <a id=${producto.id} class="btn btn-warning container-fluid negrita agregar">Comprar</a>
             
            </div>
          </div>
        </div>


                       `


        contenedor.appendChild(div);
    });
};

//               <a id=${producto.id} class="btn btn-warning container-fluid negrita agregar">Comprar</a>