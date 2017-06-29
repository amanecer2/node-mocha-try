const should = require('should');
const assert = require('assert');
const User = require("../app/users/user");

describe("User", ()=>{
    describe("default",()=>{
        let user = {};
        const config = {name:'shahar',last:'levi',email:'sh2levi@gmail.com'};

        before(()=>{
            user = new User(config);
        })

        it("sholud have config",function () {
            user.name.should.equal('shahar2');
        })
    })
});