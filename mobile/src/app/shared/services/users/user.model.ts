export class User {
    public id: string
    public username: string
    public name: string
    public active: boolean
    public billing_address: string
    public user_type: string

    constructor(
        id: string,
        username: string,
        name: string,
        active: boolean,
        billing_address: string,
        user_type: string
    ) {
        this.id = id
        this.username = username
        this.name = name
        this.active = active
        this.billing_address = billing_address
        this.user_type = user_type
    }
}