let uuid = require("node-uuid");

export default class User {
    Id = null;
    LoginName = null;
    PassWord  = null;
    Status = 0;
    CreatedOn = null;

    constructor() {
        this.Id = uuid.v4;
        this.CreatedOn = new Date();
    }
}