const handler = {
    get(target, name) {
        console.log(`${target} calling ${name}`);
        return (...args) => target.send(name, args);
    }
}

export default handler;