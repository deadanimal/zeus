export class Appliance {
    public id: string
    public name: string
    public active: boolean
    public account: string
    public building: string
    public appliance_base: string

    constructor(
        id: string,
        name: string,
        active: boolean,
        account: string,
        building: string,
        appliance_base: string
    ) {
        this.id = id
        this.name = name
        this.active = active
        this.account = account
        this.building = building
        this.appliance_base = appliance_base
    }
}