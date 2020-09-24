import store from './store'
const listaComentariosDOM = document.querySelector("#listaComentarios")
function actualizarListaComentarios(listaComentarios = []){
    listaComentariosDOM.innerHTML = ''
    listaComentarios.forEach(itemComentario => {
        listaComentariosDOM.innerHTML +=  `
                            <li class="itemComentario list-group-item">
                                <input type="checkbox"  class="chkMarca form-check-input" idComentario = ${itemComentario.id}>
                                <span style = "${itemComentario.completado ? "text-decoration:line-through" : ""}">${itemComentario.text}</span>
                                <button idComentario = ${itemComentario.id} type="button" class="btnEliminarComentario btn btn-outline-secundary pull-right">
                                    <i class="fa fa-trash"></i>
                                </button>
                            </li>
        `
    })
    
    let inputsChk = document.getElementsByClassName('chkMarca')
    let btnsEliminar = document.getElementsByClassName('btnEliminarComentario')
    for(let i = 0;  i < inputsChk.length;  i++){
        inputsChk[i].addEventListener('click', e => {
            store.dispatch({
                type : "ALTERNAR", 
                payload : {
                    id : e.target.getAttribute("idComentario")
                }
            })
        })
    }
    
    for(let i = 0;  i < btnsEliminar.length;  i++){
        btnsEliminar[i].addEventListener('click', e => {
            store.dispatch({
                type : "BORRAR", 
                payload : {
                    id : e.target.getAttribute("idComentario")
                }
            })
        })
    }
    
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
