import {assert} from "./assert";
import {User} from "./users/user";
import {get} from './utils';

const config = {name:'shahar',last:'levi',email:'sh2levi@gmail.com'};
debugger

const goodUser = new User(config);
const badUser = new User();

console.log("badUser.getName",goodUser.getName);
assert(badUser.getName === config.name, "Bad new object");
