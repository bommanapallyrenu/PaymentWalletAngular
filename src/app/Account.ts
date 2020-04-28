export class Account{
    
    accountid:number;
    status:string;
    accountbalance:number;
    constructor(accountid,status,accountbalance)
    {
        this.accountid=accountid;
        this.status=status;
        this.accountbalance=accountbalance;
    }
}