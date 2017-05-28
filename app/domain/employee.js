export default class Employee {
    // Id = null;
    // LoginName = null;
    // PassWord  = null;
    // Status = 0;
    // CreatedOn = null;

    constructor() {
        this.Id = uuid.v4();
        this.CreatedOn = new Date();
    }
}