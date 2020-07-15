export class DeviceInstallMaintenance {
    public id: string
    public device: string
    public user: string
    public account: string
    public maintenance_start_date: string
    public maintenance_end_date: string
    public install_start_date: string
    public intall_end_date: string
    public issue: string

    constructor(
        id: string,
        device: string,
        user: string,
        account: string,
        maintenance_start_date: string,
        maintenance_end_date: string,
        install_start_date: string,
        intall_end_date: string,
        issue: string
    ) {
        this.id = id
        this.device = device
        this.user = user
        this.account = account
        this.maintenance_start_date = maintenance_start_date
        this.maintenance_end_date = maintenance_end_date
        this.install_start_date = install_start_date
        this.intall_end_date = intall_end_date
        this.issue = issue
    }
}