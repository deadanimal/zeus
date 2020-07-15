export class Notification {
    public id: string
    public title: string
    public message: string
    public created: boolean
    public sent: boolean
    public read: boolean
    public receiver: boolean

    constructor(
        id: string,
        title: string,
        message: string,
        created: boolean,
        sent: boolean,
        read: boolean,
        receiver: boolean
    ) {
        this.id = id
        this.title = title
        this.message = message
        this.created = created
        this.sent = sent
        this.read = read
        this.receiver = receiver
    }
}