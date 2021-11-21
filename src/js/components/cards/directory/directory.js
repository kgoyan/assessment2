import makeElement from "../../../utils/makeElement"
import * as styles from './styles.module.scss'


const directory = function (){
    const template = `
    <section id="directory" class="${styles.directory}">
    <header class="${styles.section_heading}">
        <h2>Company Directory</h2>
    </header>
        <div id="employees">
        
        </div>
    <footer>

    </footer>
</section>
    `

    return makeElement(template)
}

export default directory