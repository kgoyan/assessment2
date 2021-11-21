
import homePage from '../pages/home'
import employeeDirectory from "../pages/directory";
import deletePage from "../pages/delete/";
import notFound from "../pages/notfound";
import editPage from '../pages/edit/edit';


/* 
     Route is a path to something .....file or function
     key value
     route   page.js ()
     pathname is one of the routes you set up.....
*/

const routes = {
    "/": homePage,
    "/directory":employeeDirectory,
    "/delete":deletePage,
    "/*":notFound,
    "/edit":editPage
}
// params that is page data......
const Router =  function (pathname, params=null)   {

   const isValidRoute =   Object.keys(routes).find(key => key===pathname)
    
   
     
   
    // loading and unloading pages into the div app
    const app = document.querySelector('#app')
    app.innerHTML = ''

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    
     
        // app.appendChild(routes[window.location.pathname]())
        if(isValidRoute === undefined || isValidRoute ===''){
            app.appendChild(notFound())
        }else{

            app.appendChild(routes[isValidRoute](params) ) 
        }
       
    

}



 
export { Router}