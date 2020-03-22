const Handler = {
    get(target, prop, receiver) {
        console.log(target, ` calling ${prop}`);
        //return (...args) => target.send(name, args);
        return Reflect.get(target, prop, receiver);
    },

    set(target, prop, val, receiver) {
        // The default behavior to store the value
        console.log(`updating ${prop} to ${val}`);
        //obj[prop] = value;
        //return true;
        return Reflect.set(target,prop, val, receiver);
      }
}

export default Handler;