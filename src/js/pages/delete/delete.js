
import makeElement from "~/src/js/utils/makeElement"
import button from "../../components/ui/button"
import {Router} from './../../routes/router'
import { getStore } from "../../redux/store"
import reducer from './../../redux/reducers'
 
 

const cancelButton = button("cancel")
const deleteButton = button("delete")

 
const deletePage = function(props){
        
    // Create A Container for the page
    // Styles either with modules.scss or styles.module.css
    const page = document.createElement('div') 

    // Component Clean Up Function
    // Remove The Listeners from the Page
    function cleanUp (){
        cancelButton.removeEventListener('click', onCancelDelete)  
        deleteButton.removeEventListener('click', onRemoveEmployee) 
    }
 
    //Cancel Delete Event Handler
    // Call the cleanUp method
    function onCancelDelete (e){
        cleanUp()
        Router('/directory')
    }

    // DELETE EMPLOYEE EVENT HANDLER
    function onRemoveEmployee (e){ 
     
      
           if(props !== null){           
            Router('/directory')
               const removeEmployee = props
               const index = getStore().findIndex(employee => employee.id === removeEmployee.id)
               const action  = {
                type:"delete",
                payload:{index},
                cb:()=> Router('/directory')
            }
            reducer(action)
            cleanUp()
           }
    
       

       
        
    }
    
    let headerTemplate = `
        <header class="welcome center-in-page">
            <h1>Delete Employee</h1>
            <p>Remove Employee</p> 
            <div></div>
        </header>
    `
    const pageHeader = makeElement(headerTemplate) 
    pageHeader.querySelector('div').innerHTML = ''
    cancelButton.addEventListener('click', onCancelDelete)  
    deleteButton.addEventListener('click', onRemoveEmployee) 
    pageHeader.querySelector('div').append(cancelButton, deleteButton)
    page.append(pageHeader)

  
    return page
    
    
}

export default deletePage