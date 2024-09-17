export enum Attribute  {
    'image' = 'image',
    'name' = 'name',
    'uid' = 'uid',
    'age' = 'age',
    'gender' = 'gender',
    'area' = 'area',
    'position' = 'position',
    'time' = 'time',
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
    time?: number;
    experience?: number;

    constructor()  {
        super();
        this.attachShadow( {mode: 'open'})
    }

    static get observedAttributes() {
        return Object.values(Attribute);
    }

    attributeChangedCallback(propName : Attribute, oldValue: string | undefined, newValue: string | undefined) {
        console.log(`Attribute changed: ${propName} - New Value: ${newValue}`);
        switch (propName) {
            case Attribute.uid:
                this.uid = newValue ? Number(newValue) : undefined;
                break;
            case Attribute.age:
                this.age = newValue ? Number(newValue) : undefined;
                break;
            case Attribute.time:
                this.time = newValue ? Number(newValue) : undefined;
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
            <p>${this.name ? this.name : 'not found'}</p>
            <p>${this.uid ? this.uid : 'noy found'}</p>
            
            `;
        }
    }
};

customElements.define('component-container',Filter);
export default Filter;