import handler from '../advanced/01-proxy/proxy';

class User {
    constructor() {
        this.username = "";
        this.email = "";
    }

    get_name() {
        return this.username;
    }
}

let p = new Proxy(new User(), handler);
p.username = "rajesh";
p.email = "abc@test.com";

console.log(p.username);
console.log(p.email);

console.log(p.get_name());