//module.exports = "It works from content.js"
///*eslint-disable no-unused-vars*/
export class Animal {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(`Hi, this is ${this.name}`)
    }
}
export function add(a, b) {
    //let abc = 1  
    return a + b;
}

export var content = "It works from content.js, javascript content which i love, really! "