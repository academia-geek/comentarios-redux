import store from './store'
const listaComentariosDOM = document.querySelector("#listaComentarios")
function actualizarListaComentarios(listaComentarios = []){
    listaComentariosDOM.innerHTML = ''
    listaComentarios.forEach(itemComentario => {
        listaComentariosDOM.innerHTML +=  `
                            <li class="itemComentario list-group-item">
                                <input type="checkbox"  class="chkMarca form-check-input">
                                <span>Hola mundo!!!</span>
                                <button type="button" class="btn btn-outline-secundary pull-right">
                                    <i class="fa fa-trash"></i>
                                </button>
                            </li>
        `
    })
}

store.subscribe(() => {
    const state = store.getState()
    actualizarListaComentarios(state)
})