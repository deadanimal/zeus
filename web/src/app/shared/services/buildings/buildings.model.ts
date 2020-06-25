export class Building {
    public id: string
    public name: string
    public address: string
    public area: string
    public location: string

    constructor(
        id: string,
        name: string,
        address: string,
        area: string,
        location: string
    ) {
        this.id = id
        this.name = name
        this.address = address
        this.area = area
        this.location = location
    }
}