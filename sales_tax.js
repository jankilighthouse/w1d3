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

function getSalesTotals(salesData, taxRates){
var totalSales={};
var numCompnay=0;

for(var item in salesData ){
  numCompnay +=1;
  var companyData = salesData[item];
  var runningSales=0;
  totalSales[numCompnay]={};
  totalSales[numCompnay].name=companyData.name;
  totalSales[numCompnay].province=companyData.province;

  for(var i=0;i<companyData['sales'].length;i++){
    runningSales += companyData.sales[i];

  }
  if(totalSales[numCompnay] === undefined)
  {
   totalSales[numCompnay]=0;

  }
  totalSales[numCompnay].totalSales=runningSales;
}

return totalSales;
}
function calculateSalesTax(salesData, taxRates) {
var result = {};
var companyData=getSalesTotals(salesData,taxRates);

 for(var item in companyData)
 {
  var company =companyData[item];

if(result[company.name]===undefined){
  result[company.name]={};

}
company['salesTax']=0;

switch(company.province){
  case 'BC':
company['salesTax']= company.totalSales * taxRates.BC;
break;

case 'AB':
company['salesTax']=company.totalSales * taxRates.AB;
break;

case 'SK':
company['salesTax']=company.totalSales * taxRates.SK;
}

if(result[company.name].totalSales===undefined){
  result[company.name].totalSales=0;
  result[company.name].totalTaxes=0;
}
result[company.name].totalSales += company.totalSales;
result[company.name].totalTaxes +=company.salesTax;
}
   return result;
}
var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);


