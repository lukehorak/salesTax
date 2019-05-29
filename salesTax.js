var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function salesAndTax(company, taxRates){
  let result = {
    "sales": 0,
    "tax": 0
  };
  const taxRate = taxRates[company.province]
  for (sale of company.sales){
    result.sales += sale
  }
  result.tax = result.sales * taxRate
  return result
}

function calculateSalesTax(salesData, taxRates) {
  let companies = {}
  for(company of salesData){
    if (!companies[company.name]){
      companies[company.name] = {
        "totalSales":0,
        "totalTaxes":0
      }
    }
    let salesData = salesAndTax(company, salesTaxRates);
    companies[company.name].totalSales += salesData.sales;
    companies[company.name].totalTaxes += salesData.tax
  }
  return companies
}

console.log(calculateSalesTax(companySalesData, salesTaxRates))