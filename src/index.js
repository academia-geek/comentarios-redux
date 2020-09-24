import store from './store'
const listaComentariosDOM = document.querySelector("#listaComentarios")
function actualizarListaComentarios(listaComentarios = []){
    listaComentariosDOM.innerHTML = ''
    listaComentarios.forEach(itemComentario => {
        listaComentariosDOM.innerHTML +=  `
                            <li class="itemComentario list-group-item">
                                <input type="checkbox"  class="chkMarca form-check-input">
                                <span>${itemComentario.text}</span>
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

document.querySelector("#txtComentario").addEventListener('keyup', e => {
    if(e.keyCode === 13){
        let comentario = document.querySelector("#txtComentario").value
        document.querySelector("#txtComentario").value = ''
        store.dispatch({
            type : 'AGREGAR', 
            payload : {
                text : comentario
            }
        })
    }
})
