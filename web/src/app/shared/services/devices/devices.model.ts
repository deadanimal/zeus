export class Device {
    public id: string
    public name: string
    public label: string
    public is_active: boolean
    public account: string
    public device_type: string

    constructor(
        id: string,
        name: string,
        label: string,
        is_active: boolean,
        account: string,
        device_type: string
    ) {
        this.id = id
        this.name = name
        this.label = label
        this.is_active = is_active
        this.account = account
        this.device_type = device_type
    }
}