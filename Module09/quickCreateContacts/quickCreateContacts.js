import { LightningElement,track } from 'lwc';
import {fire} from 'c/pubsub';

export default class QuickCreateContacts extends LightningElement {

@track Name
    handleClick(){
    window.console.log('Event Firing...');
    let message = this.name;
    fire('simplevt', message);
    window.console.log('Event Fired');
}
}