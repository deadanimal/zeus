export class User {
    public id: string
    public name: string
    public username: string
    public active: boolean
    public enabled: boolean
    public user_type: string
    public billing_address: string
    // public joined_at: string

    constructor(
        id: string,
        name: string,
        username: string,
        active: boolean,
        enabled: boolean,
        user_type: string,
        billing_address: string,
        // joined_at: string
    ) {
        this.id = id
        this.name = name
        this.username = username
        this.active = active
        this.enabled = enabled
        this.user_type = user_type
        this.billing_address = billing_address
        // this.joined_at = joined_at
    }
}