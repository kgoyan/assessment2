import makeElement from "../../../utils/makeElement";
import * as styles from "./styles.module.scss";

const employee = function ({ id, name, department, phone, email }) {
   
 
  const template = `       
          <aside class="${styles.employee}" data-key="${id}">
          <div class="${styles[department.toLowerCase()]} ${styles.team} ">${department}</div>
          <header>

             
          <h2>  ${name}</h2>
          </header>
          <ul>
             
              <li><span>phone</span><p>${phone}</p></li>
              <li><span>email</span><p>${email}</p></li>
          </ul>

          <footer data-key="${id}">
            <button id="delete" data-key="${id}" >delete</button>
            <span></span>
            <button id="edit" data-key="${id}">edit</button>
          </footer>
        </aside>  
  `;
  return makeElement(template);
};

export default employee;
