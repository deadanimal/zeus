export class Aimodel {
    public id: string
    public name: string
    public version: string
    public purpose: string
    public active: boolean
    public aimodel_type: string

    constructor(
        id: string,
        name: string,
        version: string,
        purpose: string,
        active: boolean,
        aimodel_type: string
    ) {
        this.id = id
        this.name = name
        this.version = version
        this.purpose = purpose
        this.active = active
        this.aimodel_type = aimodel_type
    }
}