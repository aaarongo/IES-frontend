export const chartData = [
    { 
      id:"1", 
      label:"Week 1", 
      income:10, 
      expense:20, 
      savings: getSavings(income, expense)
    }, 
    { 
      id:"2", 
      label:"Week 2", 
      income:10, 
      expense:20, 
      savings: getSavings(income, expense)
    }, 
    { 
      id:"3", label:"Week 3", 
      income:10, 
      expense:20, 
      savings: getSavings(income, expense)
    }, 
    { 
      id:"4", label:"Week 4", 
      income:10, 
      expense:20, 
      savings: getSavings(income, expense)
    }, 
  ]

  function getSavings(income, expense) {
    return (income-expense);
  }