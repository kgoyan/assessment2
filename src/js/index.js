import {Router} from "./routes/router";
import { createStore} from "./redux/store";
import { dataFetcher } from "./utils/dataFetcher";
import keyGenerator from './utils/key'


// MOVE THE ROUTER
const app = document.querySelector("#app");
 


const onAppInit = async function(e){
    let employees = await dataFetcher('./static/data/employees.json')

    // DEMO IF THE DATA DOESN'T HAVE SOME UNIQUE KEY
    // example for this data as there is no unique id
    if(employees[0].id === undefined){
         employees = [...keyGenerator(employees)]
    }

    createStore(employees)
    Router(window.location.pathname)
   
}

window.addEventListener('load', onAppInit)

 




 
 

 