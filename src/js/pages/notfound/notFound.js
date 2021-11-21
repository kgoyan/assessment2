import makeElement from "../../utils/makeElement"
import link from "../../components/ui/link"
import * as styles from './styles.module.scss'

const notFound = function(){
    console.log(styles)
    const page = document.createElement('div')  
    let headerTemplate = `
        <header class="center-in-page">
           <div class=${styles.notfound}>
             <span>404</span>
             <div>
             <h1>Oop's looks like we lost that page <a href="/directory">back to directory</a> </h1>
            
             </div>
            </div>

        
        </header>
    `
    const pageHeader = makeElement(headerTemplate)
   

    
    page.append(pageHeader)

    return page
}

export default notFound