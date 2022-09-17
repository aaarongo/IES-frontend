class Income {
    incomeId: number;
    incomeCategory: string;
    incomeDate: Date;
    incomeCost: number;

    constructor (
        incomeId: number,
        incomeCategory: string,
        incomeDate: Date,
        incomeCost: number
    ){
        this.incomeId = incomeId;
        this.incomeCategory = incomeCategory;
        this.incomeDate = incomeDate;
        this.incomeCost = incomeCost;
    }
}

export default Income;