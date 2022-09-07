class Expense {
    expenseId: number;
    expenseCategory: string;
    expenseDate: Date;
    expenseCost: number;

    constructor (
        expenseId: number,
        expenseCategory: string,
        expenseDate: Date,
        expenseCost: number
    ){
        this.expenseId = expenseId;
        this.expenseCategory = expenseCategory;
        this.expenseDate = expenseDate;
        this.expenseCost = expenseCost;
    }
}

export default Expense;