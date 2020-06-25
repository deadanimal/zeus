export class Notification {
    public id: string
    public message: string
    public created: boolean
    public sent: boolean
    public read: boolean
    public receiver: boolean

    constructor(
        id: string,
        message: string,
        created: boolean,
        sent: boolean,
        read: boolean,
        receiver: boolean
    ) {
        this.id = id
        this.message = message
        this.created = created
        this.sent = sent
        this.read = read
        this.receiver = receiver
    }
}