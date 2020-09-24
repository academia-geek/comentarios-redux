let idComentario = 0;
export default function reducer(state = [], action){
    switch (action.type) {
        case "AGREGAR":{
            idComentario++
            return [
                ...state, 
                {
                    id:idComentario, 
                    text:action.payload.text
                }
            ]
        }
        case "BORRAR":{
            const index = state.findIndex(comentario => comentario.id === action.payload.id)
            state.splice(index, 1)
            return [
                ...state
            ]
        }
        case "ALTERNAR":{
            const comentario = state.find(comentario => comentario.id === action.payload.id)
            comentario.completado = !comentario.completado
            return [
                ...state
            ]
        }
        default:{
            return state
        }
    }
}