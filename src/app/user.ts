export class User {
    id: number;
    login: string = '';
    pass: string = '';
    comment: string = '';
    
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
