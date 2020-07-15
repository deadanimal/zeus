export class Account {
    public id: string
    public name: string
    public account_number: string
    public active: boolean
    // public account_created: string
    // public linked_organisation: string
    public linked_user: string

    constructor(
        id: string,
        name: string,
        account_number: string,
        active: boolean,
        // account_created: string,
        // linked_organisation: string,
        linked_user: string
    ) {
        this.id = id
        this.name = name
        this.account_number = account_number
        this.active = active
        // this.account_created = account_created
        // this.linked_organisation = linked_organisation
        this.linked_user = linked_user
    }
}