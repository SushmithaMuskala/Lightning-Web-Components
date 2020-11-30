//to store all the JS functions for the various LWC

var callbacks = {};

//create register a callback for an event
const register = (eventName, callback) => {
    if(!callbacks[eventName]){
        callbacks[eventName] = new Set();
    }
    callbacks[eventName].add(callback);
};

//unregisters a callback for an event

const unregister = (eventName, callback) =>{
    if(callbacks[eventName]){
        callbacks[eventName].delete(callback);
    }
};

const unregisterAll = () => {
    callbacks = {};
};

//fires an event to listners

const fire = (eventName, payload) => {
    if(callbacks[eventName]){
        callbacks[eventName].forEach(callback => {
            try{
                callback(payload);
            }catch (error){
                
            }
        });
    }
};

//Export all the functions so that these are accisible from the other JS Classes

export default{
    register,
    unregister,
    fire,
    unregisterAll
};