class Expense {
    expenseId: number;
    expenseCategoryName: string;
    expenseDate: Date;
    expenseCost: number;

    constructor (
        expenseId: number,
        expenseCategoryName: string,
        expenseDate: Date,
        expenseCost: number
    ){
        this.expenseId = expenseId;
        this.expenseCategoryName = expenseCategoryName;
        this.expenseDate = expenseDate;
        this.expenseCost = expenseCost;
    }
}

export default Expense;