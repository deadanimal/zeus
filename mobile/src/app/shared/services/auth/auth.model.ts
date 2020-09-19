export class TokenResponse {
    public refresh: string
    public access: string
    constructor(
        refresh: string,
        access: string
    ) {
        this.refresh = refresh
        this.access = access
    }
}

export class Registration {
    public name: string
    public identification_number: number
    public mobile_number: number
    public username: string
    public email: string
    public password1: string
    public password2: string

    constructor(
        name: string,
        username: string,
        email: string,
        password1: string,
        password2: string,
        indentification_number: number,
        mobile_number: number,
    ) {
        this.name = name
        this.identification_number = indentification_number
        this.mobile_number = mobile_number
        this.username = username
        this.email = email
        this.password1 = password1
        this.password2 = password2
    }
}

export class ChangePassword{
    public password1: string
    public password2: string
    constructor(
        password1: string,
        password2: string,
    ){
        this.password1 = password1
        this.password2 = password2
    }

}