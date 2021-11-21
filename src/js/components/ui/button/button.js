import makeElement from "~/src/js/utils/makeElement";
import * as styles from './styles.module.scss'
const button = function (label="ui button"){
     const template = `<button class="${styles.buttonBase}">${label}</button>`
     const element = makeElement(template);

     return element

     
}

export default button