export class Plant {
    public id: string
    public name: string
    public version: string
    public active: boolean

    constructor(
        id: string,
        name: string,
        version: string,
        active: boolean
    ) {
        this.id = id
        this.name = name
        this.version = version
        this.active = active
    }
}