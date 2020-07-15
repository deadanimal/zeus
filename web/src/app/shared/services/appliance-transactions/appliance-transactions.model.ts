export class ApplianceTransaction {
    public id: string
    public time: boolean
    public appliance: string
    public state: string
    public mode: string

    constructor(
        id: string,
        time: boolean,
        appliance: string,
        state: string,
        mode: string
    ) {
        this.id = id
        this.time = time
        this.appliance = appliance
        this.state = state
        this.mode = mode
    }
}