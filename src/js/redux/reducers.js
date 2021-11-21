import {getStore, updateStore} from './store'
 

function reducer  (action){
    console.log(action)

    switch(action.type){
        case "delete":
            // grabing the current store
         const store = getStore();       
         const index = action.payload.index;         
         const newStore = [...store.slice(0, index), ...store.slice(index + 1)]
         updateStore(newStore)
         action.cb( )
        return  "remove employee";
        case "edit": 
        return "edit employee";
        case "add": 
        return "add new employee";
        default: return store
    }

}


export default reducer 