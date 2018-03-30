export class Image{
    id: string = '';
    name: string ='';
    type: string = '';
    image: string = '';

    constructor (values: Object = {}) {
        Object.assign(this, values);
    }

}