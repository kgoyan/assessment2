import makeElement from "../../utils/makeElement"
import directory from "../../components/cards/directory"
import employee from "../../components/cards/employee"
import { getStore } from "../../redux/store"
import { Router } from "../../routes/router"
 
 
 
let createPage = true;
 
 

const employeeDirectory = function(){

  const page = document.createElement('div')
  const employeeContainer = directory(); 


  function cleanUp( ){
     const employees = employeeContainer.querySelectorAll('aside') 
     employees.forEach((employee)=>{
          employee.removeEventListener('click', onDeleteEmployee)
          employee.removeEventListener('click', onEditEmployee)
     })
  }


 // EVENT HANDLER FUNCTION FOR REMOVING AN EMPLOYEE
  function onDeleteEmployee (e){
        const employeeId = e.currentTarget.dataset.key
        const employee = getStore().filter((employee) => employee.id === employeeId)
        cleanUp()
        Router('/delete', employee[0])

  }

  function onEditEmployee (e){
    const employeeId = e.currentTarget.dataset.key
    const employee = getStore().filter((employee) => employee.id === employeeId)
    cleanUp()
    Router('/edit', employee[0])

}


   function render (){ 
      const employees = getStore()
      const div =  employeeContainer.querySelector('#employees')       
      // create li from the store data
      const employeeElements =  getStore().map(emp=> employee(emp))
      employeeElements.forEach(element => {        
        element.querySelector('#delete').addEventListener('click', onDeleteEmployee)
        element.querySelector('#edit').addEventListener('click', onEditEmployee)
        div.append(element)
      });
       page.append(employeeContainer)
   
  
   }

  
  

      render()
      
    return page
     
     
  
    
     
   
     
    
}

export default employeeDirectory


 