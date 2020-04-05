import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    @track sessionId;
    @track state;

    constructor() {
        super();
        this.state = 'list';
        window.history.replaceState('list', null, '');
        // listener to be notified when state changes
        window.onpopstate = event => {
            if (event.state) {
                this.state = event.state;
            }
        }
    }

    handleNavigate(event) {
        this.sessionId = event.detail;
        // change the state of the application
        this.state = 'details';
        window.history.pushState('details', null);
    }

    get isStateList(){
        return this.state === 'list';
    }

    get isStateDetails() {
        return this.state === 'details';
    }
    
}
