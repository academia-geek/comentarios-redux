import {createStore} from './redux'

function reducer(state = {},  action){
    switch(action.type){
        case 'CREAR' : {
            return action.payload
        }
        case 'MODIFICAR' : {
            return action.payload
        }
        default : {
            return state
        }
    }
}

const store = createStore(reducer)

store.subscribe((st) => {
    const state = store.getState()
    console.log(state)
    console.log(st)
})

setInterval(() => {
    store.dispatch({
        type : 'CREAR', 
        payload : {
            value : Math.random()
        }
    })
}, 1000)