export class Image{
    id: string = '';
    name: string ='';
    image: string = '';

    constructor (values: Object = {}) {
        Object.assign(this, values);
    }

}