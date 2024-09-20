export enum Attribute  {
    'image' = 'image',
    'name' = 'name',
    'uid' = 'uid',
    'age' = 'age',
    'gender' = 'gender',
    'area' = 'area',
    'position' = 'position',
    'timeincompany' = 'timeincompany',
    'experience' = 'experience',
}

class Filter extends HTMLElement  {
    image?: string;
    name?: string;
    uid?: number;
    age?: number;
    gender?: string;
    area?: string;
    position?: string;
    timeincompany?: number;
    experience?: number;

    constructor()  {
        super();
        this.attachShadow( {mode: 'open'})
    }

    static get observedAttributes() {
        return Object.values(Attribute);
    }

    attributeChangedCallback(propName : Attribute, oldValue: string | undefined, newValue: string | undefined) {
        
        switch (propName) {
            case Attribute.uid:
                this.uid = newValue ? Number(newValue) : undefined;
                break;
            case Attribute.age:
                this.age = newValue ? Number(newValue) : undefined;
                break;
            case Attribute.timeincompany:
                this.timeincompany = newValue ? Number(newValue) : undefined;
                break;
            case Attribute.experience:
                this.experience = newValue ? Number(newValue) : undefined;
                break;
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    connectedCallback() { 
        this.render();
        
        
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/components/myComponent/component.css">
            <img id="img" src="${this.image ? this.image : 'Not found'}">
            <h1>${this.name ? this.name : 'Not found'}</h1>
            <p>ID: ${this.uid ? this.uid : 'Not found'}</p>
            <p>Age: ${this.age ? this.age : 'Not found'}</p>
            <p>Gneder: ${this.gender ? this.gender : 'Not found'}</p>
            <p>Area: ${this.area ? this.area : 'Not found'}</p>     
            <p>Position: ${this.position ? this.position : 'Not found'}</p>
            <p>Time in Company: ${this.timeincompany ? this.timeincompany : 'Not found'}</p>
            <p>Experience: ${this.experience ? this.experience : 'Not found'}</p>
            `;
        }
    }
};

customElements.define('component-container',Filter);
export default Filter;