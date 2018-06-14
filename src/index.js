import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'

import { Provider } from 'react-redux'




import App from './App';
import registerServiceWorker from './registerServiceWorker';




const commentApp = function(state, action){
    if(!state){
        return {
            comments:[]
        }
    }
    switch(action.type){
        case "add_comment":
            return {...state, comments:[...state.comments,action.comment]}
        default:
            return state;
    }
}
const store = createStore(commentApp);

store.subscribe(()=>console.log(store.getState()))


const render = Component => {
    ReactDOM.render(
        <Provider store={store} >
            <Component />
        </Provider>
    ,
    document.getElementById('root')
    )
}

render(App)


registerServiceWorker();
