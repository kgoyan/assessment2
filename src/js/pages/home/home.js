
import makeElement from "../../utils/makeElement"
import pageHeader from "../../components/ui/pageheader/"
import link from "../../components/ui/link/link"
import * as styles from './styles.module.scss'
const homePage = function(){
    // create page container style with modules or global scss, css
    const page = document.createElement('div') 
  
    // clean out page contents before building
    page.innerHTML = '' 

    function render(){
    
   
        page.append(pageHeader({
            label: "Director",
            tagline:"keeping your staff contected",
            children: [link("employee directory", "/directory")]
        }))

       
        
    }
   

    // call render function to build page + components
    render()
    return page
}

export default homePage