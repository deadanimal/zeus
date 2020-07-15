export class BaseAppliance {
    public id: string
    public active: boolean
    public brand: string
    public model: string
    public year: string
    public manufacturer: string
    public batch_num: string
    public group: string

    constructor(
        id: string,
        active: boolean,
        brand: string,
        model: string,
        year: string,
        manufacturer: string,
        batch_num: string,
        group: string
    ) {
        this.id = id
        this.active = active
        this.brand = brand
        this.model = model
        this.year = year
        this.manufacturer = manufacturer
        this.batch_num = batch_num
        this.group = group
    }
}