export class Bill {
    public id: string
    public name: string
    public status: string
    public bill_generated: boolean
    public bill_invoiced: boolean
    public bill_due_date: boolean
    public bill_paid: boolean
    public date_generated: string
    public date_invoice_sent: string
    public date_due_date: string
    public date_paid: string

    constructor(
        id: string,
        name: string,
        status: string,
        bill_generated: boolean,
        bill_invoiced: boolean,
        bill_due_date: boolean,
        bill_paid: boolean,
        date_generated: string,
        date_invoice_sent: string,
        date_due_date: string,
        date_paid: string
    ) {
        this.id = id
        this.name = name
        this.status = status
        this.bill_generated = bill_generated
        this.bill_invoiced = bill_invoiced
        this.bill_due_date = bill_due_date
        this.bill_paid = bill_paid
        this.date_generated = date_generated
        this.date_invoice_sent = date_invoice_sent
        this.date_due_date = date_due_date
        this.date_paid = date_paid
    }
}