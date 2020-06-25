export class BaseAppliance {
    public id: string
    public active: boolean
    public brand: string
    public model: string
    public year: string
    public manufacturer: string

    constructor(
        id: string,
        active: boolean,
        brand: string,
        model: string,
        year: string,
        manufacturer: string
    ) {
        this.id = id
        this.active = active
        this.brand = brand
        this.model = model
        this.year = year
        this.manufacturer = manufacturer
    }
}