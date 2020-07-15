export class DeviceReading {
    public id: string
    public power: number
    public time: string
    public device: string
    public aggregated_power: number

    constructor(
        id: string,
        power: number,
        time: string,
        device: string,
        aggregated_power: number
    ) {
        this.id = id
        this.power = power 
        this.time = time
        this.device = device
        this.aggregated_power = aggregated_power
    }
}