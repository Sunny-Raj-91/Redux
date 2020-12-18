const redux = require('redux')

const createStore = redux.createStore
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

// Action
const buyCake = function(){
    return {
       type : BUY_CAKE,
       info : 'first redux demo'
    }
}
const buyIceCream = function(){
    return {
       type : BUY_ICECREAM,
       info : 'first redux demo'
    }
}
// State
const initialState = {
    numberOfCake : 10,
    numberOfIceCream : 16
}

const reducer = (state = initialState,action) => {

    switch(action.type)
        {
            case BUY_CAKE : {
                return {
                    ... state,
                    numberOfCake : state.numberOfCake -1 ,
                }
            }
            case BUY_ICECREAM : {
                return {
                    ... state,
                    numberOfIceCream : state.numberOfIceCream -1 ,
                }
            }
            default:
                return state

        }
}

const store = createStore(reducer)
console.log('initial state - ' + JSON.stringify( store.getState()))
const unsub = store.subscribe( ()=> {console.log('Updated State - '+JSON.stringify( store.getState()))})
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyCake())
unsub()

