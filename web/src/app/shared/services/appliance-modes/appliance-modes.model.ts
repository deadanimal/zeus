export class ApplianceMode {
    public id: string
    public is_active: boolean
    public appliance: string
    public name: string
    public state: string
    public prob_delta_start_range: number
    public prob_delta_end_range: number
    public prob_cumm_start_range: number
    public prob_cumm_end_range: number
    public batch_num: string
    public group: string

    constructor(
        id: string,
        is_active: boolean,
        appliance: string,
        name: string,
        state: string,
        prob_delta_start_range: number,
        prob_delta_end_range: number,
        prob_cumm_start_range: number,
        prob_cumm_end_range: number,
        batch_num: string,
        group: string
    ) {
        this.id = id
        this.is_active = is_active
        this.appliance = appliance
        this.name = name
        this.state = state
        this.prob_delta_start_range = prob_delta_start_range
        this.prob_delta_end_range = prob_delta_end_range
        this.prob_cumm_start_range = prob_cumm_start_range
        this.prob_cumm_end_range = prob_cumm_end_range
        this.batch_num = batch_num
        this.group = group
    }
}