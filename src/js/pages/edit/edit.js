
import makeElement from "~/src/js/utils/makeElement"
import button from "../../components/ui/button"
import {Router} from '../../routes/router'
import { getStore } from "../../redux/store"
import reducer from '../../redux/reducers'
 
 



const cancelButton = button("cancel")
const editButton = button("edit")

 
const editPage = function(props){
        
    // Create A Container for the page
    // Styles either with modules.scss or styles.module.css
    const page = document.createElement('div') 

    // Component Clean Up Function
    // Remove The Listeners from the Page
    function cleanUp (){
        cancelButton.removeEventListener('click', onCancelEdit)  
        editButton.removeEventListener('click', onEditEmployee) 
    }
 
    //Cancel Delete Event Handler
    // Call the cleanUp method
    function onCancelEdit (e){
        cleanUp()
        Router('/directory')
    }

    // DELETE EMPLOYEE EVENT HANDLER
    function onEditEmployee (e){ 
     
      
           if(props !== null){           
            Router('/directory')
               const editEmployee = props
               const index = getStore().findIndex(employee => employee.id === editEmployee.id)
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
            <h1>Edit Employee</h1>
            <p>Change Employee</p>
            <form action="" method="post">
    <label for="name">Name</label>
    <input type="text" name="name">

    <label for="email">Email</label>
    <input type="email" name="email">

    <label for="phone">Phone</label>
    <input type="text" name="phone">

    <label for="department">Department</label>
    <input type="text" name="department">

    
</form>
            <div></div>
        </header>
    `

    const pageHeader = makeElement(headerTemplate) 
    pageHeader.querySelector('div').innerHTML = ''
    cancelButton.addEventListener('click', onCancelEdit)  
    editButton.addEventListener('click', onEditEmployee) 
    pageHeader.querySelector('div').append(cancelButton, editButton)
    page.append(pageHeader)

  
    return page
    
    
}

export default editPage