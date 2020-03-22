const Handler = {
    get(target, name) {
        console.log(`${target} calling ${name}`);
        return (...args) => target.send(name, args);
    },

    set(obj, prop, value) {
        // The default behavior to store the value
        console.log(`updating ${prop} to ${value}`);
        obj[prop] = value;
        return true;
      }
}

export default Handler;