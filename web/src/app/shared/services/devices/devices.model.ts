export class Device {
    public id: string
    public name: string
    public label: string
    public active: boolean

    constructor(
        id: string,
        name: string,
        label: string,
        active: boolean
    ) {
        this.id = id
        this.name = name
        this.label = label
        this.active = active
    }
}