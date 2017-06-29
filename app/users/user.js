const  get = require( '../utils');

module.exports = class User{
    constructor(config){
        this.name = get(['name'])(config);
        this.last = get(['last'])(config);
        this.email = get(['email'])(config);
    }

     get getName(){
        return this.name;
    }
}