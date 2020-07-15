export class Appliance {
    public id: string
    public name: string
    public is_active: boolean
    public account: string
    public building: string
    public appliance_base: string
    public purchase_date: string
    public install_date: string
    public serial_num: string

    constructor(
        id: string,
        name: string,
        is_active: boolean,
        account: string,
        building: string,
        appliance_base: string,
        purchase_date: string,
        install_date: string,
        serial_num: string

    ) {
        this.id = id
        this.name = name
        this.is_active = is_active
        this.account = account
        this.building = building
        this.appliance_base = appliance_base
        this.purchase_date = purchase_date
        this.install_date = install_date
        this.serial_num = serial_num
    }
}