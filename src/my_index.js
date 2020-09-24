import {createStore} from './my_redux'

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
store.subscribe((st) => {
    console.log("=============")
    console.log(st)
    console.log("=============")
})

setInterval(() => {
    store.dispatch({
        type : 'CREAR', 
        payload : {
            value : Math.random()
        }
    })
}, 1000)