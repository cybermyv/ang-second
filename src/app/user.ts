export class User {
    id: string = '';
    login: string = '';
    pass: string = '';
    comment: string = '';
    
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
