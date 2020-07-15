export class Appliance {
    public id: string
    public name: string
    public active: boolean
    public account: string
    public building: string
    public appliance_base: string
    public purchase_date: string
    public install_date: string
    public serial_number: string

    constructor(
        id: string,
        name: string,
        active: boolean,
        account: string,
        building: string,
        appliance_base: string,
        purchase_date: string,
        install_date: string,
        serial_number: string

    ) {
        this.id = id
        this.name = name
        this.active = active
        this.account = account
        this.building = building
        this.appliance_base = appliance_base
        this.purchase_date = purchase_date
        this.install_date = install_date
        this.serial_number = serial_number
    }
}