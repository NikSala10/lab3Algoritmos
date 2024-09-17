import  {workers} from './data/data'
import * as components from './components/indexPadre.js' ;
class AppContainer extends HTMLElement  {

    constructor()  {
        super();
        this.attachShadow( {mode: 'open'});
    }

    connectedCallback() {
        console.log(workers);
        this.render();
        console.log('holi');
        
        
        const container = this.shadowRoot?.querySelector('.container')

        if (container) {
            workers.forEach(worker => {
                container.innerHTML += ` <component-container name=${worker.name} uid=${worker.id}></component-container>`
                
                
            });
        }
        

       
    }
    render()  {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <div class="container"></div>
           <component-container></component-container>

            `;
        }
        
    }

}

customElements.define('app-container',AppContainer);